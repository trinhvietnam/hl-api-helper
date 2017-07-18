import {CacheKeys} from "../cache/CacheKeys";
import {NameOfData} from "../data/convert/NameOfData";
import {Language} from "../constants/database/Language";
/**
 * Created by NamTV on 3/31/2017.
 */
var Joi = require('joi');
export const VALIDATION_LANGUAGE_DATA_NAME ={
    options: { allowUnknownBody: false },
    body: {
        dataName: Joi.string().valid(
            NameOfData.DATA_TYPE_OF_CONTRACTOR,
            NameOfData.DATA_TYPE_OF_CONTRUCTION,
            NameOfData.DATA_TYPE_OF_INVESTMENT,
            NameOfData.DATA_TYPE_OF_COMPANY,
            NameOfData.DATA_TYPE_OF_PROJECT,
            NameOfData.DATA_PHASE_OF_PROJECT,
            NameOfData.DATA_STATUS_OF_PROJECT,
            NameOfData.DATA_BIDDING_FORM,
            NameOfData.DATA_NOTIFY_SETTING,
        ).required(),
        lang: Joi.string().valid(
            Language.EN,
            Language.VI
        ).required()
    }
}