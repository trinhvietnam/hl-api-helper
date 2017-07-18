import {PROJECT, CONTRACTOR, ACCOUNT} from "../constants/database/EntityName";
import {LinkEntity} from "../constants/database/LinkEntity";
import {Validation} from "../constants/schema/Validation";
/**
 * Created by nam on 3/26/2017.
 */

var Joi = require('joi');
/*
 * Validation for rounter followers
 * */
export const VALIDATION_SHARE = {
    options: {allowUnknownBody: false},
    body: {
        toId: Joi.number().required(),
        isEmail: Joi.boolean(),
        message: Joi.string(),
        messageType: Joi.string().valid('TEXT'),
        entityId:Validation.ID.required(),
        entityType:Joi.string().valid(CONTRACTOR,PROJECT).required()
    }
}
