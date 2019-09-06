import axios from 'axios';

class PlanetsDAO {

    constructor() {
        this.url = "https://cors-anywhere.herokuapp.com/https://thawing-savannah-59760.herokuapp.com";
    }


    deletePlanet(id) {


        return axios.delete(
            (`${this.url}/api/v1/planet/deletePlanet`),
            {
                headers: {
                    Authorization: "BEARER 51f5bc31f7366312b0dd050be5e4af4b2780a9a92d10119738fdb560d39509b9"
                },
                data: {
                    planetID: id
                }
            }

        ).then(response => {
            if (response.data.success) {
                return response.data.success
            } else {
                console.log(response)
                return response.data.msg;
            }
        })
    }


    addPlanet(planetName, planetSize, planetDiscovered) {
        return axios.post(`${this.url}/api/v1/planet/insertPlanet`,
            {
                "date_discovered": planetDiscovered,
                "name": planetName,
                "size": planetSize
            },

            {
                headers: {
                    Authorization: "BEARER 51f5bc31f7366312b0dd050be5e4af4b2780a9a92d10119738fdb560d39509b9"
                }
            }
        ).then(response => {
            console.log(response.data);
            return response.data
        })
        console.log("hello")
    }



    getAllPlanets() {

        return axios.get(`${this.url}/api/v1/planet/getAllPlanets`,
            {
                headers:
                {
                    Authorization: "BEARER 51f5bc31f7366312b0dd050be5e4af4b2780a9a92d10119738fdb560d39509b9"
                    // origin: "http://google.com/"
                }
            }

        ).then(response => {
            return response.data
        })

    }

}
const planetsDao = new PlanetsDAO();
export default planetsDao