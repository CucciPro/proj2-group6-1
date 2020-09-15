const router = require("express").Router();
const { User, My_Plants, Plant_Species, Plant_History } = require("../models");
const withAuth = require("../utils/auth");

// species - GET
router.get("/species", withAuth, (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js : /species : line 94 \n' + '='.repeat(50));
  
    Plant_Species.findAll({
        attributes: ['species_id', 'common_name', 'botanical_name'],
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

router.get("/new-species", withAuth, (req, res) => {
    res.render("new-species", {
        layout: "main"
    });
});

router.get("/edit-species/:id", withAuth, (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js : /edit-species/id : line 122 \n' + '='.repeat(50));
    Plant_Species.findByPk(req.params.id)
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            
            res.render("edit-species", {
                layout: "main",
                post
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        //res.status(500).json(err);
        console.log(err);
        res.redirect("login");
    });
});

module.exports = router;
