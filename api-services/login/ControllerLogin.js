"use strict";
exports.__esModule = true;
var ResponseHelper_1 = require("../../utities/ResponseHelper");
var ModelUser_1 = require("../user/ModelUser");
var AuthorisatorLogin_1 = require("./AuthorisatorLogin");
var ValidatorLogin_1 = require("./ValidatorLogin");
var ErrorEC_1 = require("../../constants/errors/ErrorEC");
var ErrorHelper_1 = require("../../utities/ErrorHelper");
var UserFields_1 = require("../user/UserFields");
var RoleManager_1 = require("../../manager/RoleManager");
var SessionHelper_1 = require("../../utities/SessionHelper");
var SocketServer_1 = require("../../socket/SocketServer");
var BusinessEvent_1 = require("../../constants/eventnames/BusinessEvent");
var express = require('express');
var router = express.Router();
var passport = require('passport');
var validate = require('express-validation');
var mUser = new ModelUser_1.ModelUser();
router.post(AuthorisatorLogin_1.PATH.LOGIN, validate(ValidatorLogin_1.VALIDATION_LOGIN), AuthorisatorLogin_1.loginRoles.can(AuthorisatorLogin_1.ACTION.LOGIN), function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        console.log('333333333333333333333333333333333333', err, user, info);
        if (err) {
            return ResponseHelper_1.ResponseHelper.json(req, res, { ec: ErrorEC_1.ErrorEC.LOGIN_FAIL }, null);
            // return next(err);
            // return next(err);
        }
        if (!user) {
            var error = ErrorHelper_1.ErrorHelper.error(ErrorEC_1.ErrorEC.LOGIN_FAIL, info, req);
            ResponseHelper_1.ResponseHelper.json(req, res, error, null);
            return;
        }
        if (!user[UserFields_1.UserFields.keyJWT]) {
            user[UserFields_1.UserFields.keyJWT] = new Date().getTime();
            var properties = {};
            properties[UserFields_1.UserFields.keyJWT] = user[UserFields_1.UserFields.keyJWT];
            mUser.update(user.id, properties, user.id);
        }
        RoleManager_1.RoleManager.Instance.getFullRolesOfUserOnAllEntity(user.id)
            .then(function (mapRoles) {
            console.log('666666666666666666666666666666666666');
            user.mapRoles = mapRoles;
            SessionHelper_1.SessionHelper.setUser(user, req);
            ResponseHelper_1.ResponseHelper.json(req, res, null, JSON.parse(JSON.stringify([user, SessionHelper_1.SessionHelper.getTokenJWTObject(user)])));
            SocketServer_1.SocketServer.Instance.onWebServerEvent(BusinessEvent_1.BusinessEvent.ON_LOGIN, user);
        });
    })(req, res, next);
});
module.exports = router;
