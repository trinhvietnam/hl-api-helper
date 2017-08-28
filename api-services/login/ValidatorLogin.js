"use strict";
exports.__esModule = true;
var Account_1 = require("../../constants/database/Account");
/**
 * Created by nam on 6/18/2017.
 */
var Joi = require('joi');
exports.VALIDATION_LOGIN = {
    options: { allowUnknownBody: false },
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        platform: Joi.string().required(),
        os: Joi.string().required(),
        pushToken: Joi.string().when('platform', { is: Account_1.PLATFORM.MOBILE, then: Joi.required() })
    }
};
