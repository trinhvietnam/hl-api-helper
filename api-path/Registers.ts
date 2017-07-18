/**
 * Created by NamTV on 3/28/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";

var Promise = require('bluebird');
export const PATH = {
    REGISTER:'/',
};
export const  ACTION = {
    REGISTER : 'REGISTER'
};
connectRoles.use(ACTION.REGISTER,PATH.REGISTER, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.USER_ONLINE_CAN_NOT_REGISTER,null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });

});

export const registerRoles = connectRoles;
