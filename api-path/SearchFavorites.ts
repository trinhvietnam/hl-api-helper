/**
 * Created by NamTV on 3/28/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
var Promise = require('bluebird');
export const PATH = {
    SAVE_SEARCH_FAVORITE: '/',
    LIST_SEARCH_FAVORITE: '/list',
    UPDATE_SEARCH_FAVORITE: '/update',
    DELETE_SEARCH_FAVORITE: '/delete',
};
export const ACTION = {
    SAVE_SEARCH_FAVORITE: 'SAVE_SEARCH_FAVORITE',
    LIST_SEARCH_FAVORITE: 'LIST_SEARCH_FAVORITE',
    UPDATE_SEARCH_FAVORITE: 'UPDATE_SEARCH_FAVORITE',
    DELETE_SEARCH_FAVORITE: 'DELETE_SEARCH_FAVORITE',
};
connectRoles.use(ACTION.SAVE_SEARCH_FAVORITE, PATH.SAVE_SEARCH_FAVORITE, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            resolve(true);
        }
    });
});

connectRoles.use(ACTION.LIST_SEARCH_FAVORITE, PATH.LIST_SEARCH_FAVORITE, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            resolve(true);
        }
    });
});

connectRoles.use(ACTION.LIST_SEARCH_FAVORITE, PATH.LIST_SEARCH_FAVORITE, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            resolve(true);
        }
    });
});

connectRoles.use(ACTION.UPDATE_SEARCH_FAVORITE, PATH.UPDATE_SEARCH_FAVORITE, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            resolve(true);
        }
    });
});

connectRoles.use(ACTION.DELETE_SEARCH_FAVORITE, PATH.DELETE_SEARCH_FAVORITE, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            resolve(true);
        }
    });
});

export const searchFavoriteRoles = connectRoles;
