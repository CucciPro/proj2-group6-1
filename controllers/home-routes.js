const router = require("express").Router();
const { User, My_Plants, Plant_Species, Plant_History } = require("../models/");
const withAuth = require("../utils/auth");

// user not logged in - display homepage
router.get("/", (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js : / : line 7 \n' + '='.repeat(50));
    // if user not logged in render index
    if (!req.session.userId) {
        //res.render("index");
        res.redirect('/login');
    } 
    // if user logged in render my-plants
    else {
        //res.render("my-plants");
        res.redirect('/dashboard');
    }
});

// user logged in - display dashboard with list of my plants
router.get("/dashboard", withAuth, (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js : /dashboard : line 20 \n' + '='.repeat(50));
  
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


router.get("/new-plant", withAuth, (req, res) => {
    res.render("new-plant", {
        layout: "main"
    });
});

router.get("/edit-plant/:id", withAuth, (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js : /edit-plant/id : line 50 \n' + '='.repeat(50));
    My_Plants.findByPk(req.params.id)
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            
            res.render("edit-plant", {
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

router.get("/species", withAuth, (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js : /species : line 70 \n' + '='.repeat(50));
  
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
    console.log('='.repeat(50) + '\n home-routes.js : /edit-species/id : line 102 \n' + '='.repeat(50));
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
    //console.log('='.repeat(50) + '\n home-routes.js : line 69 \n' + '='.repeat(50));
    if (req.session.loggedIn) {
        //console.log('='.repeat(50) + '\n home-routes.js : line 72 \n' + '='.repeat(50));
        res.redirect("/dashboard");
        return;
    }

    res.render("login");
});

// user not logged in - join screen
router.get("/join", (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js /join line 22 \n' + '='.repeat(50));
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("join");
});

module.exports = router;