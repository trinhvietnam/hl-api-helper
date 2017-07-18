import {USER_ACCOUNT, COMPANY_ACCOUNT} from "../constants/database/Account";
import {Validation} from "../constants/schema/Validation";
import {PROJECT, CONTRACTOR} from "../constants/database/EntityName";
/**
 * Created by NamTV on 3/28/2017.
 */
var Joi = require('joi');
export const VALIDATION_ACCOUNTS_DETAIL_ONE ={
    options: { allowUnknownBody: false },
    params: {
        id: Joi.number().required()
    }
}
export const VALIDATION_ACCOUNTS_UPDATE ={
    options: { allowUnknownBody: false },
    body: {
        type: Joi.string().valid(USER_ACCOUNT,COMPANY_ACCOUNT),// User hoặc công ty
        name: Joi.string().max(200),
        lastName: Joi.string().max(200),
        taxCode: Joi.string().when('type', { is: COMPANY_ACCOUNT, then: Joi.required() }),
        address: Joi.string().max(200),
        location: Joi.object().keys({
            lon:Joi.number().min(-180).max(180),
            lat:Joi.number().min(-180).max(180),
        }),
        city: Joi.string().max(50).required(),
        country: Joi.string().max(50).required(),
        district: Joi.string().max(50),
        phone: Joi.string().max(15),
        fax: Joi.string().max(15),
        website: Joi.string().max(200),
        email: Joi.string().email().required(),
        language: Validation.LANGUAGE,
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        avatar: Validation.LOGO,
        emailNotifications: Joi.object().keys(),
    }
}

export const VALIDATION_ACCOUNTS_UPDATE_EMAIL_NOTIFY ={
    options: { allowUnknownBody: false },
    body: {
        emailSettingNotifications: Joi.object().keys({
            '1':Joi.boolean().required(),
            '2':Joi.boolean().required(),
            '3':Joi.boolean().required(),
            '4':Joi.boolean().required(),
            '5':Joi.boolean().required(),
            '6':Joi.boolean().required(),
            '7':Joi.boolean().required(),
            '8':Joi.boolean().required(),
            '9':Joi.boolean().required(),
            '10':Joi.boolean().required(),
            '11':Joi.boolean().required(),
        }).required(),
        emailNofity: Joi.string().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        formatEmail: Joi.number()
    }
}

export const VALIDATION_ACCOUNTS_CHANGE_PASSWORD ={
    options: { allowUnknownBody: false },
    body: {
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        newPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    }
}
export const VALIDATION_ACCOUNTS_RESET_PASSWORD ={
    options: { allowUnknownBody: false },
    body: {
        temPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        newPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    }
}

export const VALIDATION_ACCOUNTS_FORGET_PASSWORD ={
    options: { allowUnknownBody: false },
    body: {
        email: Validation.EMAIL.required()
    }
}

export const VALIDATION_EXTRAS_ACCOUNT ={
    options: { allowUnknownBody: false },
    params: {
        type: Joi.string().valid(PROJECT,CONTRACTOR).required()
    },
    body:{
        phase:Joi.number()
    }
}

export const VALIDATION_PROJECT_OF_ACCOUNT ={
    options: { allowUnknownBody: false },
    body:{
        phase:Joi.number(),
        name: Joi.string(),
        page: Joi.number()
    }
}
export const VALIDATION_CONTRACTOR_OF_ACCOUNT ={
    options: { allowUnknownBody: false },
    body:{
        name: Joi.string()
    }
}