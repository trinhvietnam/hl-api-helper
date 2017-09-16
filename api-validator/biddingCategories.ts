
/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter extras
 * */
import {PROJECT, CONTRACTOR, BIDDING_CATEGORY, ACCOUNT, BIDDING} from "../../constants/database/EntityName";
import {Validation} from "../../constants/schema/Validation";
var Joi = require('joi');
export const VALIDATION_LIST_BIDDING_CATEGORY = {
    options: {allowUnknownBody: false},
    body: {
        projectId: Joi.number().required(),
    }
}
export const VALIDATION_DETAIL_BIDDING_CATEGORY = {
    options: {allowUnknownBody: false},
    body: {
        projectId: Joi.number().required(),
    },
    params:{
        id:Joi.number().required()
    }
}
export const VALIDATION_DELETE_BIDDING_CATEGORY = {
    options: {allowUnknownBody: false},
    body: {
        projectId: Validation.ID.required(),
        id: Validation.ID.required(),
        deleteById: Validation.ID.required(),
        deleteByType: Joi.string().valid(PROJECT,CONTRACTOR).required(),
    }
}

export const VALIDATION_CREATE_BIDDING_ITEM = {
    options: {allowUnknownBody: false},
    body: {
        projectId: Joi.number().required(),
        createById: Joi.number().required(),
        createByType: Joi.string().valid(PROJECT,CONTRACTOR).required(),
        // typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR.required(),
        // typeOfContruction: Validation.TYPE_OF_CONTRUCTION,
        // typeOfProject: Validation.TYPE_OF_PROJECT,
        name: Validation.NAME.required(),
        // address: Validation.ADDRESS.required(),
        // location: Validation.COUNTRY_CITY_DISTRICT,
        // city: Validation.CITY.required(),
        // country: Validation.COUNTRY.required(),
        // district: Validation.DISTRICT.required(),
        phase: Validation.PHASE,// Giai đoạn của dự án bao gồm [chuẩn bị, đấu thầu, thi công, hoàn thành]
        startBuildTime: Validation.DATE,
        endBuildTime: Validation.DATE,

        fromBudget: Validation.BUGET,
        endBudget: Validation.BUGET,
        unitBugget: Validation.CURRENCY_UNIT,

        // typeOfInvestment: Validation.TYPE_OF_INVESTMENT,

        startScheduled: Validation.DATE,
        endScheduled: Validation.DATE,

        bidSolicitor: Validation.BIDDING_SOLICITOR, //ID Các bên mên mời thầu

        // biddingForm: Joi.number(), //Hình thức đấu thầu

        countryOfContractor: Validation.COUNTRY,
        districtOfContractor: Validation.DISTRICT,
        cityOfContractor: Validation.CITY,

        bidOpenTime: Validation.DATE, // Thời gian mở thầu
        bidCloseTime: Validation.DATE, // Thời gian đóng thầu

        minimumExperienceOfContractor: Joi.number(),
        creditRatingOfContractor: Validation.RANKING,// Mức tín nhiệm
        minimumRevenueOfContractor: Validation.REVENUE,//
        unitRevenueOfContractor: Validation.CURRENCY_UNIT,
        otherRequirements: Joi.string(),


        investment: Validation.INVESTMENT,
        unitInvestment: Validation.CURRENCY_UNIT,

        bidType:Joi.string(),
        allowAlternativeBids: Joi.boolean(),
        allowSealedBids: Joi.boolean(),
        description:Joi.string(),
        unitCurrency: Joi.string(),
        categoryWorks:Joi.array().items(Joi.object()),
        categoryMaterials:Joi.array().items(Joi.object()),
        categoryDocuments:Joi.array().items(Joi.object()),
        invitedEmails:Joi.array().items(Joi.string()),
        // areaOfLand: Validation.AREA, // Dien tich dat
        // unitAreaOfLand: Validation.AREA_UNIT,

        // contructionArea: Validation.AREA,//Dien tich xay dung
        // unitContructionArea: Validation.AREA_UNIT,
    }
}

