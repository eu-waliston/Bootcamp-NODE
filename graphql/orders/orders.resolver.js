const odersModel = require('./orders.model')

module.exports = {
    Query: {
        products: () => {
            return odersModel.getAllOrders();
        }
    }
}