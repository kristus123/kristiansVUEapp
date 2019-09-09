import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://thawing-savannah-59760.herokuapp.com',
    // timeout: 10000,
    headers: {
        Authorization: `BEARER ${localStorage.getItem('username')}`
    }
  });


class PlanetsDAO {

    deletePlanet(id) {
        return instance.delete(
            (`/api/v1/planet/deletePlanet`),
            {
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


    updatePlanet() {
        return instance.patch('/api/v1/planet/updatePlanet', 
        {
            "planetID": 2,
            "date_discovered": "yesterday",
            "name": "kristian og lise sin planet",
            "size": "bigger than all the rest"
        }).then(response => {return response.data})
    }


    addPlanet(planetName, planetSize, planetDiscovered) {
        return instance.post(`/api/v1/planet/insertPlanet`,
            {
                "date_discovered": planetDiscovered,
                "name": planetName,
                "size": planetSize
            }
        ).then(response => {
            console.log(response.data);
            return response.data
        })
        console.log("hello")
    }

    getAllPlanets() {
        // console.log(store);
        return instance.get(`/api/v1/planet/getAllPlanets`)
            .then(response => {
                return response.data
            }
        )
    }

    generateApiKey() {
        return instance.post('/api/v1/auth/generate-key')
            .then(response => {
                localStorage.setItem('username', response.data.key)
                console.log(response.data.key);
                return response.data.key;
            })
    }

}
const planetsDao = new PlanetsDAO();
export default planetsDao