import { AppState } from "../AppState.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture || 'https://images.unsplash.com/photo-1698133466680-1ef734d5d12d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }

  get listingHTMLTemplate() {
    return `
     <div class="col-md-6">
          <div class="position-relative shadow house-card" style="border-color: #000000;">
            <img src="${this.imgUrl}" 
            alt="Beautiful Home" class="house-img">
            <span class="house-money d-inline-block px-3 py-1 bg-dark text-success fs-2">$${this.price.toLocaleString()}</span>
            <div class="p-3">
              <h3>${this.bedrooms} Bedroom ${this.bathrooms} Bathroom ${this.levels} Level Home</h3>
              <p class="fs-4">Year Built: ${this.year}</p>
              <p>${this.description}</p>
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <img src="${this.creatorPicture}" alt="${this.creatorName}" class="creator-img">
                  <p class="mb-0">${this.creatorName}</p>
                </div>
                <div>
                  ${this.deleteButton}
                  <small>Listed on ${this.createdAt.toLocaleDateString()}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  }

  get deleteButton() {
    const identity = AppState.identity

    if (identity == null) {
      return ''
    }
    if (identity.id != this.creatorId) {
      return ''
    }
    return `
        button onclick="app.housesController.confirmHouseDelete('${this.id}')" class="btn btn-outline-danger" type="button">Delete House</button>
        `
  }
}

// this.id = data.id
// this.bedrooms = data.bedrooms
// this.bathrooms = data.bathrooms
// this.levels = data.levels
// this.imgUrl = data.imgUrl
// this.year = data.year
// this.price = data.price
// this.description = data.description
// this.creatorId = data.creatorId
// this.creator = data.creator