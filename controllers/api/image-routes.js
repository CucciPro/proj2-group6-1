
const router = require("express").Router();
const { Image } = require("../../models");


router.get('/', (req,res) => {
    res.json('test')},


);

router.post("/api/images", (req, res) => {
    console.log('hey there this matt' , req.file)
    if (!req.body) {
      return
    }
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