class ProductService {
    constructor(db) {
        this.db = require('../models');
        this.Product = this.db.Product;
    }

    async getAll() {
        try {
            const products = await this.Product.findAll();
            return products;
        } catch (error) {
            throw error;
        }
    }

    async create(_Name, _Price, _Description, _ImageUrl, _Stock) {
        return this.Product.create({
            Name: _Name,
            Price: _Price,
            Description: _Description,
            ImageUrl: _ImageUrl,
            Stock: _Stock
        })
    }
}

module.exports = ProductService;