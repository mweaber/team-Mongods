import axios from "axios";

export default {
    findCharacter(data) {

        const url = (`https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:${data}`)
        const corsURL = "https://cors-anywhere.herokuapp.com/"

        return axios.get(corsURL + url)  
    },
    test() {

        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Captain+America")
        const corsURL = "https://cors-anywhere.herokuapp.com/"
        return axios.get(corsURL + url)  
        

    },
    findDeadpool() {
   
        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Deadpool")
        const corsURL = "https://cors-anywhere.herokuapp.com/"
        return axios.get(corsURL + url)  
    },
    findSpiderman() {

        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Spider-man")
        const corsURL = "https://cors-anywhere.herokuapp.com/"

        return axios.get(corsURL + url)  
    },
    findRedSonja() {

        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Red"+ " " +"Sonja")
        const corsURL = "https://cors-anywhere.herokuapp.com/"

        return axios.get(corsURL + url)  
    },
    findThanos() {

        const url = ("https://comicvine.gamespot.com/api/characters/?api_key=c9fea9053bbb565b7f4b69a097b2f30be2fc3a56&format=json&filter=name:Thanos")
        const corsURL = "https://cors-anywhere.herokuapp.com/"

        return axios.get(corsURL + url)  
    },
  

};


