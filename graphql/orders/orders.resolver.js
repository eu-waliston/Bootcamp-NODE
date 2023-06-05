const odersModel = require('./orders.model')

module.exports = {
    Query: {
        orders: () => {
            return odersModel.getAllOrders();
        }
    }
}