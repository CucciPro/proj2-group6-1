const router = require("express").Router();
const { User, My_Plants, Plant_Species, Plant_History, Species_Type } = require("../models");
const withAuth = require("../utils/auth");

//species landing page
router.get("/species", withAuth, (req, res) => {
    Plant_Species.findAll({
        attributes: ['species_id', 'common_name', 'botanical_name', 'type_id'],
        order: [
            ['common_name', 'DESC'],
        ]
    })
    .then(dbPostData => {
     const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("species", {
        layout: "main",
        posts
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("login");
    });
});

//Type dropdown creation for new species
router.get("/new-species", withAuth, (req, res) => {
    Species_Type.findAll({
        attributes: ['type_id', 'type_name'],
        order: [
            ['type_name', 'ASC'],
        ]
    })
    .then(dbPostData => {
        const newTypeList = dbPostData.map((typeItem) => typeItem.get({ plain: true }));
        res.render("new-species", {
            layout: "main",
            newTypeList
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect("login");
      });
});

//post new species
router.post("/new-species/", withAuth, (req, res) => {
    const body = req.body;
    Plant_Species.create({ ...body })
    .then(newSpecies => {
        return res.json(newSpecies);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//function to populate type dropdown on edit species
function getType(){
    return Species_Type.findAll({
        attributes: ['type_id', 'type_name'],
        order: [
            ['type_name', 'DESC'],
        ]
    })
};

//edit species get
router.get("/edit-species/:id", withAuth, (req, res) => {
    Plant_Species.findByPk(req.params.id)
    .then(async dbSpeciesData => {
        if (dbSpeciesData) {

            //species data
            const speciesData = dbSpeciesData.get({ plain: true });
            console.log(speciesData);
            //type data
            const type = await getType();
            const editTypeList = type.map((typeItem) => typeItem.get({ plain: true }));

            res.render("edit-species", {
                layout: "main",
                speciesData,
                editTypeList
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.redirect("login");
    });
});

//put callback to update content.
router.put("/edit-species", withAuth, (req, res) => {
    Plant_Species.update(req.body, {
        where: {
            species_id: req.body.species_id
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