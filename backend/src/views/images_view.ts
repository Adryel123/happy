import Image from "../models/Image"

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://${process.env.LOCALHOST_ADDRESS}:3333/uploads/${image.path}`
        }
    },

    renderMany(image: Image[]) {
        return image.map(image => this.render(image))
    }
}