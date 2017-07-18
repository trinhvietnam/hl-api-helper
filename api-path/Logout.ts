/**
 * Created by NamTV on 3/28/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";

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
