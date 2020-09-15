const router = require("express").Router();
const { Plant_Species, Species_Type } = require("../models");
const withAuth = require("../utils/auth");

//species landing page
router.get("/species", withAuth, (req, res) => {
    Plant_Species.findAll({
        attributes: ['species_id', 'common_name', 'botanical_name', 'type_id'],
        order: [
            ['common_name', 'ASC'],
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
            ['type_name'],
        ]
    })
    .then(dbPostData => {
        const newTypeList = dbPostData.map((typeItem) => typeItem.get({ plain: true }));
        res.render("new-species", {
            layout: "main",
            newTypeList
        });
    });
});

//post new species
router.post("/new-species", withAuth, (req, res) => {
    const body = req.body;
    Plant_Species.create({ ...body, user_id: req.session.userId })
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
            ['type_name'],
        ]
    })
};

//edit species get
router.get("/edit-species/:id", withAuth, (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js : /edit-species/id : line 122 \n' + '='.repeat(50));
    Plant_Species.findByPk(req.params.id)
    .then(async dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            
            const type = await getType();
            const editTypeList = type.map((typeItem) => typeItem.get({ plain: true }));

            res.render("edit-species", {
                layout: "main",
                post,
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
router.put("/edit-species/", withAuth, (req, res) => {
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
