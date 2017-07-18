import {Validation} from "../constants/schema/Validation";
import {PROJECT, CONTRACTOR} from "../constants/database/EntityName";
/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter projects
 * */
var Joi = require('joi');

export const VALIDATION_UPDATE_CONTACT = {
    options: {allowUnknownBody: false},
    body: {
        contact:Joi.object().keys({
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            phone: Joi.string().required(),
            mobile: Joi.string().required(),
            fax: Joi.string().required(),
            website: Joi.string().required(),
            about: Joi.string().required(),
            position: Joi.string().required(),
            title: Joi.string().required()
        }),
        ownerType:Joi.string().valid(CONTRACTOR).required(),
        ownerId:Validation.ID.required(),
    }
}

