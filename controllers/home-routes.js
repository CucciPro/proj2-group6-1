const router = require("express").Router();
const { User, My_Plants, Plant_Species, Plant_History } = require("../models/");

// homepage that loads when a user is NOT logged in
router.get("/", (req, res) => {
    console.log('ATTENTION : you have hit home-routes.js basic get router');
    //todo - everything that should load on the home route
    res.render("index");
});

router.get("/login", (req, res) => {
    console.log('==========================\nATTENTION: you have hit home-routes.js line 12\n==========================');
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

router.get("/join", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/dashboard");
        return;
    }

    res.render("join");
});

module.exports = router;