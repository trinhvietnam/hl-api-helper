"use strict";
exports.__esModule = true;
var ResponseHelper_1 = require("../../utities/ResponseHelper");
var express = require('express');
var router = express.Router();
var passport = require('passport');
var validate = require('express-validation');
var AuthorisatorLogout_1 = require("./AuthorisatorLogout");
var ValidatorLogout_1 = require("./ValidatorLogout");
var ModelUser_1 = require("../user/ModelUser");
var SessionHelper_1 = require("../../utities/SessionHelper");
var UserFields_1 = require("../user/UserFields");
var mUser = new ModelUser_1.ModelUser();
router.post(AuthorisatorLogout_1.PATH.LOGOUT, AuthorisatorLogout_1.logoutRoles.can(AuthorisatorLogout_1.ACTION.LOGOUT), validate(ValidatorLogout_1.VALIDATION_LOGOUT), function (req, res, next) {
    var userId = SessionHelper_1.SessionHelper.getUserId(req);
    req.session.destroy(function () {
        var properties = {};
        properties[UserFields_1.UserFields.keyJWT] = null;
        mUser.update(userId, properties, userId);
        ResponseHelper_1.ResponseHelper.json(req, res, null, null);
    });
});
module.exports = router;
