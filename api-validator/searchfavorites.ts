import {CONTRACTOR, PROJECT} from "../constants/database/EntityName";
/**
 * Created by nam on 3/29/2017.
 */
var Joi = require('joi');
export const VALIDATION_SAVE_SEARCH_FAVORITE ={
    options: { allowUnknownBody: false },
    body: {
        type: Joi.string().valid(CONTRACTOR,PROJECT).required(),
        name: Joi.string().required(),
        data: Joi.string().required()
    }
}

export const VALIDATION_LIST_SEARCH_FAVORITE ={
    options: { allowUnknownBody: false },
    body: {
        type: Joi.string().valid(CONTRACTOR,PROJECT).required(),
    }
}
export const VALIDATION_DELETE_SEARCH_FAVORITE ={
    options: { allowUnknownBody: false },
    body: {
        type: Joi.string().valid(CONTRACTOR,PROJECT).required(),
        name: Joi.string().required(),
    }
}
