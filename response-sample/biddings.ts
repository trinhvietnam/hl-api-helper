/**
 * Created by nam on 7/30/2017.
 */
var responseCandidateBidding = {
    "error": null,
    "data": [
        {
            "id": "1501385959771",
            "address": "Phạm Hùng - Hà Nội",
            "city": "Hà Nội",
            "contacts": null,
            "country": "Việt Nam",
            "createdById": "910200869",
            "description": null,
            "district": "Cầu Giấy",
            "documents": null,
            "email": "vi@gmail.com",
            "entityName": null,
            "entityStatus": "1",
            "fax": null,
            "finances": null,
            "foundedYear": 1960,
            "houselinkranking": null,
            "isHouseLinkMember": null,
            "isVerifiedicense": null,
            "language": null,
            "location": null,
            "logo": null,
            "mainMarkets": null,
            "modifiedById": null,
            "name": "Tong cong ty Sông Đà",
            "noSignName": "tong cong ty song da",
            "numOfEmployees": null,
            "numOfExpProject": null,
            "numOfFollower": "0",
            "numOfRating": "0",
            "numOfRating1Star": "0",
            "numOfRating2Star": "0",
            "numOfRating3Star": "0",
            "numOfRating4Star": "0",
            "numOfRating5Star": "0",
            "numOfView": "0",
            "origination": "Việt Nam",
            "ownerId": "910200869",
            "ownerInfo": {
                "id": 910200869,
                "name": "Trịnh Viết Nam",
                "avatar": null
            },
            "parentId": null,
            "parentType": null,
            "phone": "0934523 32420",
            "price": null,
            "qualityManagement": null,
            "revenue": "123454535",
            "subBusiness": null,
            "taxCode": null,
            "timeCreate": null,
            "timeModify": null,
            "totalRanking": null,
            "type": null,
            "typeCompany": 1,
            "typeOfBusiness": null,
            "typeOfCompany": null,
            "typeOfConstruction": null,
            "typeOfContractor": [
                "1.1",
                "1.2"
            ],
            "typeOfProject": null,
            "unitPrice": "VND",
            "unitRevenue": "VND",
            "wallImage": null,
            "website": null
        }
    ]
}
var bodyRequestBidding ={
    "toType":"biddingCategory",
    "toId":1501780677697,
    "projectId":1493340729194,
    "fromId":1501385959771,
    "fromType":"contractor",
    "contentLetter":"Thư chào thầu",
    "documents":[{
        "name":"Ban vẽ thiết kế sân chơi",
        "url":"url",
        "type":"pdf",
        "fileId":"fileId",
        "timeCreate":"timeCreate"
    }],
    "work":[{
        "name":"Thiế kế sân chơi",
        "unitMoney":"VND",
        "unitTime":"DAY",
        "money":10000000,
        "time":1
    }]
}
var responseBididng ={
    "error": null,
    "data": {
        "timeCreate": "2017-08-03T17:24:58.544Z",
        "timeModify": "2017-08-03T17:24:58.544Z",
        "id": 842572596,
        "biddingStatus": "bidding",
        "totalMoney": 10000000,
        "unitMoney": "VND",
        "totalTime": 1,
        "unitTime": "DAY",
        "version": 1,
        "sendingStatus": "waiting",
        "receiveStatus": "notyetview",
        "toType": "biddingCategory",
        "toId": 1501780677697,
        "projectId": 1493340729194,
        "fromId": 1501385959771,
        "fromType": "contractor",
        "contentLetter": "Thư chào thầu",
        "documents": [
            {
                "name": "Ban vẽ thiết kế sân chơi",
                "url": "url",
                "type": "pdf",
                "fileId": "fileId",
                "timeCreate": "timeCreate"
            }
        ],
        "work": [
            {
                "name": "Thiế kế sân chơi",
                "unitMoney": "VND",
                "unitTime": "DAY",
                "money": 10000000,
                "time": 1
            }
        ],
        "createByUserId": 910200869
    }
}
var responseDetailBidding = {
    "error": null,
    "data": {
        "timeCreate": "2017-08-03T19:32:15.962Z",
        "timeModify": "2017-08-03T19:32:15.962Z",
        "id": 842572596,
        "biddingStatus": "bidding",
        "totalMoney": 10000000,
        "unitMoney": "VND",
        "totalTime": 1,
        "unitTime": "DAY",
        "version": 1,
        "sendingStatus": "waiting",
        "receiveStatus": "notyetview",
        "toType": "biddingCategory",
        "toId": 1501780677697,
        "projectId": 1493340729194,
        "fromId": 1501385959771,
        "fromType": "contractor",
        "contentLetter": "Thư chào thầu",
        "documents": [
            {
                "name": "Ban vẽ thiết kế sân chơi",
                "url": "url",
                "type": "pdf",
                "fileId": "fileId",
                "timeCreate": "timeCreate"
            }
        ],
        "work": [
            {
                "name": "Thiế kế sân chơi",
                "unitMoney": "VND",
                "unitTime": "DAY",
                "money": 10000000,
                "time": 1
            }
        ],
        "createByUserId": 910200869
    }
}

