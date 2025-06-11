import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {

    constructor() {
        console.log('house constructor is ready 🔨')
        AppState.on('houses', this.drawHouses)
        AppState.on('identity', this.drawHouses)
        this.getHouses()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error, 'Shoot', ' Houses did not load.')
            console.error('getHouses failed', error);
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
        try {
            event.preventDefault()  // do not refresh the page
            const formElem = event.target  //get the form that submitted
            const houseFormData = getFormData(formElem)  //get the data out of the form
            console.log('submitted house form🫴🛖📃', houseFormData);
            await housesService.createHouse(houseFormData)
        } catch (error) {
            Pop.error(error, 'Oh no', 'could not create that house')
            console.error('createHouse failed 🖊️🚫', error);
        }
    }

    async confirmHouseDelete(houseId) {
        const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'There is no going back', 'Yes, I am sure', 'No, I reconsidered')
        if (!confirmed) {
            return
        }
        try {
            console.log('deleting house!', houseId);
            await housesService.deleteHouse(houseId)
        } catch (error) {
            Pop.error(error, 'Oh no! could not delete that house')
            console.log('deleteHouse failed', error);
        }
    }

}