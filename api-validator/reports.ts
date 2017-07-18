import {PROJECT, CONTRACTOR, ACCOUNT, RATING} from "../constants/database/EntityName";
import {LinkEntity} from "../constants/database/LinkEntity";
import {Validation} from "../constants/schema/Validation";
import {USER_ACCOUNT} from "../constants/database/Account";
/**
 * Created by nam on 3/26/2017.
 */

var Joi = require('joi');

export const VALIDATION_REPORT = {
    options: {allowUnknownBody: false},
    body: {
        reason: Joi.string(),
        content: Joi.string(),
        reportType: Joi.string().valid(RATING).required(),
        entityKey: Joi.string(),
        entity: Joi.string(),
        entityType: Joi.string(),
        ownerEntityId: Joi.number().required(),
        ownerEntityType: Joi.string().valid(CONTRACTOR, ACCOUNT,PROJECT).required(),
    }
}
export const VALIDATION_LIST_REPORT = {
    options: { allowUnknownBody: false },
    body: {
        reportType: Joi.string().valid(RATING).required(),
        timeSave: Validation.ID
    }
}

