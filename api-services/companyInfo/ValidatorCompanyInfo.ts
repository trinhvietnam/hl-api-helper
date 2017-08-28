/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter projects
 * */
var Joi = require('joi');
export const VALIDATION_COMPANY_INFO_LIST = {
    options: {allowUnknownBody: false},
    body: {
        name: Joi.string().min(1).max(20),
        taxId: Joi.string().min(1).max(20),
    }
}