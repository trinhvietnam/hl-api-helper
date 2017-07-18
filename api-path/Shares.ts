/**
 * Created by NamTV on 3/15/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {ModelLinkEntity} from "../../models/ModelLinkEntity";
import {AuthorusationUtities} from "./AuthorusationUtities";
import {ACCOUNT} from "../../constants/database/EntityName";
var Promise = require('bluebird');
export const PATH = {
    SHARE: '/',
};
export const ACTION = {
    SHARE: 'SHARE'
};

connectRoles.use(ACTION.SHARE, PATH.SHARE, function (req) {
    return new Promise(function (resolve, reject) {
        var userId = SessionHelper.getUserId(req);
        var {toId, entityId, entityType} = req.body;
        if (userId) {
            Promise.all([
                AuthorusationUtities.canViewEntity(userId, toId, ACCOUNT, req),
                AuthorusationUtities.canViewEntity(userId, entityId, entityType, req),
                AuthorusationUtities.canViewEntity(toId, entityId, entityType, req),
            ]).then(([ok1, ok2, ok3]) => {
                resolve(ok1 && ok2 && ok3);
            })
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });

});

export const shareRoles = connectRoles;
