const router = require("express").Router();
const axios = require("axios");


router.get("/comics", function (req, res) {
    axios.get("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:wolverine")
    .then(function (response) {

            console.log(response.data.results[0].aliases)


            res.json(response.data)
        })
    .catch(err => res.json(err))
        

});

module.exports = router;