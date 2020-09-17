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