import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";

class HousesService {
    async getHouses() {
        const response = await api.get('api/houses')
        console.log('got houses! 🏘️🏡🏚️🏠🛖', response.data);
        const houses = response.data.map(pojo => new House(pojo))
        AppState.houses = houses
        console.log(houses)
    }
    async createHouse(houseData) {
        const response = await api.post('api/houses', houseData)
        console.log('Created House 🔨🛖', response.data);
        const newHouse = new House(response.data)
        AppState.houses.push(newHouse)
    }

    async deleteHouse(houseId) {
        const response = await api.delete(`api/houses/${houseId}`)
        console.log('deleted house', response.data);
        const houses = AppState.houses
        const houseIndex = houses.findIndex(house => house.id == houseId)
        houses.splice(houseIndex, 1)
    }
}

export const housesService = new HousesService()
