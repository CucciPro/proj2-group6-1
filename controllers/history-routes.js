const router = require("express").Router();
const { User, My_Plants, Plant_Species, Plant_History, Species_Type } = require("../models");
const withAuth = require("../utils/auth");

router.get("/new-plant-history", withAuth, (req, res) => {  
    Plant_Species.findAll({
        attributes: ['species_id', 'common_name', 'botanical_name'],
        order: [
            ['common_name', 'ASC'],
        ]
    })
    .then(dbSpeciesData => {
     const speciesItems = dbSpeciesData.map((speciesItem) => speciesItem.get({ plain: true }));
      res.render("new-plant-history", {
        layout: "main",
        speciesItems
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("login");
    });
});

router.post("/new-plant-history", withAuth, (req, res) => {
    const body = req.body;
    Plant_History.create({ ...body, user_id: req.session.userId })
    .then(newPlantHistory => {
        return res.json(newPlantHistory);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// edit-plant GET : populate form with plant data
router.get("/edit-plant-history/:id", withAuth, (req, res) => {
    Plant_History.findByPk(req.params.id)
    .then(async dbPlantData => {
        if (dbPlantData) {
            //this is for all the data related to the plant itself
            const plantData = dbPlantData.get({ plain: true });
            console.log(plantData);
                console.log('you are about to render edit-plant-history maybe?....');
                res.render("edit-plant-history", {
                    layout: "main",
                    plantData,
                });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        //res.status(500).json(err);
        console.log(err);
        res.redirect("../login");
    });
});

// edit plant - PUT - update
router.put("/edit-plant-history/", withAuth, (req, res) => {
    //console.log('='.repeat(50) + '\n home-routes.js : /edit-plant POST : line 95 \n' + '='.repeat(50));
    //console.log(req.body);
    //this_plant_id = req.body.plant_id;
    Plant_History.update(req.body, {
        where: {
            history_id: req.body.history_id
        }
    })
    .then(affectedRows => {
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
