/**
 * Created by NamTV on 4/2/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {PROJECT, ROLE, BIDDING_CATEGORY, DOCUMENT, WORK_OF_BIDDING, RATING} from "../../constants/database/EntityName";
import {AuthorusationUtities} from "./AuthorusationUtities";
import {Logger} from "../../utities/Logger";
var log = Logger.getNewLogger(__filename);
export const PATH = {
    DELETE_BIDDING_CATEGORY: '/delete',
    LIST_BIDDING_CATEGORY: '/list/of',
    CREATE_EXTRA: '/create/:type',
    CREATE_BIDDING_CATEGORY: '/create/' + BIDDING_CATEGORY,
    CREATE_EXTRA_DOCUMENT: '/create/' + DOCUMENT,
    CREATE_EXTRA_WORD_OF_BIDDING: '/create/' + WORK_OF_BIDDING,
    CREATE_RATING: '/create/' + RATING,
    UPDATE_BIDDING_CATEGORY: '/update/' + RATING,
    EXIST_RATING: '/exist/' + RATING,
    GET_CANDIDATE_RATING: '/candidate/' + RATING,
    UPDATE_EXTRA: '/:type/:id/update',
    DETAIL_EXTRA: '/:type/:id',

    LIST_EXTRAS_OF_PARAMS: {
        type: 'type'
    },
    LIST_EXTRAS_OF_BODY: {
        ownerId: 'ownerId',
        ownerType: 'ownerType'
    },
    UPDATE_EXTRA_PARAMS: {
        type: 'type',
        id: 'id',
    },
    CREATE_EXTRA_PARAMS: {
        type: 'type',
        id: 'id',
    },
    CREATE_EXTRA_BODY: {
        ownerId: 'ownerId',
        ownerType: 'ownerType'
    },
    DETAIL_EXTRA_PARAMS: {
        type: 'type',
        id: 'id',
    }
};
export const ACTION = {
    CREATE_BIDDING_CATEGORY: 'CREATE_BIDDING_CATEGORY',
    EXIST_RATING: 'EXIST_RATING',
    UPDATE_BIDDING_CATEGORY: 'UPDATE_BIDDING_CATEGORY',
    LIST_CAGEGORY: 'LIST_BIDDING_CATEGORY',
    DELETE_BIDDING_CATEGORY: 'DELETE_BIDDING_CATEGORY',
    VIEW_DETAIL_EXTRA: 'VIEW_DETAIL_EXTRA',
    GET_CANDIDATE_RATING: 'GET_CANDIDATE_RATING',
};

connectRoles.use(ACTION.UPDATE_BIDDING_CATEGORY, PATH.UPDATE_BIDDING_CATEGORY, function (req) {
    var type = req.params[PATH.UPDATE_EXTRA_PARAMS.type];
    var id = req.params[PATH.UPDATE_EXTRA_PARAMS.id];
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
    var type = req.params[PATH.UPDATE_EXTRA_PARAMS.type];
    var id = req.params[PATH.UPDATE_EXTRA_PARAMS.id];
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

    var ownerId = req.body[PATH.CREATE_EXTRA_BODY.ownerId];
    var ownerType = req.body[PATH.CREATE_EXTRA_BODY.ownerType];
    var userId = SessionHelper.getUserId(req);
    /*
    * A account have permission update in owner object then have permission create at all child of object
    * */
    return AuthorusationUtities.canUpdateEntity(userId, ownerId, ownerType, req);
});

connectRoles.use(ACTION.GET_CANDIDATE_RATING, PATH.GET_CANDIDATE_RATING, function (req) {
    return new Promise((resolve,reject)=>{
        if(SessionHelper.isAuthen(req)){
            resolve(true);
        }else{
            resolve(false);
        }
    })
});

export const extrasRoles = connectRoles;
