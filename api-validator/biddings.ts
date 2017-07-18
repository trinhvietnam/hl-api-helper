import {CONTRACTOR, PROJECT, BIDDING_CATEGORY} from "../constants/database/EntityName";
import {CURRENCY_UNIT_USD,CURRENCY_UNIT_VND} from "../constants/database/Common";
import {Validation} from "../constants/schema/Validation";
import {BIDDING_ROLE, SENDING_STATUS, RECEIVE_STATUS, BIDDING_STATUS} from "../constants/database/Biddings";
import {ModelBidding} from "../models/ModelBidding";
/**
 * Created by nam on 3/29/2017.
 */
var Joi = require('joi');
export const VALIDATION_BIDDING = {
    options: {allowUnknownBody: false},
    body: {
        fromId: Validation.ID.required(),
        fromType: Joi.string().valid(CONTRACTOR).required(),
        toId: Validation.ID.required(), // Là Id bidding_category
        toType: Joi.string().valid(BIDDING_CATEGORY).required(),
        toParentId:Validation.ID.required(),
        toParentType:Joi.string().valid(PROJECT).required(),
        contentLetter: Joi.string().max(500).required(),
        timeSendBidding: Joi.string(),
        note: Joi.string(),
        otherRequirement: Joi.string(),
        documents: Joi.array().items(Validation.OBJECT_DOCUMENT).required(),
        work: Joi.array().items(Validation.OBJECT_WORK_IN_BIDDING).required()
    }
};
export const VALIDATION_GET_CANDIDATE_BIDDING = {
    options: {allowUnknownBody: false},
    body: {
        toType: Joi.string().valid(PROJECT).required()
    }
};
export const VALIDATION_GET_CANDIDATE_TO_INVITE_BIDDING = {
    options: {allowUnknownBody: false},
    body: {
        page: Joi.number(),
        name: Joi.string(),
        toType: Joi.string().valid(CONTRACTOR).required()
    }
};
export const VALIDATION_GET_LIST_BIDDINGS_FROM = {
    options: {allowUnknownBody: false},
    body: {
        fromId: Joi.number().required(),
        fromType: Joi.string().valid(CONTRACTOR).required(),
        toId: Joi.number(),
        toType: Joi.string().valid(BIDDING_CATEGORY)
    }
}
export const VALIDATION_GET_LIST_BIDDINGS_TO = {
    options: {allowUnknownBody: false},
    body: {
        fromId: Joi.number(),
        fromType: Joi.string().valid(CONTRACTOR),
        toId: Joi.number().required(),
        toType: Joi.string().valid(BIDDING_CATEGORY,PROJECT).required(),
        toParentId:Validation.ID
            .when('toType', {is: BIDDING_CATEGORY, then: Joi.required() })
    }
}
export const VALIDATION_ACCEPT_BIDDING = {
    options: {allowUnknownBody: false},
    params: {
        id: Validation.ID.required()
    }
};
export const VALIDATION_DETAIL_BIDDING = {
    options: {allowUnknownBody: false},
    body: {
        role: Joi.string().valid(BIDDING_ROLE.RECEIVER,BIDDING_ROLE.SENDER).required(),
    }
};
export const VALIDATION_UPDATE_BIDDING = {
    options: {allowUnknownBody: false},
    body: {
        role: Joi.string().valid(BIDDING_ROLE.RECEIVER,BIDDING_ROLE.SENDER).required(),
        field:Joi.string().required()
            .when('role', {is: BIDDING_ROLE.SENDER, then: Joi.valid(ModelBidding.FIELDS.sendingStatus) })
            .when('role', {is: BIDDING_ROLE.RECEIVER, then: Joi.valid(ModelBidding.FIELDS.receiveStatus,ModelBidding.FIELDS.biddingStatus) }),
        value: Joi.string().required()
            .when('role', {is: BIDDING_ROLE.SENDER, then: Joi.string().valid(BIDDING_STATUS.deleted) })
            .when('role', {is: BIDDING_ROLE.RECEIVER, then: Joi.string().valid(BIDDING_STATUS.deleted,RECEIVE_STATUS.disliked,RECEIVE_STATUS.liked,RECEIVE_STATUS.reviewing,BIDDING_STATUS.bidded)}),
    }
};

export const VALIDATION_INVITE_BIDDING = {
    options: {allowUnknownBody: false},
    body: {
        fromId: Validation.ID.required(),
        fromType: Joi.string().valid(PROJECT).required(),
        toId: Validation.ID.required(),
        toType: Joi.string().valid(CONTRACTOR).required(),
        message: Joi.string().max(500).required(),
        messageType: Joi.string().required(),
    }
};

export const VALIDATION_LIST_BIDDING_FROM_USER = {
    options: {allowUnknownBody: false},
    body: {
        fromType:Joi.string().valid(CONTRACTOR).required(),
        toType: Joi.string().valid(PROJECT).required(),
        phase:Joi.string().valid('BIDDING','BIDDED').required(),
        page : Joi.number()
    }
};