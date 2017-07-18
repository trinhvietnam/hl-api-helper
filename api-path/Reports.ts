/**
 * Created by NamTV on 3/15/2017.
 */
import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {AuthorusationUtities} from "./AuthorusationUtities";
var Promise = require("bluebird");
export const PATH = {
    REPORT: '/',
    LIST_REPORT: '/list'
};

export const ACTION = {
    REPORT: 'REPORT',
    LIST_REPORT: 'LIST_REPORT',
};

connectRoles.use(ACTION.REPORT, PATH.REPORT, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var {ownerId, ownerType} = req.body;
            var userId = SessionHelper.getUserId(req);
            return AuthorusationUtities.canViewEntity(userId, ownerId, ownerType, req).then(resolve).catch(reject)
        }
    });
});
connectRoles.use(ACTION.LIST_REPORT, PATH.LIST_REPORT, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var userId = SessionHelper.getUserId(req);

            if(userId == 'admin'){
                resolve(true);
            }else{
                req.roleError = ErrorHelper.error(ErrorEC.HAVE_NOT_PERMISSION, null, req);
                resolve(false);
            }
        }
    });
});

export const reportRoles = connectRoles;