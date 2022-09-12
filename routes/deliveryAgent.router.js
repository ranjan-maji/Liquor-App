const express = require('express');

const authenticate = require('../middlewares/authenticate');
const fileUpload = require('../middlewares/fileUpload');

const deliveryAgentRouterController = require('../controllers/deliveryAgent.router.controller');

const deliveryAgentRouter = express.Router(); // initialize express router

deliveryAgentRouter.get('/request-phone-otp-register', deliveryAgentRouterController.requestPhoneOTPForRegister)
deliveryAgentRouter.post('/register', deliveryAgentRouterController.register)
deliveryAgentRouter.get('/request-phone-otp-login', deliveryAgentRouterController.requestPhoneOTPForLogin)
deliveryAgentRouter.get('/login', deliveryAgentRouterController.login)
deliveryAgentRouter.get('/logout', authenticate.verifyUserToken,deliveryAgentRouterController.logout)
deliveryAgentRouter.get('/get-deliveryAgent', authenticate.verifyUserToken,deliveryAgentRouterController.getDeliveryAgentController)
deliveryAgentRouter.put('/update-deliveryAgent', authenticate.verifyUserToken,fileUpload.upload.single('file'),deliveryAgentRouterController.updateDeliveryAgentController);

module.exports = deliveryAgentRouter;
