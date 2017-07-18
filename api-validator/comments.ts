import {PROJECT, CONTRACTOR, ACCOUNT, COMMENT} from "../constants/database/EntityName";
import {LinkEntity} from "../constants/database/LinkEntity";
import {Validation} from "../constants/schema/Validation";
/**
 * Created by nam on 3/26/2017.
 */

var Joi = require('joi');
/*
 * Validation for rounter followers
 * */
export const VALIDATION_COMMENT = {
    options: {allowUnknownBody: false},
    body: {
        body: Joi.string(),
        commentById:Validation.ID.required(),
        entityId:Validation.ID.required(),
        entityType:Joi.string().valid(CONTRACTOR,PROJECT).required(),
        commentByType:Joi.string().valid(CONTRACTOR,PROJECT,ACCOUNT).required()
    }
}
export const VALIDATION_ANSWER_COMMENT = {
    options: {allowUnknownBody: false},
    body: {
        body: Joi.string(),
        commentById:Validation.ID.required(),
        entityId:Validation.ID.required(),
        entityType:Joi.string().valid(COMMENT).required(),
        commentByType:Joi.string().valid(CONTRACTOR,PROJECT,ACCOUNT).required()
    }
}
export const VALIDATION_LIST_COMMENT = {
    options: {allowUnknownBody: false},
    body: {
        timeSave: Joi.number(),
        entityId:Validation.ID.required(),
        entityType:Joi.string().valid(CONTRACTOR,PROJECT,COMMENT).required(),
    }
}
