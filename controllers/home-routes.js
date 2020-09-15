const router = require("express").Router();
const { My_Plants, Plant_Species, Plant_History } = require("../models/");
const withAuth = require("../utils/auth");

// basic route : if user not logged in send user to login.  if user is logged in send user to dashboard
router.get("/", (req, res) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } 
    else {
        res.redirect('/dashboard');
    }
});

// dashboard GET : display dashboard with list of my plants if user is logged in otherwise send to login
router.get("/dashboard", withAuth, (req, res) => {
    My_Plants.findAll({
        where: {
          user_id: req.session.userId
        }
    })
    .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render("my-plants", {
        layout: "main",
        posts
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect("login");
    });
});

// new-plant GET : populate species dropdown
router.get("/new-plant", withAuth, (req, res) => {  
    Plant_Species.findAll({
        attributes: ['species_id', 'common_name', 'botanical_name'],
        order: [
            ['common_name', 'ASC'],
        ]
    })
    .then(dbSpeciesData => {
     const speciesItems = dbSpeciesData.map((speciesItem) => speciesItem.get({ plain: true }));
      res.render("new-plant", {
        layout: "main",
        speciesItems
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("login");
    });
});

// new-plant POST : create
router.post("/new-plant", withAuth, (req, res) => {
    const body = req.body;
    My_Plants.create({ ...body, user_id: req.session.userId })
    .then(newPlant => {
        //console.log(newPlant);
        return res.json(newPlant);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//Ihab (subbing TA on Sept 13, 2020) said to do it this way and it works and i'm happy
function getSpecies(){
    return Plant_Species.findAll({
        attributes: ['species_id', 'common_name', 'botanical_name'],
        order: [
            ['common_name', 'ASC'],
        ]
    })
}

// edit-plant GET : populate form with plant data
router.get("/edit-plant/:id", withAuth, (req, res) => {
    My_Plants.findByPk(req.params.id)
    .then(async dbPlantData => {
        if (dbPlantData) {
            
            //this is for all the data related to the plant itself
            const plantData = dbPlantData.get({ plain: true });
            
            //this is calling a function that gets all the species in the db
            //this is called in order to populate the species dropdown on the edit form
            const species = await getSpecies();
            const speciesList = species.map((speciesItem) => speciesItem.get({ plain: true }));

            //if user is authorized to view plant (only if they created it) render the template
            if (req.session.userId === plantData.user_id){
                res.render("edit-plant", {
                    layout: "main",
                    plantData,
                    speciesList
                });
            } 
            //if user is not authorized to view plant (they did not create it) redirect back to dashboard
            else {
                //could be nice to provide user with message that they aren't authorized to access this plant record but communicating that back to the user is not essential because users shouldn't try to be sneaky and load an unauthorized plant record
                res.redirect("/dashboard");
            }
            
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
router.put("/edit-plant/", withAuth, (req, res) => {
    //console.log('='.repeat(50) + '\n home-routes.js : /edit-plant POST : line 95 \n' + '='.repeat(50));
    //console.log(req.body);
    //this_plant_id = req.body.plant_id;
    My_Plants.update(req.body, {
        where: {
            plant_id: req.body.plant_id
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

// user not logged in - login screen
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/dashboard");
        return;
    }

    res.render("login");
});

// user not logged in - join screen
router.get("/join", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("join");
});

module.exports = router;