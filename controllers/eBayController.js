// const axios = require("axios");
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
});

// const Ebay = require("ebay-node-api");
 
// let ebay = new Ebay({
//     clientID: "MatthewW-teamMong-PRD-bea920fd0-d55acc84",
//     clientSecret: 'PRD-ea920fd0f16d-5c91-41ea-94ea-ceae',
//     body: {
//         grant_type: "client_credentials"
//     }
// });
// ebay.getAccessToken().then((data) => {
//     console.log(data); // data.access_token
// }, (error) => {
//     console.log(error);
// });
// ebay.findItemsByKeywords("iphone")
//     .then((data) => {
//         console.log(data); // fetches top 6 results in form of JSON.       
// }, (error) => {
//         console.log(error);
// });


