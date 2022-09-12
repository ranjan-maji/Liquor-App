const express = require('express');

const middleWares = require('../middlewares/authenticate');

const orderRouterController = require('../controllers/order.router.controller');

const orderRouter = express.Router(); // initialize express router

orderRouter.get('/get-all-orders-customer', middleWares.verifyUserToken, orderRouterController.getAllOrdersCustomer)
orderRouter.post('/place-order', middleWares.verifyUserToken, orderRouterController.placeOrder)
orderRouter.get('/get-all-orders-seller', middleWares.verifyUserToken, orderRouterController.getAllOrdersSeller)
orderRouter.put('/process-order-seller', middleWares.verifyUserToken, orderRouterController.processOrderSeller)
orderRouter.get('/get-delivery-not-assigned-orders-deliveryAgent', middleWares.verifyUserToken, orderRouterController.getDeliveryNotAssignedOrders)
orderRouter.get('/get-all-orders-deliveryAgent', middleWares.verifyUserToken, orderRouterController.getAllOrdersDeliveryAgent)
orderRouter.put('/process-order-deliveryAgent', middleWares.verifyUserToken, orderRouterController.processOrderDeliveryAgent);

module.exports = orderRouter;
