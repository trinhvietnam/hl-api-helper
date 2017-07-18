/**
 * Created by NamTV on 4/1/2017.
 */
var Joi = require('joi');
export const VALIDATION_LOCATIONS_COUNTRIES ={
    options: { allowUnknownBody: false },
    body:{

    }
}
export const VALIDATION_LOCATIONS_CITIES ={
    options: { allowUnknownBody: false },
    body:{
        country: Joi.string().max(20).required()
    }
}
export const VALIDATION_LOCATIONS_DISTRICTS ={
    options: { allowUnknownBody: false },
    body:{
        city: Joi.string().max(20).required(),
        country: Joi.string().max(20).required()
    }
}