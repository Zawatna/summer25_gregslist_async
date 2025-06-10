import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"

export class HousesController {

    constructor() {
        console.log("house constructor is ready.")
        AppState.on('houses', this.drawHouses)
        this.getHouses()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error('Shoot, Houses did not download.)', error)
        }
    }

    drawHouses() {
        console.log('🖊️🏘️')
        const houses = AppState.houses
        let housesContent = ''
        houses.forEach(house => housesContent += house.listingHTMLTemplate)
        const houseListingElem = document.getElementById('house-listing')
        houseListingElem.innerHTML = housesContent

    }
    async submitHouse() {
        event.preventDefault()
        console.log('submitted house form')
        const formElem = event.target
        const houseFormData = getFormData(formElem)

    }

}