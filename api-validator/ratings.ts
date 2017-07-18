import {
    DOCUMENT, CATEGORY_PROJECT, RATING, MATERIAL_PROJECT, BIDDING_CATEGORY,
    PROJECT, CONTRACTOR, BIDDING, ACCOUNT
} from "../constants/database/EntityName";
import {Validation} from "../constants/schema/Validation";
import {validate} from "joi";
import {CURRENCY_UNIT_USD,CURRENCY_UNIT_VND} from "../constants/database/Common";
/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter extras
 * */
var Joi = require('joi');
export const VALIDATION_LIST_RATING = {
    options: {allowUnknownBody: false},
    body: {
        ownerId: Joi.number().required(),
        ownerType:  Joi.string().valid(CONTRACTOR, ACCOUNT,PROJECT).required(),
    }
}
export const VALIDATION_DELETE_RATING = {
    options: {allowUnknownBody: false},
    body: {
        entityId: Validation.ID.required(),
        timeSave: Validation.ID.required()
    }
}
export const VALIDATION_CREATE_RATING_CONTRACTOR = {
    options: {allowUnknownBody: false},
    body: {
        star: Validation.RANKING.required(),
        content: Validation.DESCRIPTION.required(),
        entityId: Joi.number().required(),
        entityType: Joi.string().valid(CONTRACTOR, ACCOUNT,PROJECT).required(),
        subRating: Joi.string(),
        projectId: Validation.ID.required()
    }
}

export const VALIDATION_UPDATE_RATING = {
    options: {allowUnknownBody: false},
    body: {
        star: Validation.RANKING.required(),
        content: Validation.DESCRIPTION.required(),
        subRating: Joi.string(),
        entityId: Joi.number().required(),
        entityType: Joi.string().valid(CONTRACTOR, ACCOUNT,PROJECT).required(),
        timeSave: Validation.ID.required(),
    }
}
export const VALIDATION_EXIST_RATING = {
    options: {allowUnknownBody: false},
    body: {
        ownerId: Joi.number().required(),
        ownerType: Joi.string().valid(CONTRACTOR, ACCOUNT,PROJECT).required(),
        // senderId: Joi.number().required()
    }
}
export const VALIDATION_MY_RATING = {
    options: {allowUnknownBody: false},
    body: {
        entityId: Joi.number().required(),
        entityType: Joi.string().valid(CONTRACTOR, ACCOUNT,PROJECT).required(),
    }
}

export const VALIDATION_GET_CANDIDATE_RATING = {
    options: {allowUnknownBody: false},
    body: {
        entityId:Validation.ID.required(),
        entityType:Joi.string().valid(CONTRACTOR).required(),
    }
}