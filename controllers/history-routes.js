const router = require("express").Router();
const { Plant_Species, Plant_History} = require("../models");
const withAuth = require("../utils/auth");

router.get("/new-plant-history/:id", withAuth, (req, res) => {  
    const this_plant_id = req.params.id;
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
        this_plant_id,
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
    console.log(body);
    Plant_History.create({ ...body, user_id: req.session.userId })
    .then(newPlantHistory => {
        return res.json(newPlantHistory);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// edit-plant-history GET : populate form with plant data
router.get("/edit-plant-history/:id", withAuth, (req, res) => {
    Plant_History.findByPk(req.params.id)
    .then(async dbPlantData => {
        if (dbPlantData) {
            //this is for all the data related to the plant itself
            const plantData = dbPlantData.get({ plain: true });
            console.log(plantData);
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
// edit plant history - PUT (update)
router.put("/edit-plant-history/", withAuth, (req, res) => {
    Plant_History.update(req.body, {
        where: {
            history_id: req.body.history_id
        }
    })
    .then(affectedRows => {
        console.log('='.repeat(50) + '\n history-routes.js : /edit-plant-history PUT : line 72 \n' + '='.repeat(50));
        console.log(req.body.history_id);
        if (affectedRows > 0) {
            //res.redirect("http://localhost:3001/edit-plant/" + req.body.plant_id);
            console.log('200 edit plant history');
            res.status(200).end();
        } else {
            console.log('400 edit plant history');
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router; 