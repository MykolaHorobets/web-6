const {Brand} = require('../models/models')
class BrandController{
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
        
    }
    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    async delete(req, res) {
        const {id} = req.params
        const result = await Brand.destroy({where: {id}})
        return res.status(200).json({
            message: 'deleted', 
          });
    }
}

module.exports = new BrandController()