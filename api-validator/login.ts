/**
 * Created by nam on 3/29/2017.
 */
var Joi = require('joi');
export const VALIDATION_LOGIN ={
    options: { allowUnknownBody: false },
    body: {
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    }
}