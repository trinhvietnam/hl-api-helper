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