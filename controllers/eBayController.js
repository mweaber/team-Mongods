// const axios = require("axios");
const eBay = require("ebay-node-api");

let eBay = new Ebay({
    clientID: "PRD-ea920fd0f16d-5c91-41ea-94ea-ceae",
    limit: 6
});

eBay.findItemsByKeywords("iphone").then((data) => {
    console.log(data); // fetches top 6 results in form of JSON.
}, (error) => {
    console.log(error);
});


