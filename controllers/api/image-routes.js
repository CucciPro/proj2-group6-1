
const router = require("express").Router();
const { Image } = require("../../models");


router.get('/', (req,res) => {
    res.json('test')},


);

router.post("/", (req, res) => {
    console.log(req.files);
    Image.create({
      image_file: req.body.fileName,
      
      
    }).then(imageData => {
        console.log(imageData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  
    });
module.exports = router;