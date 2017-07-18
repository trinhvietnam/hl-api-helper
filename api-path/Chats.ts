/**
 * Created by NamTV on 3/15/2017.
 */
import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {ACCOUNT} from "../../constants/database/EntityName";
import {AuthorusationUtities} from "./AuthorusationUtities";
import {FactoryModel} from "../../models/FactoryModel";
import {GlobalManager} from "../../config/GlobalManager";
var Promise = require("bluebird");
export const ACTION = {
    ON_MESSAGE: 'ON_MESSAGE',
    SEEM_MESSAGE: 'SEEM_MESSAGE',
    DELETE_THREAD_MESSAGE: 'DELETE_THREAD_MESSAGE',
    LIST_THREAD_MESSAGE: 'LIST_THREAD_MESSAGE',
    LIST_MESSAGE_OF_THREAD: 'LIST_MESSAGE_OF_THREAD',
    GET_LATEST_UNREAD_MESSAGE: 'GET_LATEST_UNREAD_MESSAGE',
};
export class SocketRoles {
    public canOnMessage(userId, data, req) {
        var {fromId, fromType, toId, toType} = data;
        var mFromEntity = FactoryModel.getModel(fromType);
        var mToEntity = FactoryModel.getModel(toType);
        return new Promise((resolve, reject) => {
            if (userId == fromId) {
                mToEntity.checkCanView(userId, toId)
                    .then(([isCanView, role, entity]) => {
                        resolve(isCanView);
                    })
                    .catch(reject);
            } else {
                Promise.all([mFromEntity.checkCanUpdate(userId, fromId), mToEntity.checkCanView(userId, toId)])
                    .then(([[isCanUpdate, roleView], [isCanView, roleUpdate, entity]]) => {
                        resolve(isCanUpdate && isCanView);
                    })
                    .catch(reject);
            }
        })
    }

    public canSeemMessage(userId, data, req) {
        var {ownerId, ownerType} = data;
        return new Promise((resolve, reject) => {
            if (userId == ownerId) {
                resolve(true);
            } else {
                var mOwnerEntity = FactoryModel.getModel(ownerType);
                mOwnerEntity.checkCanUpdate(userId, ownerId)
                    .then(([isCanUpdate, role]) => {
                        resolve(isCanUpdate);
                    })
                    .catch(reject);
            }
        });
    }

    public canJoinRoom(userId, data, req) {
        var {desId, desType} = data;
        return new Promise((resolve, reject) => {
            var mOwnerEntity = FactoryModel.getModel(desType);
            mOwnerEntity.checkCanUpdate(userId, desId)
                .then(([isCanUpdate, role]) => {
                    resolve(isCanUpdate);
                })
                .catch(reject);
        });
    }

    public canLeaveRoom(userId, data,req) {
        var {desId, desType} = data;
        var socket = req.socket;
        return new Promise((resolve, reject) => {
           var sockets = GlobalManager.SC_SOCKETS_IN_MESSAGE_ROOM.get(desId);
           if(sockets && sockets.has(socket)){
               resolve(true);
           }else{
               resolve(false);
           }
        });
    }
}
export const PATH = {
    LIST_THREAD_MESSAGE: '/threads',
    LIST_MESSAGE_OF_THREAD: '/messages',
        GET_LATEST_UNREAD_MESSAGE: '/unread',
};

connectRoles.use(ACTION.LIST_THREAD_MESSAGE, PATH.LIST_THREAD_MESSAGE, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var userId = SessionHelper.getUserId(req);
            var {ownerId, ownerType, timeSave} = req.body;
            if (ownerId == userId && ownerType == ACCOUNT) {
                return resolve(true);
            }
            return AuthorusationUtities.canUpdateEntity(userId, ownerId, ownerType, req).then(resolve).catch(reject);
        }
    });
});

connectRoles.use(ACTION.LIST_MESSAGE_OF_THREAD, PATH.LIST_MESSAGE_OF_THREAD, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var userId = SessionHelper.getUserId(req);
            var {ownerId, ownerType, timeSave} = req.body;
            if (ownerId == userId && ownerType == ACCOUNT) {
                return resolve(true);
            }
            return AuthorusationUtities.canUpdateEntity(userId, ownerId, ownerType, req);
        }
    });
});

connectRoles.use(ACTION.GET_LATEST_UNREAD_MESSAGE, PATH.GET_LATEST_UNREAD_MESSAGE, function (req) {
    return new Promise(function (resolve, reject) {
        if (!SessionHelper.isAuthen(req)) {
            req.roleError = ErrorHelper.error(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var userId = SessionHelper.getUserId(req);
            var {ownerId, ownerType, timeSave} = req.body;
            if (ownerId == userId && ownerType == ACCOUNT) {
                return resolve(true);
            }
            return AuthorusationUtities.canUpdateEntity(userId, ownerId, ownerType, req);
        }
    });
});

export const chatRoles = connectRoles;