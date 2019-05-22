import axios from "axios";

export default {
    findItemsByKeywords: function(item) {
        // console.log("Inside API file " + " " + item);
       return axios.get("/api/shop/search/" + item);
    },

    saveNewEbay(newEbay) {
        // console.log("path in util api hit")
        return axios.post("/api/shop/ebayAdd", {newEbay})
    },

    saveNewStatue(newStatues) {
        // console.log("path in util api hit")
        return axios.post("/api/statueinput/statueAdd", {newStatues})
    },

    saveNewPO(newPO) {
        console.log("util path hit")
        return axios.post("/api/preorder/newPreorder", {newPO})
    },

    checkUser() {
        return axios.get("/api/auth/test/what");
    },

    findMyStatues(userStatues) {
        return axios.get("/api/statueinput/statueSearch", {userStatues})
    },

    findMyEbayItems(userItems) {
        return axios.get("api/shop/ebayItems", {userItems})
    },

    findRecentlyAdded(recentItems) {
        return axios.get("/api/recentItems/recentStatues", {recentItems})
    },
    deleteStatue(id) {
        return axios.delete(`/api/statueinput/deletestatue/${id}`)
    },
    ebayItemsRecent() {
        return axios.get("/api/shop/recentebay");
    },
    statuesRecent() {
        return axios.get("/api/statueinput/recentstatues")
    },
    preordersRecent() {
        return axios.get("/api/preorder/recentPreorders")
    }
};