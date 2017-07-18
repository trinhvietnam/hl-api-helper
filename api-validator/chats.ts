import {PROJECT, CONTRACTOR, ACCOUNT} from "../constants/database/EntityName";
import {LinkEntity} from "../constants/database/LinkEntity";
import {Validation} from "../constants/schema/Validation";
import {USER_ACCOUNT} from "../constants/database/Account";
/**
 * Created by nam on 3/26/2017.
 */

var Joi = require('joi');
export const SCHEMA_VALIDATION_ON_MESSAGE = {
    fromId: Validation.ID.required(),
    toId: Validation.ID.required(),
    fromType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
    toType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
    message: Joi.string().required(),
    messageType: Joi.string().valid('TEXT').required()
};
export const SCHEMA_VALIDATION_SEEM_MESSAGE = {
    ownerId: Validation.ID.required(),
    ownerType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
    partnerId: Validation.ID.required(),
    timeSave: Validation.ID.required(),
};

export const SCHEMA_VALIDATION_ON_LISTEN_ROOM = {
    desId: Validation.ID.required(),
    desType: Joi.string().valid(PROJECT,CONTRACTOR).required()
};

export const VALIDATION_LIST_THREAD_MESSAGE ={
    options: { allowUnknownBody: false },
    body: {
        ownerId: Validation.ID.required(),
        ownerType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
        timeSave: Validation.ID
    }
}
export const VALIDATION_LIST_MESSAGE_OF_THREAD ={
    options: { allowUnknownBody: false },
    body: {
        ownerId: Validation.ID.required(),
        partnerId: Validation.ID.required(),
        ownerType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
        partnerType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
        timeSave: Validation.ID
    }
}
export const VALIDATION_GET_LATEST_UNREAD_MESSAGE_OF_THREAD ={
    options: { allowUnknownBody: false },
    body: {
        ownerId: Validation.ID.required(),
        partnerId: Validation.ID.required(),
        ownerType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
        partnerType: Joi.string().valid(ACCOUNT,PROJECT,CONTRACTOR).required(),
    }
}

