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
    COMMENT: '/',
    LIST_COMMENT: '/list',
    ANSWER_COMMENT: '/answer',
};
export const ACTION = {
    COMMENT: 'COMMENT',
    LIST_COMMENT: 'LIST_COMMENT',
    ANSWER_COMMENT: 'ANSWER_COMMENT'
};
var mComment = <ModelComment> FactoryModel.getModel(COMMENT);
connectRoles.use(ACTION.COMMENT, PATH.COMMENT, function (req) {
    return new Promise(function (resolve, reject) {
        var userId = SessionHelper.getUserId(req);
        var {entityId, entityType, commentById, commentByType} = req.body;
        if (userId) {
            Promise.all([
                AuthorusationUtities.canUpdateEntity(userId, commentById, commentByType, req),
                AuthorusationUtities.canViewEntity(userId, entityId, entityType, req)
            ]).then(([ok1, ok2]) => {
                resolve(ok1 && ok2);
            })
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });

});

connectRoles.use(ACTION.ANSWER_COMMENT, PATH.ANSWER_COMMENT, function (req) {
    return new Promise(function (resolve, reject) {
        var userId = SessionHelper.getUserId(req);
        var {entityId, commentById, commentByType} = req.body;
        if (userId) {
            Promise.all([
                AuthorusationUtities.canUpdateEntity(userId, commentById, commentByType, req),
                mComment.isExistById(entityId)
            ]).then(([ok1, ok2]) => {
                resolve(ok1 && ok2);
            })
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        }
    });

});

connectRoles.use(ACTION.LIST_COMMENT, PATH.LIST_COMMENT, function (req) {
    return new Promise(function (resolve, reject) {
        var userId = SessionHelper.getUserId(req);
        var {entityId, entityType} = req.body;
        AuthorusationUtities.canViewEntity(userId, entityId, entityType, req)
            .then((ok) => {
                resolve(ok);
            });

        // if (userId) {
        //     switch (entityType) {
        //         case COMMENT:
        //             mComment.getById(entityId)
        //                 .then((comment:EntityComment) => {
        //                     if(comment){
        //                         AuthorusationUtities.canViewEntity(userId, comment.entityId, comment.entityType, req)
        //                             .then((ok) => {
        //                                 resolve(ok);
        //                             })
        //                     }else{
        //                         resolve(false);
        //                     }
        //                 })
        //                 .catch((error) => {
        //                     resolve(false);
        //                 });
        //             break;
        //         default:
        //             AuthorusationUtities.canViewEntity(userId, entityId, entityType, req)
        //                 .then((ok) => {
        //                     resolve(ok);
        //                 })
        //             break;
        //     }
        // } else {
        //     ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
        //     resolve(false);
        // }
    });

});


export const commentsRoles = connectRoles;
