const {Type} = require("../models/models")
const ApiError = require("../error/ApiError")

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Type.create({name})
        return res.json(brand)
    }
    async getAll(req, res) {
        const brands = await Type.findAll()
        return res.json(brands)
    }
}
module.exports = new BrandController()