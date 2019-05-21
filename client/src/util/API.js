import axios from "axios";

export default {
    findItemsByKeywords: function(item) {
        // console.log("Inside API file " + " " + item);
       return axios.get("/api/shop/search/" + item);
    },

    saveNewEbay(newEbay) {
        console.log("path in util api hit")
        return axios.post("/api/shop/ebayAdd", {newEbay})
    },

    saveNewStatue(newStatues) {
        console.log("path in util api hit")
        return axios.post("/api/statueinput/statueAdd", {newStatues})
    },

    checkUser() {
        return axios.get("/api/auth/test/what");
    },

    findMyStatues(userStatues) {
        return axios.get("/api/statueinput/statueSearch", {userStatues})
    }


};