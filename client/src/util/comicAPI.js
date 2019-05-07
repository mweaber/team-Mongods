import axios from "axios";

export default {
    findCharacter: function(data) {
        // console.log("Inside API file " + " " + data);
       return axios.get("/character/search/" + data);
    }
};