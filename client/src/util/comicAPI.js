import axios from "axios";

export default {
    findCharacter(data) {
        // console.log("Inside API file " + " " + data);
        //    return axios.get("/character/search/" + data);
        const url = (`https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:${data}`)
        const corsURL = "https://cors-anywhere.herokuapp.com/"
        // return axios.get(`https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=${data}`)
        return axios.get(corsURL + url)  
    },
    test() {
        return true
    }
};