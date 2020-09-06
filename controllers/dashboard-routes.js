const router = require("express").Router();
const { My_Plants } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log('==========================\nATTENTION: you have hit dashboard-routes.js line 6\n==========================');

  My_Plants.findAll({
      where: {
        user_id: req.session.userId
      }
    })
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render("my-plants", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
    
  });

  /*
  router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
      layout: "dashboard"
    });
  });
  
  router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render("edit-plant", {
            layout: "dashboard",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  */
  
module.exports = router;
