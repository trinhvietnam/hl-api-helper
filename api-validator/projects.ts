import {Validation} from "../constants/schema/Validation";
/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter projects
 * */
var Joi = require('joi');
export const VALIDATION_PROJECTS_LIST = {
    options: {allowUnknownBody: false},
    body: {
        city: Joi.string(),
        typeOfContractor: Validation.TYPE_OF_CONTRACTOR,
        typeOfContruction: Validation.TYPE_OF_CONTRUCTION,
        typeOfProject: Validation.TYPE_OF_PROJECT,
        typeOfCompany: Validation.TYPE_OF_COMPANY,

        name: Joi.string(),
        investment: Validation.INVESTMENT,
        phase: Validation.PHASE,
        typeOfInvestment: Validation.TYPE_OF_INVESTMENT,
        areaOfLand: Validation.AREA,
        contructionArea: Validation.AREA,
        bidOpenTime: Validation.DATE,
        bidCloseTime: Validation.DATE,
        startBuildTime: Validation.DATE,
        endBuildTime: Validation.DATE,
        listImage: Validation.LIST_IMAGE,
        listVideo: Validation.LIST_VIDEO,
        page:Joi.number().min(1)
    }
}
export const VALIDATION_PROJECTS_DETAIL_ONE = {
    options: {allowUnknownBody: false},
    params: {
        id: Joi.number().required()
    }
}
export const VALIDATION_PROJECTS_CREATE = {
    options: {allowUnknownBody: false},
    body: {
        typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR.required(),
        typeOfContruction: Validation.TYPE_OF_CONTRUCTION,
        typeOfProject: Validation.TYPE_OF_PROJECT,
        name: Validation.NAME.required(),
        address: Validation.ADDRESS.required(),
        location: Validation.LOCATION,
        city: Validation.CITY.required(),
        country: Validation.COUNTRY.required(),
        district: Validation.DISTRICT.required(),
        phase: Validation.PHASE,// Giai đoạn của dự án bao gồm [chuẩn bị, đấu thầu, thi công, hoàn thành]
        startBuildTime: Validation.DATE,
        endBuildTime: Validation.DATE,

        fromBudget: Validation.BUGET,
        endBudget: Validation.BUGET,
        unitBugget: Validation.CURRENCY_UNIT,

        typeOfInvestment: Validation.TYPE_OF_INVESTMENT,

        startScheduled: Validation.DATE,
        endScheduled: Validation.DATE,

        bidSolicitor: Validation.BIDDING_SOLICITOR, //ID Các bên mên mời thầu

        biddingForm: Joi.number(), //Hình thức đấu thầu

        countryOfContractor: Validation.COUNTRY,
        districtOfContractor: Validation.COUNTRY,

        bidOpenTime: Validation.DATE, // Thời gian mở thầu
        bidCloseTime: Validation.DATE, // Thời gian đóng thầu

        minimumExperienceOfContractor: Joi.number(),
        creditRatingOfContractor: Validation.RANKING,// Mức tín nhiệm
        minimumRevenueOfContractor: Validation.REVENUE,//
        unitRevenueOfContractor: Validation.CURRENCY_UNIT,
        otherRequirements: Joi.string(),
        listImage: Joi.array().items(Joi.string()),
        listVideo: Joi.array().items(Joi.string()),
        investment: Validation.INVESTMENT,
        unitInvestment: Validation.CURRENCY_UNIT,

        areaOfLand: Validation.AREA, // Dien tich dat
        unitAreaOfLand: Validation.AREA_UNIT,

        contructionArea: Validation.AREA,//Dien tich xay dung
        unitContructionArea: Validation.AREA_UNIT,
        categories: Joi.array().items(Joi.object().keys({
            category: Joi.string().required(),
            quantity: Joi.string().required(),
            area: Joi.string().required(),
        })),
        materials: Joi.array().items(Joi.object().keys({
            material: Joi.string().required(),
            quantity: Joi.string().required(),
            standard: Joi.string().required(),
        })),
        stage: Joi.string(),
        status: Joi.string(),
        propertyType: Joi.string(),
        subPropertyType: Joi.string(),
        purpose: Joi.string(),
        ownerRoll: Joi.string()
    }
}

export const VALIDATION_PROJECTS_UPDATE = {
    options: {allowUnknownBody: false},
    body: {
        typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR,
        typeOfContruction: Validation.TYPE_OF_CONTRUCTION,
        typeOfProject: Validation.TYPE_OF_PROJECT,
        name: Validation.NAME,
        address: Validation.ADDRESS,
        location: Validation.LOCATION,
        city: Validation.CITY,
        country: Validation.COUNTRY,
        district: Validation.DISTRICT,
        phase: Validation.PHASE,// Giai đoạn của dự án bao gồm [chuẩn bị, đấu thầu, thi công, hoàn thành]
        startBuildTime: Validation.DATE,
        endBuildTime: Validation.DATE,

        fromBudget: Validation.BUGET,
        endBudget: Validation.BUGET,
        unitBugget: Validation.CURRENCY_UNIT,

        typeOfInvestment: Validation.TYPE_OF_INVESTMENT,

        startScheduled: Validation.DATE,
        endScheduled: Validation.DATE,

        bidSolicitor: Validation.BIDDING_SOLICITOR, //ID Các bên mên mời thầu

        biddingForm: Joi.number(), //Hình thức đấu thầu

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

        areaOfLand: Validation.AREA, // Dien tich dat
        unitAreaOfLand: Validation.AREA_UNIT,

        contructionArea: Validation.AREA,//Dien tich xay dung
        unitContructionArea: Validation.AREA_UNIT,
        documents: Joi.array().items(Validation.OBJECT_DOCUMENT),
        categories: Joi.array().items(Joi.object().keys({
            category: Joi.string().required(),
            quantity: Joi.string().required(),
            area: Joi.string().required(),
        })),
        materials: Joi.array().items(Joi.object().keys({
            material: Joi.string().required(),
            quantity: Joi.string().required(),
            standard: Joi.string().required(),
        })),
        listImage: Validation.LIST_IMAGE,
        listVideo: Validation.LIST_VIDEO,
        stage: Joi.string(),
        status: Joi.string(),
        propertyType: Joi.string(),
        subPropertyType: Joi.string(),
        purpose: Joi.string(),
        ownerRoll: Joi.string()
    }
}