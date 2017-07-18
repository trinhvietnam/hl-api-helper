/**
 * Created by NamTV on 4/2/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {RATING, CONTRACTOR, PROJECT} from "../../constants/database/EntityName";
import {AuthorusationUtities} from "./AuthorusationUtities";
import {Logger} from "../../utities/Logger";
import {ModelRating} from "../../models/ModelRating";
import {RatingManager} from "../../manager/RatingManager";
import {ModelProject} from "../../models/ModelProject";
import {FactoryModel} from "../../models/FactoryModel";
var Promise = require("bluebird");
var log = Logger.getNewLogger(__filename);
export const PATH = {
    DELETE_RATING: '/delete',
    LIST_RATING: '/list',
    CREATE_RATING_CONTRACTOR: '/create/'+CONTRACTOR,
    UPDATE_RATING_CONTRACTOR: '/update/'+CONTRACTOR,
    EXIST_RATING: '/exist',
    MY_RATING: '/myRating/',
    GET_CANDIDATE_RATING_CONTRACTOR: '/candidate/'+CONTRACTOR,

};
export const ACTION = {
    CREATE_RATING_CONTRACTOR: 'CREATE_RATING_CONTRACTOR',
    EXIST_RATING: 'EXIST_RATING',
    UPDATE_RATING_CONTRACTOR: 'UPDATE_RATING_CONTRACTOR',
    LIST_RATING: 'LIST_RATING',
    DELETE_RATING: 'DELETE_RATING',
    GET_CANDIDATE_RATING_CONTRACTOR: 'GET_CANDIDATE_RATING_CONTRACTOR',
    MY_RATING: 'MY_RATING',
};
connectRoles.use(ACTION.LIST_RATING, PATH.LIST_RATING, function (req) {
    var ownerId = req.body[ModelRating.FIELDS.ownerId];
    var ownerType = req.body[ModelRating.FIELDS.ownerType];
    var userId = null;
    var user = SessionHelper.getUser(req);
    if (user) {
        userId = user.id;
    }
    return AuthorusationUtities.canViewEntity(userId, ownerId, ownerType, req);
});
connectRoles.use(ACTION.UPDATE_RATING_CONTRACTOR, PATH.UPDATE_RATING_CONTRACTOR, function (req) {
    var type = RATING;
    var timeSave = req.body[ModelRating.FIELDS.timeSave];
    var userId = SessionHelper.getUserId(req);
    /*
     * A account have permission update in owner object then have permission aupdate at all child of object
     * */
    return AuthorusationUtities.canUpdateEntity(userId, timeSave, type, req);
});

connectRoles.use(ACTION.DELETE_RATING, PATH.DELETE_RATING, function (req) {
    var type = RATING;
    var id = req.body[ModelRating.FIELDS.id];
    var userId = SessionHelper.getUserId(req);
    /*
     * A account have permission update in owner object then have permission aupdate at all child of object
     * */

    return AuthorusationUtities.canUpdateEntity(userId, id, type, req)
});
connectRoles.use(ACTION.EXIST_RATING, PATH.EXIST_RATING, function (req) {

    var ownerId = req.body[ModelRating.FIELDS.ownerId];
    var ownerType = req.body[ModelRating.FIELDS.ownerType];
    var userId = SessionHelper.getUserId(req);
    /*
     * A account have permission update in owner object then have permission create at all child of object
     * */
    return new Promise((resolve, reject) => {
        if (!SessionHelper.isAuthen(req)) {
            resolve(false);
        } else {
            AuthorusationUtities.canViewEntity(userId, ownerId, ownerType, req).then(resolve).catch(reject)
        }
    })
});
connectRoles.use(ACTION.MY_RATING, PATH.MY_RATING, function (req) {

    var ownerId = req.body[ModelRating.FIELDS.ownerId];
    var ownerType = req.body[ModelRating.FIELDS.ownerType];
    var userId = SessionHelper.getUserId(req);
    /*
     * A account have permission update in owner object then have permission create at all child of object
     * */
    return new Promise((resolve, reject) => {
        if (!SessionHelper.isAuthen(req)) {
            resolve(false);
        } else {
            AuthorusationUtities.canViewEntity(userId, ownerId, ownerType, req).then(resolve).catch(reject)
        }
    })
});
connectRoles.use(ACTION.CREATE_RATING_CONTRACTOR, PATH.CREATE_RATING_CONTRACTOR, function (req) {

    var projectId = req.body['projectId'];

    /*
     * A account have permission update in owner object then have permission create at all child of object
     * */
    return new Promise((resolve, reject) => {
        if (!SessionHelper.isAuthen(req)) {
            resolve(false);
        } else {
            var userId = SessionHelper.getUserId(req);
            var contractorId = req.body[ModelRating.FIELDS.entityId];
            var mProject = <ModelProject> FactoryModel.getModel(PROJECT);
            Promise.all([mProject.canManageRecivedBidding(userId,projectId),RatingManager.canRatingContractorByProject(contractorId,projectId)])
                .then(([[isCanManageBidding,role],isCanRating])=>{
                    resolve(isCanManageBidding&&isCanRating);
                });
        }
    })
});

connectRoles.use(ACTION.GET_CANDIDATE_RATING_CONTRACTOR, PATH.GET_CANDIDATE_RATING_CONTRACTOR, function (req) {
    return new Promise((resolve, reject) => {
        if (SessionHelper.isAuthen(req)) {
            resolve(true);
        } else {
            resolve(false);
        }
    })
});

export const ratingsRoles = connectRoles;
