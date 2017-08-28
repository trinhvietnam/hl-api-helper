/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter registers
 * */
import {
    USER_ACCOUNT, COMPANY_ACCOUNT, PLATFORM, PROJECT_OWNER_ACCOUNT,
    CONTRACTER_ACCOUNT, SUPPLIER_ACCOUNT
} from "../../constants/database/Account";
import {Validation} from "../../constants/schema/Validation";
var Joi = require('joi');
export const VALIDATION_REGISTERS_ACCOUNT ={
    options: { allowUnknownBody: false },
    body: {
        type: Joi.string().valid(PROJECT_OWNER_ACCOUNT,CONTRACTER_ACCOUNT,SUPPLIER_ACCOUNT),// User hoặc công ty
        location: Joi.object().keys({
          lon:Joi.number().min(-180).max(180),
          lat:Joi.number().min(-180).max(180),
        }),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        platform: Joi.string().required(),
        os: Joi.string().required(),
        pushToken: Joi.string().when('platform', { is: PLATFORM.MOBILE, then: Joi.required() }),
    }
}
export const VALIDATION_ACCOUNTS_ADD_REGISTER_INFO ={
    options: { allowUnknownBody: false },
    body: {
        name: Joi.string().max(200).required(),
        phone: Joi.string().max(15).required(),
        companyName: Joi.string().max(200).required(),
        companyTaxId: Joi.string().max(200).required(),
    }
}