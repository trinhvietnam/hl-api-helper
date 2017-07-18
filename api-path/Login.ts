/**
 * Created by NamTV on 3/28/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
var Promise = require('bluebird');
export const PATH = {
    LOGIN:'/',  // /login
};
export const  ACTION = {
    LOGIN : 'LOGIN'
};
connectRoles.use(ACTION.LOGIN,PATH.LOGIN, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.LOGIN_WHEN_ONLINE,null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });

});

export const loginRoles = connectRoles;