var responseListBididingToEntity = {
    "error": null,
    "data": [
        [
            {
                "timeCreate": "2017-08-03T19:32:15.962Z",
                "timeModify": "2017-08-03T19:32:15.962Z",
                "id": 842572596,
                "biddingStatus": "bidding",
                "totalMoney": 10000000,
                "unitMoney": "VND",
                "totalTime": 1,
                "unitTime": "DAY",
                "version": 1,
                "sendingStatus": "waiting",
                "receiveStatus": "notyetview",
                "toType": "biddingCategory",
                "toId": 1501780677697,
                "projectId": 1493340729194,
                "fromId": 1501385959771,
                "fromType": "contractor",
                "contentLetter": "Thư chào thầu",
                "documents": [
                    {
                        "name": "Ban vẽ thiết kế sân chơi",
                        "url": "url",
                        "type": "pdf",
                        "fileId": "fileId",
                        "timeCreate": "timeCreate"
                    }
                ],
                "work": [
                    {
                        "name": "Thiế kế sân chơi",
                        "unitMoney": "VND",
                        "unitTime": "DAY",
                        "money": 10000000,
                        "time": 1
                    }
                ],
                "createByUserId": 910200869,
                "fromInfo": {
                    "id": "1501385959771",
                    "address": "Phạm Hùng - Hà Nội",
                    "city": "Hà Nội",
                    "contacts": null,
                    "country": "Việt Nam",
                    "createdById": "910200869",
                    "description": null,
                    "district": "Cầu Giấy",
                    "documents": null,
                    "email": "vi@gmail.com",
                    "entityName": null,
                    "entityStatus": "1",
                    "fax": null,
                    "finances": null,
                    "foundedYear": 1960,
                    "houselinkranking": null,
                    "isHouseLinkMember": null,
                    "isVerifiedicense": null,
                    "language": null,
                    "location": null,
                    "logo": null,
                    "mainMarkets": null,
                    "modifiedById": null,
                    "name": "Tong cong ty Sông Đà",
                    "noSignName": "tong cong ty song da",
                    "numOfEmployees": null,
                    "numOfExpProject": null,
                    "numOfFollower": "0",
                    "numOfRating": "0",
                    "numOfRating1Star": "0",
                    "numOfRating2Star": "0",
                    "numOfRating3Star": "0",
                    "numOfRating4Star": "0",
                    "numOfRating5Star": "0",
                    "numOfView": "0",
                    "origination": "Việt Nam",
                    "ownerId": "910200869",
                    "ownerInfo": {
                        "id": 910200869,
                        "name": "Trịnh Viết Nam",
                        "avatar": null
                    },
                    "parentId": null,
                    "parentType": null,
                    "phone": "0934523 32420",
                    "price": null,
                    "qualityManagement": null,
                    "revenue": "123454535",
                    "subBusiness": null,
                    "taxCode": null,
                    "timeCreate": null,
                    "timeModify": null,
                    "totalRanking": null,
                    "type": null,
                    "typeCompany": 1,
                    "typeOfBusiness": null,
                    "typeOfCompany": null,
                    "typeOfConstruction": null,
                    "typeOfContractor": [
                        "1.1",
                        "1.2"
                    ],
                    "typeOfProject": null,
                    "unitPrice": "VND",
                    "unitRevenue": "VND",
                    "wallImage": null,
                    "website": null
                }
            }
        ],
        {
            "roleFor": "biddingCategory",
            "userId": "1493340729194",
            "entityId": "1501780677697",
            "createdById": null,
            "entityName": "role",
            "entityStatus": null,
            "id": "718036501",
            "modifiedById": null,
            "parentId": null,
            "parentType": null,
            "timeCreate": null,
            "timeModify": null,
            "userCan": [
                "EDIT_ENTITY",
                "MANAGE_ENTITY",
                "VIEW_ENTITY"
            ],
            "userRole": "manager"
        }
    ]
}

