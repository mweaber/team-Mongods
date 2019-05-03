import axios from "axios";

export default {
    findItemsByKeywords: function(item) {
        // console.log("Inside API file " + " " + item);
       return axios.get("/shop/search/" + item);
    }
};