"use strict";
exports.__esModule = true;
/**
 * Created by Administrator on 6/17/2017.
 */
var SessionHelper_1 = require("../../utities/SessionHelper");
var ErrorHelper_1 = require("../../utities/ErrorHelper");
var ErrorEC_1 = require("../../constants/errors/ErrorEC");
var ConnectRoles_1 = require("../../middlewares/authorisation/ConnectRoles");
var Promise = require('bluebird');
exports.PATH = {
    LOGOUT: '/'
};
exports.ACTION = {
    LOGOUT: 'LOGOUT'
};
ConnectRoles_1["default"].use(exports.ACTION.LOGOUT, exports.PATH.LOGOUT, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper_1.SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper_1.ErrorHelper.error(ErrorEC_1.ErrorEC.LOGOUT_WHEN_NOT_ONLINE, null, req);
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
});
exports.logoutRoles = ConnectRoles_1["default"];