var responseWhenGetListBiddingFrom = {
    "error": null,
    "data": [
        [
            {
                "timeCreate": "2017-08-03T19:32:15.962Z",
                "timeModify": "2017-08-03T19:32:15.962Z",
                "id": 842572596,
                "biddingStatus": "bidding",
                "totalMoney": 10000000,
                "unitMoney": "VND",
                "totalTime": 1,
                "unitTime": "DAY",
                "version": 1,
                "sendingStatus": "waiting",
                "receiveStatus": "notyetview",
                "toType": "biddingCategory",
                "toId": 1501780677697,
                "projectId": 1493340729194,
                "fromId": 1501385959771,
                "fromType": "contractor",
                "contentLetter": "Thư chào thầu",
                "documents": [
                    {
                        "name": "Ban vẽ thiết kế sân chơi",
                        "url": "url",
                        "type": "pdf",
                        "fileId": "fileId",
                        "timeCreate": "timeCreate"
                    }
                ],
                "work": [
                    {
                        "name": "Thiế kế sân chơi",
                        "unitMoney": "VND",
                        "unitTime": "DAY",
                        "money": 10000000,
                        "time": 1
                    }
                ],
                "createByUserId": 910200869,
                "fromInfo": {
                    "id": "1501385959771",
                    "address": "Phạm Hùng - Hà Nội",
                    "city": "Hà Nội",
                    "contacts": null,
                    "country": "Việt Nam",
                    "createdById": "910200869",
                    "description": null,
                    "district": "Cầu Giấy",
                    "documents": null,
                    "email": "vi@gmail.com",
                    "entityName": null,
                    "entityStatus": "1",
                    "fax": null,
                    "finances": null,
                    "foundedYear": 1960,
                    "houselinkranking": null,
                    "isHouseLinkMember": null,
                    "isVerifiedicense": null,
                    "language": null,
                    "location": null,
                    "logo": null,
                    "mainMarkets": null,
                    "modifiedById": null,
                    "name": "Tong cong ty Sông Đà",
                    "noSignName": "tong cong ty song da",
                    "numOfEmployees": null,
                    "numOfExpProject": null,
                    "numOfFollower": "0",
                    "numOfRating": "0",
                    "numOfRating1Star": "0",
                    "numOfRating2Star": "0",
                    "numOfRating3Star": "0",
                    "numOfRating4Star": "0",
                    "numOfRating5Star": "0",
                    "numOfView": "0",
                    "origination": "Việt Nam",
                    "ownerId": "910200869",
                    "ownerInfo": {
                        "id": 910200869,
                        "name": "Trịnh Viết Nam",
                        "avatar": null
                    },
                    "parentId": null,
                    "parentType": null,
                    "phone": "0934523 32420",
                    "price": null,
                    "qualityManagement": null,
                    "revenue": "123454535",
                    "subBusiness": null,
                    "taxCode": null,
                    "timeCreate": null,
                    "timeModify": null,
                    "totalRanking": null,
                    "type": null,
                    "typeCompany": 1,
                    "typeOfBusiness": null,
                    "typeOfCompany": null,
                    "typeOfConstruction": null,
                    "typeOfContractor": [
                        "1.1",
                        "1.2"
                    ],
                    "typeOfProject": null,
                    "unitPrice": "VND",
                    "unitRevenue": "VND",
                    "wallImage": null,
                    "website": null
                }
            }
        ],
        {
            "roleFor": "contractor",
            "userId": "910200869",
            "entityId": "1501385959771",
            "createdById": null,
            "entityName": "role",
            "entityStatus": null,
            "id": "476402192",
            "modifiedById": null,
            "parentId": null,
            "parentType": null,
            "timeCreate": null,
            "timeModify": null,
            "userCan": [
                "EDIT_BIDDING_CATEGORY_PROJECT",
                "EDIT_ENTITY",
                "MANAGE_ENTITY",
                "RATING_OTHER_ENTITY",
                "SEND_BIDDING_CATEGORY_PROJECT",
                "VIEW_BIDDING_CATEGORY_PROJECT",
                "VIEW_ENTITY"
            ],
            "userRole": "manager"
        }
    ]
}

