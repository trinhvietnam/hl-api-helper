/**
 * Created by NamTV on 4/2/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ROLE, BIDDING} from "../../constants/database/EntityName";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {FactoryModel} from "../../models/FactoryModel";
import {ReciveActionInterface} from "../../interfaces/ReciveActionInterface";
import {SendActionInterface} from "../../interfaces/SendActionInterface";
import {ModelBidding} from "../../models/ModelBidding";
import {KeysInRequest} from "../../constants/middlewarekeys/KeysInRequest";
var Promise = require('bluebird');
import {BIDDING_ROLE} from "../../constants/database/Biddings";
var mBidding = <ModelBidding> FactoryModel.getModel(BIDDING);
export const PATH = {
    BIDDING: '/',
    INVITE_BIDDING: '/invite',
    LIST_BIDDING_FROM_USER: '/list/user',
    BIDDING_BODY: {
        fromId: 'fromId',
        fromType: 'fromType',
        toId: 'toId',
        toType: 'toType',
        toParentId: 'toParentId',
        toParentType: 'toParentType',
        contentLetter: 'contentLetter',
    },
    DETAIL_BIDDING_PARAMS: {
        id: 'id'
    },
    DETAIL_BIDDING_BODY: {
        role: 'role'
    },
    ACCEPT_BIDDING: '/:id/accept',
    UPDATE_STATUS_BIDDING: '/:id/updateStatus',
    ACCEPT_BIDDING_PARAMS: {
        id: 'id'
    },
    UPDATE_STATUS_BIDDING_PARAMS: {
        id: 'id'
    },
    UPDATE_STATUS_BIDDING_BODY: {
        role: 'role',
        field: 'field',
        value: 'value'
    },
    DETAIL_BIDDING: '/:id',

    CANDIDATE_TO_INVITE_BIDDING: '/candidate/invite',
    CANDIDATE_BIDDING: '/' +
    'candidateBidding',
    CANDIDATE_BIDDING_BODY: {
        toType: 'toType'
    },
    GET_LIST_BIDDING_FROM: '/listBiddingFrom',
    GET_LIST_BIDDING_TO: '/listBiddingTo',
    GET_LIST_BIDDING_FROM_BODY: {
        fromId: 'fromId',
        toId: 'toId',
        fromType: 'fromType',
        toType: 'toType'
    },
    GET_LIST_BIDDING_TO_BODY: {
        fromId: 'fromId',
        toId: 'toId',
        fromType: 'fromType',
        toType: 'toType',
        toParentId: 'toParentId'
    }

};
export const ACTION = {
    INVITE_BIDDING: 'INVITE_BIDDING',
    BIDDING: 'BIDDING',
    ACCEPT_BIDDING: 'ACCEPT_BIDDING',
    GET_LIST_BIDDING_FROM: 'GET_LIST_BIDDING_FROM',
    GET_LIST_BIDDING_TO: 'GET_LIST_BIDDING_TO',
    CANDIDATE_BIDDING: 'CANDIDATE_BIDDING',
    CANDIDATE_TO_INVITE_BIDDING: 'CANDIDATE_TO_INVITE_BIDDING',
    DETAIL_BIDDING: 'DETAIL_BIDDING',
    UPDATE_STATUS_BIDDING: 'UPDATE_STATUS_BIDDING',
    LIST_BIDDING_FROM_USER:'LIST_BIDDING_FROM_USER'
};
connectRoles.use(ACTION.CANDIDATE_BIDDING, PATH.CANDIDATE_BIDDING, function (req) {
    return new Promise((resolve, reject) => {
        if (!SessionHelper.isAuthen(req)) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            resolve(true);
        }
    });
});
connectRoles.use(ACTION.CANDIDATE_TO_INVITE_BIDDING, PATH.CANDIDATE_TO_INVITE_BIDDING, function (req) {
    return new Promise((resolve, reject) => {
        if (!SessionHelper.isAuthen(req)) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            resolve(true);
        }
    });
});
connectRoles.use(ACTION.GET_LIST_BIDDING_FROM, PATH.GET_LIST_BIDDING_FROM, function (req) {
    return new Promise((resolve, reject) => {
        if (!SessionHelper.isAuthen(req)) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var userId = SessionHelper.getUserId(req);
            var fromId = req.body[PATH.GET_LIST_BIDDING_FROM_BODY.fromId];
            var fromType = req.body[PATH.GET_LIST_BIDDING_FROM_BODY.fromType];
            var mEntity = <SendActionInterface>FactoryModel.getSendActionInterface(fromType);
            mEntity.canViewSentBidding(userId, fromId)
                .then(([isCanView, role]) => {
                    req[ROLE] = role;
                    if (isCanView) {
                        resolve(true);
                    } else {
                        resolve(null);
                    }
                })
                .catch((error) => {
                    if (!error) {
                        error = ErrorHelper.notExistEntity(req);
                    }
                    ErrorHelper.setRoleError(ErrorEC.ACCESS_DENIED, error, req);
                    resolve(null);
                })
        }
    });
});

connectRoles.use(ACTION.GET_LIST_BIDDING_TO, PATH.GET_LIST_BIDDING_TO, function (req) {
    return new Promise((resolve, reject) => {
        if (!SessionHelper.isAuthen(req)) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
        } else {
            var userId = SessionHelper.getUserId(req);
            var toId = req.body[PATH.GET_LIST_BIDDING_TO_BODY.toId];
            var toType = req.body[PATH.GET_LIST_BIDDING_TO_BODY.toType];
            var toParentId = req.body[PATH.GET_LIST_BIDDING_TO_BODY.toParentId];

            var mEntity = <ReciveActionInterface>FactoryModel.getReciveActionInterface(toType);
            mEntity.canViewRecivedBidding(userId, toId,toParentId)
                .then(([isCanView, role]) => {
                    req[ROLE] = role;
                    if (isCanView) {
                        resolve(true);
                    } else {
                        resolve(null);
                    }
                })
                .catch((error) => {
                    ErrorHelper.setRoleError(ErrorEC.FORCE_ACCESS_RESOURCE_OF_ANOTHER, error, req);
                    resolve(null);
                })
        }
    });
});

connectRoles.use(ACTION.BIDDING, PATH.BIDDING, function (req) {
    return new Promise((resolve, reject) => {
        var userId = SessionHelper.getUserId(req);
        if (!userId) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
            return;
        }
        var fromId = req.body[PATH.BIDDING_BODY.fromId];
        var fromType = req.body[PATH.BIDDING_BODY.fromType];
        var toId = req.body[PATH.BIDDING_BODY.toId];
        var toType = req.body[PATH.BIDDING_BODY.toType];
        var toParentType = req.body[PATH.BIDDING_BODY.toParentType];
        var toParentId = req.body[PATH.BIDDING_BODY.toParentId];
        var biddingInfo = mBidding.createObjectFromJson(req.body);
        console.log('11111111111111111111111111111111111111111111111111111');
        mBidding.isEligibleBidding(userId, fromId, fromType, toId, toType, biddingInfo, toParentId, toParentType)
            .then(([isEligibleBidding, fromEntity, toEntity]) => {
                req[KeysInRequest.fromEntity] = fromEntity;
                req[KeysInRequest.toEntity] = toEntity;
                req[BIDDING] = biddingInfo;
                resolve(isEligibleBidding);
            })
            .catch((error) => {
                ErrorHelper.setRoleError(ErrorEC.BIDDING_NOT_ELIGIBLE, error, req);
                resolve(false);
            });
    })

});
connectRoles.use(ACTION.ACCEPT_BIDDING, PATH.ACCEPT_BIDDING, function (req) {
    return new Promise((resolve, reject) => {
        var userId = SessionHelper.getUserId(req);
        if (!userId) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
            return;
        }
        var biddingId = req.params[PATH.ACCEPT_BIDDING_PARAMS.id];
        mBidding.canManageBidding(userId, biddingId,BIDDING_ROLE.RECEIVER)
            .then(([canAccept,role, bidding]) => {
                req[BIDDING] = bidding;
                req[ROLE] = role;
                resolve(canAccept);
            })
            .catch((error) => {
                ErrorHelper.setRoleError(ErrorEC.ACCEPT_BIDDING_ERROR, error, req);
                resolve(false);
            });
    })

});
connectRoles.use(ACTION.INVITE_BIDDING, PATH.INVITE_BIDDING, function (req) {
    return new Promise((resolve, reject) => {
        var userId = SessionHelper.getUserId(req);
        if (!userId) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
            return;
        }

        var fromId = req.body[PATH.BIDDING_BODY.fromId];
        var fromType = req.body[PATH.BIDDING_BODY.fromType];
        var toId = req.body[PATH.BIDDING_BODY.toId];
        var toType = req.body[PATH.BIDDING_BODY.toType];
        var contentLetter = req.body[PATH.BIDDING_BODY.contentLetter];
        var biddingInfo = mBidding.createObjectFromJson(req.body);
        mBidding.isCanInviteBidding(userId, fromId, fromType, toId, toType,contentLetter)
            .then((t) => {
                var [isEligibleBidding, fromEntity, toEntity] = t;
                req[KeysInRequest.fromEntity] = fromEntity;
                req[KeysInRequest.toEntity] = toEntity;
                req[BIDDING] = biddingInfo;
                resolve(isEligibleBidding);
            })
            .catch((error) => {
                ErrorHelper.setRoleError(ErrorEC.BIDDING_NOT_ELIGIBLE, error, req);
                resolve(false);
            });
    })

});
connectRoles.use(ACTION.UPDATE_STATUS_BIDDING, PATH.UPDATE_STATUS_BIDDING, function (req) {
    return new Promise((resolve, reject) => {
        var userId = SessionHelper.getUserId(req);
        if (!userId) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
            return;
        }
        var biddingId = req.params[PATH.UPDATE_STATUS_BIDDING_PARAMS.id];
        var role = req.body[PATH.UPDATE_STATUS_BIDDING_BODY.role];
        mBidding.canManageBidding(userId, biddingId,role)
            .then(([canUpdate,role, bidding]) => {
                req[BIDDING] = bidding;
                req[ROLE] = role;
                resolve(canUpdate);
            })
            .catch((error) => {
                ErrorHelper.setRoleError(ErrorEC.UPDATE_STATUS_BIDDING_ERROR, error, req);
                resolve(false);
            })
    })

})
;
connectRoles.use(ACTION.DETAIL_BIDDING, PATH.DETAIL_BIDDING, function (req) {
    return new Promise((resolve, reject) => {
        var userId = SessionHelper.getUserId(req);
        if (!userId) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            resolve(false);
            return;
        }
        var biddingId = req.params[PATH.DETAIL_BIDDING_PARAMS.id];
        var role = req.body[PATH.DETAIL_BIDDING_BODY.role];
        console.log('999999999999999999999999999 ',biddingId,role);
        mBidding.canViewDetailBiddingTo(userId, biddingId,role)
            .then(([canAccept,role, bidding]) => {
                req[BIDDING] = bidding;
                req[ROLE] = role;
                resolve(true);
            })
            .catch((error) => {
                ErrorHelper.setRoleError(ErrorEC.VIEW_DETAIL_BIDDING_ERROR, error, req);
                resolve(false);
            });
    })

});

connectRoles.use(ACTION.LIST_BIDDING_FROM_USER, PATH.LIST_BIDDING_FROM_USER, function (req) {
    return new Promise((resolve, reject) => {
        var userId = SessionHelper.getUserId(req);
        if (!userId) {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
            return resolve(false);
        }else {
            resolve(true);
        }
    })

});

export const biddingRoles = connectRoles;
