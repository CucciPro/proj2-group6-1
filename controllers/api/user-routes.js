const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
  console.log("req it. req it good user-routes line 5");
  //console.log(req.body);
  User.create({
    user_name: req.body.username,
    password: req.body.password
  }).then(dbUserData => {
      req.session.save(() => {
      req.session.userId = dbUserData.user_id;
      req.session.username = dbUserData.user_name;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  console.log("req it. req it good user-routes line 25");
  //console.log(req.body);
  User.findOne({
    where: { user_name: req.body.user_name }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = dbUserData.user_id;
      req.session.username = dbUserData.user_name;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.delete("/user/:id", (req, res) => {
  User.destroy({
    where: { id: req.params.id }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'User does not exist.' });
      return;
    }
  res.json(dbUserData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;