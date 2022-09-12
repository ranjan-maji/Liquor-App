const express = require("express");

const authenticate = require("../middlewares/authenticate");
const fileUpload = require("../middlewares/fileUpload");

const customerRouterController = require("../controllers/customer.router.controller");

const customerRouter = express.Router(); // initialize express router

customerRouter.get("/request-phone-otp-register", customerRouterController.requestPhoneOTPForRegister)
customerRouter.post("/register", customerRouterController.register)
customerRouter.get("/request-phone-otp-login", customerRouterController.requestPhoneOTPForLogin)
customerRouter.get("/login", customerRouterController.login)
customerRouter.get("/logout", authenticate.verifyUserToken, customerRouterController.logout)
customerRouter.get("/get-customer", authenticate.verifyUserToken, customerRouterController.getCustomerController)
customerRouter.get("/get-all-sellers", authenticate.verifyUserToken, customerRouterController.getAllSellersController)
customerRouter.put("/update-customer", authenticate.verifyUserToken, fileUpload.upload.single("file"),customerRouterController.updateCustomerDetailController)
customerRouter.get("/get-cart", authenticate.verifyUserToken, customerRouterController.getCartController)
customerRouter.put("/update-cart", authenticate.verifyUserToken, customerRouterController.updateCartController);

module.exports = customerRouter;
