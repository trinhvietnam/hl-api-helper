/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter projects
 * */
import {Validation} from "../../constants/schema/Validation";
/**
 * Created by nam on 3/26/2017.
 */
/*
 * Validation for rounter contractors
 * */
var Joi = require('joi');
export const VALIDATION_CONTRACTORS_LIST = {
    options: {allowUnknownBody: false},
    body: {
        city: Joi.string(),
        typeOfContractor: Joi.string(),
        typeOfConstruction: Joi.number(),
        typeOfProject: Joi.number(),
        typeOfCompany: Joi.number(),
        name: Joi.string(),
        revenue: Validation.REVENUE,
        foundedYear: Validation.FOUNDED_YEAR,
        totalRanking: Validation.RANKING,
        page: Joi.number().min(1)
    }
}
export const VALIDATION_CONTRACTORS_DETAIL_ONE = {
    options: {allowUnknownBody: false},
    params: {
        id: Joi.number().required()
    }
}
export const VALIDATION_CONTRACTORS_CREATE = {
    options: {allowUnknownBody: false},
    body: {
        typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR.required(),
        typeOfConstruction: Validation.ARRAY_TYPE_OF_CONTRUCTION.min(0).required(),
        typeOfProject: Validation.ARRAY_TYPE_OF_PROJECT.min(0).required(),
        name: Validation.NAME.required(),
        address: Validation.ADDRESS.required(),
        location: Validation.LOCATION,
        city: Validation.CITY.required(),
        country: Validation.COUNTRY.required(),
        district: Validation.DISTRICT.required(),
        phone: Validation.PHONE.required(),
        fax: Validation.FAX,
        website: Validation.WEBSITE,
        email: Validation.EMAIL.required(),
        origination: Validation.COUNTRY.required(),
        foundedYear: Validation.FOUNDED_YEAR.required(),
        description: Validation.DESCRIPTION,
        typeCompany: Validation.TYPE_OF_COMPANY.required(),
        language: Validation.LANGUAGE,
        qualityManagement: Validation.QUALITY_MANAGEMENT,
        revenue: Validation.REVENUE.required(),
        unitRevenue: Validation.CURRENCY_UNIT,
        price: Validation.PRICE,
        wallImage: Joi.string(),
        logo: Joi.string(),
        subBusiness: Joi.array().items(Joi.string()),
        typeOfCompany: Joi.number(),
        mainMarkets:  Joi.array().items(Joi.string()),
        finances: Joi.array().items(Joi.object().keys({
            year: Validation.FOUNDED_YEAR.required(),
            revenue: Validation.REVENUE.required(),
            totalAsset: Validation.REVENUE.required(),
            totalLiabilitie: Validation.REVENUE.required(),
            charterCapital: Validation.REVENUE.required(),
            currencyUnit: Validation.CURRENCY_UNIT.required(),
        })).min(0).required(),
        projectExperiences: Joi.array().items(Joi.object().keys({
            typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR.required(),
            typeOfConstruction: Validation.TYPE_OF_CONTRUCTION,
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
            listImage: Joi.array().items(Joi.string()).min(0).required(),
            listVideo: Joi.array().items(Joi.string()).min(0).required(),
            investment: Validation.INVESTMENT,
            unitInvestment: Validation.CURRENCY_UNIT,

            areaOfLand: Validation.AREA, // Dien tich dat
            unitAreaOfLand: Validation.AREA_UNIT,

            contructionArea: Validation.AREA,//Dien tich xay dung
            unitContructionArea: Validation.AREA_UNIT,
        })).min(0).required(),
        contacts: Joi.array().items(Joi.object().keys({
            name: Joi.string().required(),
            lastName: Joi.string(),
            phone: Joi.string(),
            mobile: Joi.string().required(),
            fax: Joi.string(),
            website: Joi.string(),
            about: Joi.string().required(),
            email: Joi.string().required(),
            position: Joi.string().required(),
            title: Joi.string().required()
        })).min(0).required(),
        documents: Joi.array().items(Joi.object()).min(0).required(),
    }
}

export const VALIDATION_CONTRACTORS_UPDATE = {
    options: {allowUnknownBody: false},
    body: {
        typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR,
        typeOfConstruction: Validation.ARRAY_TYPE_OF_CONTRUCTION,
        typeOfProject: Validation.ARRAY_TYPE_OF_PROJECT,
        name: Validation.NAME,
        address: Validation.ADDRESS,
        location: Validation.LOCATION,
        city: Validation.CITY,
        country: Validation.COUNTRY,
        district: Validation.DISTRICT,
        phone: Validation.PHONE,
        fax: Validation.FAX,
        website: Validation.WEBSITE,
        email: Validation.EMAIL,
        origination: Validation.COUNTRY,
        foundedYear: Validation.FOUNDED_YEAR,
        description: Validation.DESCRIPTION,
        typeCompany: Validation.TYPE_OF_COMPANY,
        language: Validation.LANGUAGE,
        qualityManagement: Validation.QUALITY_MANAGEMENT,
        revenue: Validation.REVENUE,
        unitRevenue: Validation.CURRENCY_UNIT,
        price: Validation.PRICE,
        wallImage: Joi.string(),
        logo: Joi.string(),
        subBusiness: Joi.array().items(Joi.string()),
        typeOfCompany: Joi.number(),
        mainMarkets:  Joi.array().items(Joi.string()),
        numOfEmployees:  Joi.array().items(Joi.string().valid('<10','10-50','50-100','100-200','200-500','500-1000','>1000')),
        contacts: Joi.array().items(Joi.object().keys({
            name: Joi.string().required(),
            lastName: Joi.string(),
            phone: Joi.string(),
            mobile: Joi.string().required(),
            fax: Joi.string(),
            website: Joi.string(),
            about: Joi.string().required(),
            email: Joi.string().required(),
            position: Joi.string().required(),
            title: Joi.string().required()
        })).min(1),
        finances: Joi.array().items(Joi.object().keys({
            year: Validation.FOUNDED_YEAR.required(),
            revenue: Validation.REVENUE.required(),
            totalAsset: Validation.REVENUE.required(),
            totalLiabilitie: Validation.REVENUE.required(),
            charterCapital: Validation.REVENUE.required(),
            currencyUnit: Validation.CURRENCY_UNIT.required(),
        })),
        documents: Joi.array().items(Validation.OBJECT_DOCUMENT).min(0),
        projectExperiences: Joi.array().items(Joi.object().keys({
            typeOfContractor: Validation.ARRAY_TYPE_OF_CONTRACTOR.required(),
            typeOfConstruction: Validation.TYPE_OF_CONTRUCTION,
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
            listImage: Joi.array().items(Joi.string()).min(0),
            listVideo: Joi.array().items(Joi.string()).min(0),
            investment: Validation.INVESTMENT,
            unitInvestment: Validation.CURRENCY_UNIT,

            areaOfLand: Validation.AREA, // Dien tich dat
            unitAreaOfLand: Validation.AREA_UNIT,

            contructionArea: Validation.AREA,//Dien tich xay dung
            unitContructionArea: Validation.AREA_UNIT,
        }))
    }
}
export const VALIDATION_UPDATE_HOUSELINK_RANKING = {
    options: {allowUnknownBody: false},
    body: {
        houselinkRanking: Joi.array().items(Joi.object().keys({
            category: Joi.string().required(),
            ranking: Joi.string().required(),
            score: Joi.number().max(5).min(1).required(),
        })),
    }
}