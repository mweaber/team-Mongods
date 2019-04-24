import axios from "axios";

export default {
    findItemsByKeywords: function(item) {
        return axios.get("/saved");
    }
};