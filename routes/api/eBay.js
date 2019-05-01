const router = require("express").Router();
const Ebay = require("ebay-node-api");

let ebay = new Ebay({
    clientID: "MatthewW-teamMong-PRD-bea920fd0-d55acc84",
    limit: 6
});

// Matches with the /saved
router.get("/search", (req, res) => {

    ebay.findItemsByKeywords("iphone").then((result) => {
        const useable = result[0]

        
        // Need to change req to handle the query


        // console.log(useable.searchResult[0].item);
        // useable.searchResult[0].item[0].forEach(one => {
        // //   console.log(one.title);
        // //   console.log(one.location);
        // //   console.log(one.galleryURL);
        // //   console.log(one.viewItemURL);
        // });
        console.log(useable.searchResult[0].item[0].title);

        res.json({
            title: useable.searchResult[0].item[0].title,
            location: useable.searchResult[0].item[0].location,
            gallery: useable.searchResult[0].item[0].galleryURL,
            view: useable.searchResult[0].item[0].viewItemURL
        })
    }).catch((error) => {
        console.log(error);
    });

})



module.exports = router;