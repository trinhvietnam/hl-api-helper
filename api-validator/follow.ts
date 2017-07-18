import {PROJECT, CONTRACTOR, ACCOUNT} from "../constants/database/EntityName";
import {LinkEntity} from "../constants/database/LinkEntity";
/**
 * Created by nam on 3/26/2017.
 */

var Joi = require('joi');
/*
* Validation for rounter followers
* */
export const VALIDATION_FOLLOWING_CREATE ={
    options: { allowUnknownBody: false },
    body: {
        toId: Joi.number().required(),
        toType: Joi.string().valid(PROJECT,CONTRACTOR).required(),
        relation: Joi.string().valid(LinkEntity.RELATION.FOLLOWING).required(),
    }
}
export const VALIDATION_LINK_LIST ={
    options: { allowUnknownBody: false },
    body: {
        fromId: Joi.number().required(),
        relation: Joi.string().valid(LinkEntity.RELATION.FOLLOWING,LinkEntity.RELATION.FOLLOWED).required(),
        toType: Joi.string().valid(PROJECT,CONTRACTOR,ACCOUNT).required(),
        fromType: Joi.string().valid(PROJECT,CONTRACTOR,ACCOUNT).required()
            .when('relation', { is: LinkEntity.RELATION.FOLLOWING, then: Joi.valid(ACCOUNT).required() }),
    }
}