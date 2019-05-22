const router = require("express").Router();
const dbStatues = require("../../models/statues");


function checkAuth(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({
            Error: "Unauthorized"
        });
    }
}

// Matches with the /saved

router.post("/statueAdd", checkAuth, (req, res) => {
  
    console.log(req.body)
  
    const newStatues = new dbStatues(req.body.newStatues);
    newStatues.userID = req.user._id;
    newStatues.save()
        .then(result => res.json(result))
        .catch(err => res.json(err))

})

router.get("/statueSearch", (req, res) => {
    dbStatues.find({userID: req.user._id})
    .then(function(dbStatuesShow) {
        res.json(dbStatuesShow)
    })
    .catch(function(err) {
        res.json(err)
    })
})

router.get("/statuedelete/:id", checkAuth, (req,res) =>{
    const id = req.params.id;
    dbStatues.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
})

router.get("/recentstatues", (req,res) => {
    dbStatues.find()
        .sort({_id: -1})
        .then(result => res.json(result))
        .catch(err => res.json(err));
 })

module.exports = router;