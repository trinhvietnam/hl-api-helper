/**
 * Created by NamTV on 4/2/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {PROJECT, ROLE} from "../../constants/database/EntityName";
import {AuthorusationUtities} from "./AuthorusationUtities";
var Promise = require("bluebird");
export const PATH = {
    LIST_PROJECTS: '/',      // /projects
    CREATE_PROJECT: '/create', // /projects/create
    UPDATE_PROJECT: '/:id/update',
    DETAIL_PROJECT: '/:id',

    DETAIL_PROJECT_PARAMS: {
        id: 'id'
    },
    UPDATE_PROJECT_PARAMS: {
        id: 'id'
    },

};
export const ACTION = {
    CREATE_PROJECT: 'CREATE_PROJECT',
    UPDATE_PROJECT: 'UPDATE_PROJECT',
    VIEW_PROJECT: 'VIEW_PROJECT',
    BIDDING_PROJECT: 'BIDDING_PROJECT'
};

connectRoles.use(ACTION.CREATE_PROJECT, PATH.CREATE_PROJECT, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            resolve(true);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null,req);
            resolve(false);
        }
    });

});
connectRoles.use(ACTION.UPDATE_PROJECT, PATH.UPDATE_PROJECT, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            resolve(true);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null,req);
            resolve(false);
        }
    });

});
connectRoles.use(ACTION.VIEW_PROJECT, PATH.DETAIL_PROJECT, function (req) {
    var projectId = req.params[PATH.DETAIL_PROJECT_PARAMS.id];
    var userId = SessionHelper.getUserId(req);
    console.log(projectId, userId);
    return AuthorusationUtities.canViewEntity(userId, projectId, PROJECT, req);

});
connectRoles.use(ACTION.UPDATE_PROJECT, PATH.UPDATE_PROJECT, function (req) {
    var projectId = req.params[PATH.DETAIL_PROJECT_PARAMS.id];
    var userId = SessionHelper.getUserId(req);
    return AuthorusationUtities.canUpdateEntity(userId, projectId, PROJECT, req);
});

export const projectRoles = connectRoles;
