/// not functioning as of 4/30/19

const ComicVineClient = require("comicvine");

let client = new ComicVineClient({
    apikey: "c9fea9053bbb565b7f4b69a097b2f30be2fc3a56",
    apiUrl: "http://api.comicvine.com",
    cache: 'redis',
    host: "192.168.56.2",
    port: 6379,
    
});

// client.collections.pageSize = 20; //100 by default
// client.collections.Characters.fetch( {
//     //Regular Backbone.Collection.fetch options here...
// });


