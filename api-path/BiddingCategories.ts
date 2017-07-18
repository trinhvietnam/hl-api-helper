/**
 * Created by NamTV on 4/2/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {PROJECT, ROLE, BIDDING_CATEGORY, DOCUMENT, WORK_OF_BIDDING, RATING} from "../../constants/database/EntityName";
import {AuthorusationUtities} from "./AuthorusationUtities";
import {Logger} from "../../utities/Logger";
import {ModelBiddingCategory} from "../../models/ModelBiddingCategory";
var log = Logger.getNewLogger(__filename);
export const PATH = {
    DELETE_BIDDING_CATEGORY: '/delete',
    LIST_BIDDING_CATEGORY: '/list',
    CREATE_BIDDING_CATEGORY: '/create',
    UPDATE_BIDDING_CATEGORY: '/update',
};
export const ACTION = {
    CREATE_BIDDING_CATEGORY: 'CREATE_BIDDING_CATEGORY',
    EXIST_RATING: 'EXIST_RATING',
    UPDATE_BIDDING_CATEGORY: 'UPDATE_BIDDING_CATEGORY',
    LIST_BIDDING_CATEGORY: 'LIST_BIDDING_CATEGORY',
    DELETE_BIDDING_CATEGORY: 'DELETE_BIDDING_CATEGORY',
    VIEW_DETAIL_BIDDING_CATEGORY: 'VIEW_DETAIL_BIDDING_CATEGORY',
    GET_CANDIDATE_RATING: 'GET_CANDIDATE_RATING',
};
connectRoles.use(ACTION.LIST_BIDDING_CATEGORY, PATH.LIST_BIDDING_CATEGORY, function (req) {
    var ownerId = req.body[ModelBiddingCategory.FIELDS.ownerId];
    var ownerType = req.body[ModelBiddingCategory.FIELDS.ownerType];
    var userId = null;
    var user = SessionHelper.getUser(req);
    if (user) {
        userId = user.id;
    }
    return AuthorusationUtities.canViewEntity(userId, ownerId, ownerType, req);
});
connectRoles.use(ACTION.UPDATE_BIDDING_CATEGORY, PATH.UPDATE_BIDDING_CATEGORY, function (req) {
    var type = req.params[ModelBiddingCategory.FIELDS.type];
    var id = req.params[ModelBiddingCategory.FIELDS.id];
    var userId = null;
    var user = SessionHelper.getUser(req);
    if (user) {
        userId = user.id;
    }
    /*
     * A account have permission update in owner object then have permission aupdate at all child of object
     * */
    return AuthorusationUtities.canUpdateEntity(userId, id, type, req);
});

connectRoles.use(ACTION.DELETE_BIDDING_CATEGORY, PATH.DELETE_BIDDING_CATEGORY, function (req) {
    var type = req.params[ModelBiddingCategory.FIELDS.type];
    var id = req.params[ModelBiddingCategory.FIELDS.id];
    var userId = null;
    var user = SessionHelper.getUser(req);
    if (user) {
        userId = user.id;
    }
    /*
     * A account have permission update in owner object then have permission aupdate at all child of object
     * */
    return AuthorusationUtities.canUpdateEntity(userId, id, type, req);
});

connectRoles.use(ACTION.CREATE_BIDDING_CATEGORY, PATH.CREATE_BIDDING_CATEGORY, function (req) {

    var ownerId = req.body[ModelBiddingCategory.FIELDS.ownerId];
    var ownerType = req.body[ModelBiddingCategory.FIELDS.ownerType];
    var userId = SessionHelper.getUserId(req);
    /*
    * A account have permission update in owner object then have permission create at all child of object
    * */
    return AuthorusationUtities.canUpdateEntity(userId, ownerId, ownerType, req);
});


export const extrasRoles = connectRoles;