var responseUpdateStatusBidding = {
    "error": null,
    "data": {
        "timeCreate": "2017-08-03T19:32:15.962Z",
        "timeModify": "2017-08-03T19:32:15.962Z",
        "id": 842572596,
        "biddingStatus": "bidding",
        "totalMoney": 10000000,
        "unitMoney": "VND",
        "totalTime": 1,
        "unitTime": "DAY",
        "version": 1,
        "sendingStatus": "waiting",
        "receiveStatus": "liked",
        "toType": "biddingCategory",
        "toId": 1501780677697,
        "projectId": 1493340729194,
        "fromId": 1501385959771,
        "fromType": "contractor",
        "contentLetter": "Thư chào thầu",
        "documents": [
            {
                "name": "Ban vẽ thiết kế sân chơi",
                "url": "url",
                "type": "pdf",
                "fileId": "fileId",
                "timeCreate": "timeCreate"
            }
        ],
        "work": [
            {
                "name": "Thiế kế sân chơi",
                "unitMoney": "VND",
                "unitTime": "DAY",
                "money": 10000000,
                "time": 1
            }
        ],
        "createByUserId": 910200869,
        "updateByUserId": 910200869
    }
}

var responseListCandidateCanInvite ={
    "error": null,
    "data": [
        {
            "id": 1501385959771,
            "entityStatus": 1,
            "numOfFollower": 0,
            "numOfView": 0,
            "numOfRating": 0,
            "numOfRating1Star": 0,
            "numOfRating2Star": 0,
            "numOfRating3Star": 0,
            "numOfRating4Star": 0,
            "numOfRating5Star": 0,
            "unitRevenue": "VND",
            "unitPrice": "VND",
            "name": "Tong cong ty Sông Đà",
            "city": "Hà Nội",
            "country": "Việt Nam",
            "address": "Phạm Hùng - Hà Nội",
            "phone": "0934523 32420",
            "email": "vi@gmail.com",
            "typeOfContractor": [
                "1.1",
                "1.2"
            ],
            "district": "Cầu Giấy",
            "origination": "Việt Nam",
            "foundedYear": 1960,
            "typeCompany": 1,
            "revenue": 123454535,
            "ownerId": 910200869,
            "createdById": 910200869,
            "userEntity": "{\"id\":910200869,\"accountStatus\":null,\"accountType\":null,\"address\":null,\"avatar\":null,\"city\":\"TP Hồ Chí Minh\",\"country\":\"Việt Nam\",\"createdById\":null,\"district\":null,\"email\":\"trinhvietnambk@gmail.com\",\"emailNotifies\":null,\"entityName\":\"account\",\"entityStatus\":\"1\",\"fax\":null,\"isValidatePhone\":null,\"isWaitingResetPassword\":null,\"language\":null,\"lastName\":null,\"location\":null,\"modifiedById\":\"910200869\",\"name\":\"Trịnh Viết Nam\",\"numOfFollower\":null,\"numOfFollowing\":\"2\",\"numOfRating\":null,\"numOfRating1Star\":null,\"numOfRating2Star\":null,\"numOfRating3Star\":null,\"numOfRating4Star\":null,\"numOfRating5Star\":null,\"numOfView\":null,\"parentId\":null,\"parentType\":null,\"paymentMethods\":null,\"phone\":null,\"suggestEmail\":\"trinhvietnambk\",\"taxCode\":null,\"tempPassword\":null,\"timeCreate\":\"2017-04-27T17:27:02.330Z\",\"timeModify\":\"2017-07-30T03:30:34.448Z\",\"type\":null,\"verifies\":null,\"website\":null,\"keyJWT\":1501385956353,\"mapRoles\":{\"910200869\":{\"roleFor\":\"account\",\"userId\":\"910200869\",\"entityId\":\"910200869\",\"createdById\":null,\"entityName\":\"role\",\"entityStatus\":\"1\",\"id\":\"1105731116\",\"modifiedById\":null,\"parentId\":null,\"parentType\":null,\"timeCreate\":\"2017-04-27T17:27:02.313Z\",\"timeModify\":\"2017-04-27T17:27:02.313Z\",\"userCan\":[\"EDIT_ENTITY\",\"MANAGE_ENTITY\",\"VIEW_ENTITY\"],\"userRole\":\"owner\"},\"account\":[\"910200869\"],\"1493340729194\":{\"roleFor\":\"project\",\"userId\":\"910200869\",\"entityId\":\"1493340729194\",\"createdById\":null,\"entityName\":\"role\",\"entityStatus\":\"1\",\"id\":\"-585039974\",\"modifiedById\":null,\"parentId\":null,\"parentType\":null,\"timeCreate\":\"2017-04-28T00:52:09.193Z\",\"timeModify\":\"2017-04-28T00:52:09.193Z\",\"userCan\":[\"EDIT_ENTITY\",\"MANAGE_BIDDING_CATEGORY_PROJECT\",\"MANAGE_ENTITY\",\"VIEW_BIDDING_CATEGORY_PROJECT\",\"VIEW_ENTITY\"],\"userRole\":\"owner\"},\"project\":[\"1493340729194\"],\"contractor\":[]}}",
            "noSignName": "tong cong ty song da"
        },
        {
            "id": 1501385277950,
            "entityStatus": 1,
            "numOfFollower": 0,
            "numOfView": 0,
            "numOfRating": 0,
            "numOfRating1Star": 0,
            "numOfRating2Star": 0,
            "numOfRating3Star": 0,
            "numOfRating4Star": 0,
            "numOfRating5Star": 0,
            "unitRevenue": "VND",
            "unitPrice": "VND",
            "name": "Tong cong ty Vinaconex",
            "city": "Hà Nội",
            "country": "Việt Nam",
            "address": "Phạm Hùng - Hà Nội",
            "phone": "0934523 32420",
            "email": "vi@gmail.com",
            "typeOfContractor": [
                "1.1",
                "1.2"
            ],
            "district": "Cầu Giấy",
            "origination": "Việt Nam",
            "foundedYear": 1960,
            "typeCompany": 1,
            "revenue": 123454535,
            "ownerId": 910200869,
            "createdById": 910200869,
            "userEntity": "{\"id\":910200869,\"accountStatus\":null,\"accountType\":null,\"address\":null,\"avatar\":null,\"city\":\"TP Hồ Chí Minh\",\"country\":\"Việt Nam\",\"createdById\":null,\"district\":null,\"email\":\"trinhvietnambk@gmail.com\",\"emailNotifies\":null,\"entityName\":\"account\",\"entityStatus\":\"1\",\"fax\":null,\"isValidatePhone\":null,\"isWaitingResetPassword\":null,\"language\":null,\"lastName\":null,\"location\":null,\"modifiedById\":\"910200869\",\"name\":\"Trịnh Viết Nam\",\"numOfFollower\":null,\"numOfFollowing\":\"2\",\"numOfRating\":null,\"numOfRating1Star\":null,\"numOfRating2Star\":null,\"numOfRating3Star\":null,\"numOfRating4Star\":null,\"numOfRating5Star\":null,\"numOfView\":null,\"parentId\":null,\"parentType\":null,\"paymentMethods\":null,\"phone\":null,\"suggestEmail\":\"trinhvietnambk\",\"taxCode\":null,\"tempPassword\":null,\"timeCreate\":\"2017-04-27T17:27:02.330Z\",\"timeModify\":\"2017-07-30T03:24:14.648Z\",\"type\":null,\"verifies\":null,\"website\":null,\"keyJWT\":1501385212371,\"mapRoles\":{\"910200869\":{\"roleFor\":\"account\",\"userId\":\"910200869\",\"entityId\":\"910200869\",\"createdById\":null,\"entityName\":\"role\",\"entityStatus\":\"1\",\"id\":\"1105731116\",\"modifiedById\":null,\"parentId\":null,\"parentType\":null,\"timeCreate\":\"2017-04-27T17:27:02.313Z\",\"timeModify\":\"2017-04-27T17:27:02.313Z\",\"userCan\":[\"EDIT_ENTITY\",\"MANAGE_ENTITY\",\"VIEW_ENTITY\"],\"userRole\":\"owner\"},\"contractor\":[],\"1493340729194\":{\"roleFor\":\"project\",\"userId\":\"910200869\",\"entityId\":\"1493340729194\",\"createdById\":null,\"entityName\":\"role\",\"entityStatus\":\"1\",\"id\":\"-585039974\",\"modifiedById\":null,\"parentId\":null,\"parentType\":null,\"timeCreate\":\"2017-04-28T00:52:09.193Z\",\"timeModify\":\"2017-04-28T00:52:09.193Z\",\"userCan\":[\"EDIT_ENTITY\",\"MANAGE_BIDDING_CATEGORY_PROJECT\",\"MANAGE_ENTITY\",\"VIEW_BIDDING_CATEGORY_PROJECT\",\"VIEW_ENTITY\"],\"userRole\":\"owner\"},\"project\":[\"1493340729194\"],\"account\":[\"910200869\"]}}",
            "noSignName": "tong cong ty vinaconex"
        },
        {
            "id": 1500801173132,
            "entityStatus": 1,
            "numOfFollower": 0,
            "numOfView": 0,
            "numOfRating": 0,
            "numOfRating1Star": 0,
            "numOfRating2Star": 0,
            "numOfRating3Star": 0,
            "numOfRating4Star": 0,
            "numOfRating5Star": 0,
            "unitRevenue": "VND",
            "unitPrice": "VND",
            "name": "Tong cong ty Vinaconex updated",
            "city": "Hà Nội",
            "country": "Việt Nam",
            "address": "Phạm Hùng - Hà Nội",
            "phone": "0934523 32420",
            "email": "vi@gmail.com",
            "typeOfContractor": [
                "1.1",
                "1.2"
            ],
            "district": "Cầu Giấy",
            "origination": "Việt Nam",
            "foundedYear": 1960,
            "typeCompany": 1,
            "revenue": 123454535,
            "ownerId": 910200869,
            "createdById": 910200869,
            "userEntity": "{\"id\":910200869,\"accountStatus\":null,\"accountType\":null,\"address\":null,\"avatar\":null,\"city\":\"TP Hồ Chí Minh\",\"country\":\"Việt Nam\",\"createdById\":null,\"district\":null,\"email\":\"trinhvietnambk@gmail.com\",\"emailNotifies\":null,\"entityName\":\"account\",\"entityStatus\":\"1\",\"fax\":null,\"isValidatePhone\":null,\"isWaitingResetPassword\":null,\"language\":null,\"lastName\":null,\"location\":null,\"modifiedById\":\"910200869\",\"name\":\"Trịnh Viết Nam\",\"numOfFollower\":null,\"numOfFollowing\":\"2\",\"numOfRating\":null,\"numOfRating1Star\":null,\"numOfRating2Star\":null,\"numOfRating3Star\":null,\"numOfRating4Star\":null,\"numOfRating5Star\":null,\"numOfView\":null,\"parentId\":null,\"parentType\":null,\"paymentMethods\":null,\"phone\":null,\"suggestEmail\":\"trinhvietnambk\",\"taxCode\":null,\"tempPassword\":null,\"timeCreate\":\"2017-04-27T17:27:02.330Z\",\"timeModify\":\"2017-07-22T09:50:26.595Z\",\"type\":null,\"verifies\":null,\"website\":null,\"keyJWT\":1500799400945,\"mapRoles\":{\"910200869\":{\"roleFor\":\"account\",\"userId\":\"910200869\",\"entityId\":\"910200869\",\"createdById\":null,\"entityName\":\"role\",\"entityStatus\":\"1\",\"id\":\"1105731116\",\"modifiedById\":null,\"parentId\":null,\"parentType\":null,\"timeCreate\":\"2017-04-27T17:27:02.313Z\",\"timeModify\":\"2017-04-27T17:27:02.313Z\",\"userCan\":[\"EDIT_ENTITY\",\"MANAGE_ENTITY\",\"VIEW_ENTITY\"],\"userRole\":\"owner\"},\"contractor\":[],\"account\":[\"910200869\"],\"1493340729194\":{\"roleFor\":\"project\",\"userId\":\"910200869\",\"entityId\":\"1493340729194\",\"createdById\":null,\"entityName\":\"role\",\"entityStatus\":\"1\",\"id\":\"-585039974\",\"modifiedById\":null,\"parentId\":null,\"parentType\":null,\"timeCreate\":\"2017-04-28T00:52:09.193Z\",\"timeModify\":\"2017-04-28T00:52:09.193Z\",\"userCan\":[\"EDIT_ENTITY\",\"MANAGE_BIDDING_CATEGORY_PROJECT\",\"MANAGE_ENTITY\",\"VIEW_BIDDING_CATEGORY_PROJECT\",\"VIEW_ENTITY\"],\"userRole\":\"owner\"},\"project\":[\"1493340729194\"]}}",
            "noSignName": "tong cong ty vinaconex",
            "modifiedById": 910200869
        },
        {
            "id": 1497602111843,
            "entityStatus": 1,
            "timeCreate": "2017-06-16T08:35:11.874Z",
            "timeModify": "2017-06-16T08:36:22.799Z",
            "entityName": "contractor",
            "numOfFollower": "1",
            "numOfView": 0,
            "numOfRating": 0,
            "numOfRating1Star": 0,
            "numOfRating2Star": 0,
            "numOfRating3Star": 0,
            "numOfRating4Star": 0,
            "numOfRating5Star": 0,
            "unitRevenue": "VND",
            "unitPrice": "VND",
            "typeCompany": 1,
            "email": "user1@example.com",
            "name": "Học Viên Ngân Hàng",
            "address": "12 Chùa Bộc, Quang Trung",
            "phone": "012-345-6789",
            "country": "Việt Nam",
            "city": "Hà Nội",
            "district": "Hai Bà Trưng",
            "foundedYear": 1961,
            "typeOfContractor": [
                "1.1.1",
                "1.1.2",
                "1.1.3",
                "1.1.4",
                "1.1.5",
                "1.1.6",
                "1.1.10",
                "1.2.2",
                "1.2.6",
                "1.3.4",
                "1.3.7",
                "1.3.8",
                "1.3.9"
            ],
            "qualityManagement": 2,
            "origination": "v, i",
            "language": "en",
            "finances": [
                {
                    "year": 2016,
                    "revenue": 211000000000,
                    "totalAsset": 333000000000,
                    "totalLiabilitie": 4223000000000,
                    "charterCapital": 1223000000000,
                    "currencyUnit": "VND"
                },
                {
                    "year": 2017,
                    "revenue": 233000000000,
                    "totalAsset": 2434000000000,
                    "totalLiabilitie": 24432000000000,
                    "charterCapital": 344000000000,
                    "currencyUnit": "VND"
                }
            ],
            "revenue": 233000000000,
            "ownerId": "-502127578",
            "createdById": null,
            "userEntity": "{\"id\":\"-502127578\",\"accountStatus\":null,\"accountType\":null,\"address\":null,\"avatar\":null,\"city\":\"Hà Nội\",\"country\":\"Việt Nam\",\"createdById\":null,\"district\":null,\"email\":\"user1@example.com\",\"emailNotifies\":null,\"entityName\":\"account\",\"entityStatus\":\"1\",\"fax\":null,\"isValidatePhone\":null,\"isWaitingResetPassword\":null,\"keyJWT\":\"1497597156621\",\"language\":null,\"lastName\":null,\"location\":null,\"modifiedById\":\"-502127578\",\"name\":\"Personal No 1\",\"numOfFollower\":null,\"numOfFollowing\":null,\"numOfRating\":null,\"numOfRating1Star\":null,\"numOfRating2Star\":null,\"numOfRating3Star\":null,\"numOfRating4Star\":null,\"numOfRating5Star\":null,\"numOfView\":null,\"parentId\":null,\"parentType\":null,\"password\":\"123123\",\"paymentMethods\":null,\"phone\":\"123\",\"suggestEmail\":\"user1\",\"taxCode\":null,\"tempPassword\":null,\"timeCreate\":\"2017-04-26T07:32:52.426Z\",\"timeModify\":\"2017-06-16T07:12:36.621Z\",\"type\":null,\"verifies\":null,\"website\":null,\"mapRoles\":{\"-502127578\":{\"roleFor\":\"account\",\"userId\":\"-502127578\",\"entityId\":\"-502127578\",\"createdById\":null,\"entityName\":\"role\",\"entityStatus\":\"1\",\"id\":\"1704883097\",\"modifiedById\":null,\"parentId\":null,\"parentType\":null,\"timeCreate\":\"2017-04-26T07:32:52.420Z\",\"timeModify\":\"2017-04-26T07:32:52.420Z\",\"userCan\":[\"EDIT_ENTITY\",\"MANAGE_ENTITY\",\"VIEW_ENTITY\"],\"userRole\":\"owner\"},\"account\":[\"-502127578\"],\"contractor\":[],\"project\":[]}}",
            "noSignName": "hoc vien ngan hang",
            "modifiedById": "-502127578",
            "logo": "http://hvnh.edu.vn/upload/2306/20130506/logo-hvnh.png",
            "description": "       Dự án lớn",
            "typeOfProject": [
                4,
                6,
                8,
                9
            ],
            "typeOfConstruction": [
                1
            ],
            "typeOfCompany": 1
        }
    ]
}