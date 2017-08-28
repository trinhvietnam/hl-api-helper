/**
 * Created by Administrator on 6/17/2017.
 */
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import connectRoles from "../../middlewares/authorisation/ConnectRoles";
var Promise = require('bluebird');
export const PATH = {
    LOGOUT:'/',
};
export const  ACTION = {
    LOGOUT : 'LOGOUT'
};
connectRoles.use(ACTION.LOGOUT,PATH.LOGOUT, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.LOGOUT_WHEN_NOT_ONLINE,null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });

});

export const logoutRoles = connectRoles;
