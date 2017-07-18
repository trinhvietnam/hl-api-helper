/**
 * Created by NamTV on 3/28/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {Logger} from "../../utities/Logger";
import {PROJECT, CONTRACTOR} from "../../constants/database/EntityName";
var Promise = require('bluebird');
var log = Logger.getNewLogger(__filename);
export const PATH = {
    DETAIL_ACCOUNT: '/:id',
    UPDATE_ACCOUNT: '/:id/update',
    UPDATE_EMAIL_NOTIFY: '/:id/update/emailNotify',
    CHANGE_PASSWORD: '/:id/changePassword',
    FORGET_PASSWORD: '/:id/forgetPassword',
    RESET_PASSWORD: '/:id/resetPassword',
    EXTRAS_OF_ACCOUNT: '/:id/:type',
    PROJECT_OF_ACCOUNT: '/:id/'+PROJECT,
    CONTRACTOR_OF_ACCOUNT: '/:id/'+CONTRACTOR,
    EXTRAS_OF_ACCOUNT_PARAMS: {
        type: 'type',
        id: 'id'
    },
    UPDATE_EMAIL_NOTIFY_PARAMS: {
        id: 'id'
    },
    UPDATE_ACCOUNT_PARAMS: {
        id: 'id'
    },
    CHANGE_PASSWORD_PARAMS: {
        id: 'id'
    },
    FORGET_PASSWORD_PARAMS: {
        id: 'id'
    },
    RESET_PASSWORD_PARAMS: {
        id: 'id'
    },
};
export const ACTION = {
    VIEW_DETAIL: 'VIEW_DETAIL',
    UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
    VIEW_EXTRAS: 'VIEW_EXTRAS',
    UPDATE_EMAIL_NOTIFY: 'UPDATE_EMAIL_NOTIFY',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    FORGET_PASSWORD: 'FORGET_PASSWORD',
    RESET_PASSWORD: 'RESET_PASSWORD',
};

connectRoles.use(ACTION.VIEW_EXTRAS, PATH.EXTRAS_OF_ACCOUNT, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var id = req.params[PATH.EXTRAS_OF_ACCOUNT_PARAMS.id];
            if(id != SessionHelper.getUserId(req)){
                ErrorHelper.setRoleError(ErrorEC.FORCE_ACCESS_RESOURCE_OF_ANOTHER,null,req);
                resolve(false);
            }else{
                resolve(true);
            }

        }
    });

});
connectRoles.use(ACTION.UPDATE_ACCOUNT, PATH.UPDATE_ACCOUNT, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null,req);
            resolve(false);
        } else if(SessionHelper.getUserId(req) != req.params[PATH.UPDATE_ACCOUNT_PARAMS.id]){
            ErrorHelper.setRoleError(ErrorEC.USER_NOT_MATCH, null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });
});

connectRoles.use(ACTION.UPDATE_EMAIL_NOTIFY, PATH.UPDATE_EMAIL_NOTIFY, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null,req);
            resolve(false);
        } else if(SessionHelper.getUserId(req) != req.params[PATH.UPDATE_ACCOUNT_PARAMS.id]){
            ErrorHelper.setRoleError(ErrorEC.USER_NOT_MATCH, null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });
});
connectRoles.use(ACTION.CHANGE_PASSWORD, PATH.CHANGE_PASSWORD, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null,req);
            resolve(false);
        } else if(SessionHelper.getUserId(req) != req.params[PATH.UPDATE_ACCOUNT_PARAMS.id]){
            ErrorHelper.setRoleError(ErrorEC.USER_NOT_MATCH, null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });
});
connectRoles.use(ACTION.FORGET_PASSWORD, PATH.FORGET_PASSWORD, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            resolve(true);
        } else if(SessionHelper.getUserId(req) != req.params[PATH.UPDATE_ACCOUNT_PARAMS.id]){
            ErrorHelper.setRoleError(ErrorEC.USER_NOT_MATCH, null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });
});
connectRoles.use(ACTION.RESET_PASSWORD, PATH.RESET_PASSWORD, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            resolve(true);
        } else if(SessionHelper.getUserId(req) != req.params[PATH.UPDATE_ACCOUNT_PARAMS.id]){
            ErrorHelper.setRoleError(ErrorEC.USER_NOT_MATCH, null,req);
            resolve(false);
        }else{
            resolve(true);
        }
    });
});


connectRoles.use(ACTION.VIEW_DETAIL, PATH.DETAIL_ACCOUNT, function (req) {
    return new Promise(function (resolve, reject) {
        // if (SessionHelper.isAuthen(req)) {
        //     req.roleError = ErrorHelper.error(ErrorEC.USER_ONLINE_CAN_NOT_REGISTER, null, req);
        //     resolve(false);
        // } else {
        //     resolve(true);
        // }
        resolve(true);
    });

});

export const accountRoles = connectRoles;
