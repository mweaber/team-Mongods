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

    },
    findDeadpool() {
        // console.log("Inside API file " + " " + data);
        //    return axios.get("/character/search/" + data);
        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Deadpool")
        const corsURL = "https://cors-anywhere.herokuapp.com/"
        // return axios.get(`https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=${data}`)
        return axios.get(corsURL + url)  
    },
    findSpiderman() {
        // console.log("Inside API file " + " " + data);
        //    return axios.get("/character/search/" + data);
        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Spider-man")
        const corsURL = "https://cors-anywhere.herokuapp.com/"
        // return axios.get(`https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=${data}`)
        return axios.get(corsURL + url)  
    },
    findRedSonja() {
        // console.log("Inside API file " + " " + data);
        //    return axios.get("/character/search/" + data);
        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Red"+ " " +"Sonja")
        const corsURL = "https://cors-anywhere.herokuapp.com/"
        // return axios.get(`https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=${data}`)
        return axios.get(corsURL + url)  
    },
    findThanos() {
        // console.log("Inside API file " + " " + data);
        //    return axios.get("/character/search/" + data);
        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Thanos")
        const corsURL = "https://cors-anywhere.herokuapp.com/"
        // return axios.get(`https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=${data}`)
        return axios.get(corsURL + url)  
    },

};



// 
// const url = 'https://omdbapi.com/?apikey=trilogy&t="ghost in the shell"'
// const corsURL = "https://cors-anywhere.herokuapp.com/"

// fetch(corsURL + url)
// .then(res => res.json())
// .then(res => console.log(res))


