/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter registers
 * */
import {USER_ACCOUNT, COMPANY_ACCOUNT} from "../constants/database/Account";
import {Language} from "../constants/database/Language";
import {Validation} from "../constants/schema/Validation";
var Joi = require('joi');
export const VALIDATION_REGISTERS_ACCOUNT ={
    options: { allowUnknownBody: false },
    body: {
        type: Joi.string().valid(USER_ACCOUNT,COMPANY_ACCOUNT),// User hoặc công ty
        name: Joi.string().max(200).required(),
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
        avatar: Validation.LOGO
    }
}