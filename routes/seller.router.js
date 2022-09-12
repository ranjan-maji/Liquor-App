const express = require('express');

const authenticate = require('../middlewares/authenticate');
const fileUpload = require('../middlewares/fileUpload');

const sellerRouterController = require('../controllers/seller.router.controller');

const sellerRouter = express.Router(); // initialize express router


sellerRouter.get('/request-phone-otp-register', sellerRouterController.requestPhoneOTPForRegister)
sellerRouter.post('/register', sellerRouterController.register)
sellerRouter.get('/request-phone-otp-login', sellerRouterController.requestPhoneOTPForLogin)
sellerRouter.get('/login', sellerRouterController.login)
sellerRouter.get('/logout', authenticate.verifyUserToken, sellerRouterController.logout)
sellerRouter.get('/get-seller', authenticate.verifyUserToken, sellerRouterController.getSellerController)
sellerRouter.put('/update-seller', authenticate.verifyUserToken, fileUpload.upload.single('file'), sellerRouterController.updateSellerDetailController)
sellerRouter.post('/add-new-product', authenticate.verifyUserToken, sellerRouterController.addNewProductController)
sellerRouter.get('/get-all-products', authenticate.verifyUserToken, sellerRouterController.getAllProductsController);

module.exports = sellerRouter;
