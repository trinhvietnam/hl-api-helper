"use strict";
exports.__esModule = true;
var ConnectRoles_1 = require("../../middlewares/authorisation/ConnectRoles");
var Promise = require('bluebird');
exports.PATH = {
    LOGIN: '/'
};
exports.ACTION = {
    LOGIN: 'LOGIN'
};
ConnectRoles_1["default"].use(exports.ACTION.LOGIN, exports.PATH.LOGIN, function (req) {
    return new Promise(function (resolve, reject) {
        // if (SessionHelper.isAuthen(req)) {
        //     req.roleError = ErrorHelper.error(ErrorEC.LOGIN_WHEN_ONLINE,null,req);
        //     resolve(false);
        // }else{
        resolve(true);
        // }
    });
});
exports.loginRoles = ConnectRoles_1["default"];
