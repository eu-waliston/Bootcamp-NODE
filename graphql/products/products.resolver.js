const productsModel = require("./products.model");

module.exports = {
    Query: {
        orders: () => {
            return productsModel.getAllProducts();
        }
    }
}