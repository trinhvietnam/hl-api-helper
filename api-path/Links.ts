/**
 * Created by NamTV on 3/15/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {ModelLinkEntity} from "../../models/ModelLinkEntity";
import {AuthorusationUtities} from "./AuthorusationUtities";
var Promise = require('bluebird');
export const PATH = {
    CREATE: '/create',
    DELETE: '/delete',
    LIST: '/list',
    EXIST: '/exist'
};
export const ACTION = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    LIST: 'LIST',
    EXIST: 'EXIST'
};

connectRoles.use(ACTION.CREATE, PATH.CREATE, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            resolve(true);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });

});

connectRoles.use(ACTION.EXIST, PATH.EXIST, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            resolve(true);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });
});

connectRoles.use(ACTION.DELETE, PATH.DELETE, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            resolve(true);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });
});

connectRoles.use(ACTION.LIST, PATH.LIST, function (req) {
    var fromId = req.body[ModelLinkEntity.FIELDS.fromId];
    var fromType = req.body[ModelLinkEntity.FIELDS.fromType];
    var userId = SessionHelper.getUserId(req);
    return AuthorusationUtities.canUpdateEntity(userId, fromId, fromType, req);
});

export const linkRoles = connectRoles;