export const VALIDATION_UPDATE_BIDDING_ITEM = {
    options: {allowUnknownBody: false},
    body: {
        id: Validation.ID.required(),
        projectId: Joi.number().required(),
        updateById: Joi.number().required(),
        updateByType: Joi.string().valid(PROJECT,CONTRACTOR).required(),
        typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR,
        // typeOfContruction: Validation.TYPE_OF_CONTRUCTION,
        // typeOfProject: Validation.TYPE_OF_PROJECT,
        name: Validation.NAME,
        // address: Validation.ADDRESS.required(),
        // location: Validation.COUNTRY_CITY_DISTRICT,
        // city: Validation.CITY.required(),
        // country: Validation.COUNTRY.required(),
        // district: Validation.DISTRICT.required(),
        phase: Validation.PHASE,// Giai đoạn của dự án bao gồm [chuẩn bị, đấu thầu, thi công, hoàn thành]
        startBuildTime: Validation.DATE,
        endBuildTime: Validation.DATE,

        fromBudget: Validation.BUGET,
        endBudget: Validation.BUGET,
        unitBugget: Validation.CURRENCY_UNIT,

        // typeOfInvestment: Validation.TYPE_OF_INVESTMENT,

        startScheduled: Validation.DATE,
        endScheduled: Validation.DATE,

        bidSolicitor: Validation.BIDDING_SOLICITOR, //ID Các bên mên mời thầu

        // biddingForm: Joi.number(), //Hình thức đấu thầu

        countryOfContractor: Validation.COUNTRY,
        districtOfContractor: Validation.COUNTRY,

        bidOpenTime: Validation.DATE, // Thời gian mở thầu
        bidCloseTime: Validation.DATE, // Thời gian đóng thầu

        minimumExperienceOfContractor: Joi.number(),
        creditRatingOfContractor: Validation.RANKING,// Mức tín nhiệm
        minimumRevenueOfContractor: Validation.REVENUE,//
        unitRevenueOfContractor: Validation.CURRENCY_UNIT,
        otherRequirements: Joi.string(),


        investment: Validation.INVESTMENT,
        unitInvestment: Validation.CURRENCY_UNIT,

        bidType:Joi.string(),
        allowAlternativeBids: Joi.boolean(),
        allowSealedBids: Joi.boolean(),
        description:Joi.string(),
        categoryDocuments: Joi.array().items(Joi.object()),
        categoryMaterials:Joi.array().items(Joi.object()),
        unitCurrency: Validation.CURRENCY_UNIT,
        invitedEmails:Joi.array().items(Joi.string()),
        categoryWorks:Joi.array().items(Joi.object()),
        // areaOfLand: Validation.AREA, // Dien tich dat
        // unitAreaOfLand: Validation.AREA_UNIT,

        // contructionArea: Validation.AREA,//Dien tich xay dung
        // unitContructionArea: Validation.AREA_UNIT,
    }
}

export const VALIDATION_EXTRAS_CREATE_RATING = {
    options: {allowUnknownBody: false},
    body: {
        star: Validation.RANKING.required(),
        content: Validation.DESCRIPTION.required(),
        ownerId: Joi.number().required(),
        ownerType: Joi.string().valid(CONTRACTOR, ACCOUNT,PROJECT).required(),
        senderId: Joi.number().required(),
        senderType: Joi.string().valid(CONTRACTOR, ACCOUNT).required()
    }
}
export const VALIDATION_EXTRAS_EXIST_RATING = {
    options: {allowUnknownBody: false},
    body: {
        ownerId: Joi.number().required(),
        senderId: Joi.number().required()
    }
}
export const VALIDATION_EXTRAS_CREATE_DOCUMENT = {
    options: {allowUnknownBody: false},
    body: {
        name: Validation.NAME.required(),
        url: Joi.string().required(),
        type: Joi.string().required(),
        idFile: Joi.string().required(),
        ownerId: Joi.number().required(),
        ownerType: Joi.string().valid(CONTRACTOR, PROJECT, BIDDING_CATEGORY, BIDDING).required()
    }
}

export const VALIDATION_EXTRAS_GET_CANDIDATE_RATING = {
    options: {allowUnknownBody: false},
    body: {
    }
}