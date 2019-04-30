
const Ebay = require("ebay-node-api");

let ebay = new Ebay({
    clientID: "MatthewW-teamMong-PRD-bea920fd0-d55acc84",
    limit: 6
});

ebay.findItemsByKeywords("iphone").then((result) => {
    const useable = result[0]
    console.log(useable.searchResult[0].item);
    useable.searchResult[0].item.forEach(one => {
        console.log(one.title)
        console.log(one.location)
        console.log(one.galleryURL)
        console.log(one.viewItemURL)
    })

}, (error) => {
    console.log(error);
})
