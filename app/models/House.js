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
        this.creator = data.creator
    }

    get listingHTMLTemplate() {
        return `
    <div class="col-md-6">
    <div class="position-relative shadow house-car" style="border-color: black;">
    <img src="${this.imgUrl}" alt="" class="car-img">
    <span class="d-inline-block px-3 py-1 bg-dark text-success fs-2">$${this.price}</span>
    <div class="p-3">
    <h3>${this.bedrooms} Bedroom ${this.bathrooms} Bathroom ${this.levels} Level Home</h3>
    <p class="fs-4 fw-bold"></p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus blanditiis provident debitis porro
    soluta ad quasi repudiandae. Id ratione, unde, voluptate maxime recusandae eligendi nostrum molestias,
    nobis quasi quos sit.</p>
    <div class="d-flex justify-content-between align-items-end">
    <div>
    <img src="" alt="" class="src">
    <p class="mb-0">Zawatna</p>
    </div>
    <small>Listed on 06/10/20</small>
    </div>
    </div>
    </div>
    </div>
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