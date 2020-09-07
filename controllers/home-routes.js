const router = require("express").Router();
const { User, My_Plants, Plant_Species, Plant_History } = require("../models/");

// homepage that loads when a user is NOT logged in
router.get("/", (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js basic get router \n' + '='.repeat(50));
    //todo - everything that should load on the home route
    res.render("index");
});

router.get("/login", (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js /login line 12 \n' + '='.repeat(50));
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

router.get("/join", (req, res) => {
    console.log('='.repeat(50) + '\n home-routes.js /join line 22 \n' + '='.repeat(50));
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("join");
});

module.exports = router;