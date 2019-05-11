import axios from "axios";

export default {
    findItemsByKeywords: function(item) {
        // console.log("Inside API file " + " " + item);
       return axios.get("/api/shop/search/" + item);
    },

    saveNewEbay(newEbay) {
        return axios.post("/api/shop/ebayAdd", {newEbay})
    },

    checkUser() {
        return axios.get("/api/auth/test/what");
    }

};