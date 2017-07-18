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

export const VALIDATION_LIST_NOTIFIES = {
    options: {allowUnknownBody: false},
    body: {
        timeSave: Joi.number(),
        isRead: Joi.boolean()
    }
}
export const VALIDATION_SET_READ = {
    options: {allowUnknownBody: false},
    body: {
        listTimeSave: Joi.array().items(Joi.number()).required()
    }
}
