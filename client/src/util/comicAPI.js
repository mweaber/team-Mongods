import axios from "axios";

export default {
    findCharacter: function(data) {
        console.log("Inside API file " + " " + data);
       return axios.get("/character/search/" + data);
//     axios.get("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=wolverine")
//     .then(function (response) {
//             console.log(response.data.results[0].aliases)
//             response.json(response.data)
//         })
//     .catch(err => data.json(err))
    }
};