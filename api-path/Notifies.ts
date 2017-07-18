/**
 * Created by NamTV on 3/15/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {ModelLinkEntity} from "../../models/ModelLinkEntity";
import {AuthorusationUtities} from "./AuthorusationUtities";
import {ACCOUNT, COMMENT} from "../../constants/database/EntityName";
import {ModelComment} from "../../models/ModelComment";
import {FactoryModel} from "../../models/FactoryModel";
import {EntityComment} from "../../entities/EntityComment";
var Promise = require('bluebird');
export const PATH = {
    LIST_NOTIFIES: '/list',
    SET_READ: '/read',
};
export const ACTION = {
    LIST_NOTIFIES: 'LIST_NOTIFIES',
    SET_READ: 'SET_READ',
};

connectRoles.use(ACTION.LIST_NOTIFIES, PATH.LIST_NOTIFIES, function (req) {
    return new Promise(function (resolve, reject) {
        var userId = SessionHelper.getUserId(req);
        if (userId) {
            resolve(true);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });

});
connectRoles.use(ACTION.SET_READ, PATH.SET_READ, function (req) {
    return new Promise(function (resolve, reject) {
        var userId = SessionHelper.getUserId(req);
        if (userId) {
            resolve(true);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });

});


export const notifiesRoles = connectRoles;
