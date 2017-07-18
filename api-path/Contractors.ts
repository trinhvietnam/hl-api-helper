/**
 * Created by NamTV on 4/2/2017.
 */

import connectRoles from "./ConnectRoles";
import {SessionHelper} from "../../utities/SessionHelper";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {CONTRACTOR} from "../../constants/database/EntityName";
import {AuthorusationUtities} from "./AuthorusationUtities";
var Promise = require("bluebird");
export const PATH = {
    LIST_CONTRACTORS:'/',
    CREATE_CONTRACTOR:'/create',
    UPDATE_CONTRACTOR: '/:id/update',
    DETAIL_CONTRACTOR: '/:id',
    DETAIL_CONTRACTOR_PARAMS: {
        id: 'id'
    },
    UPDATE_CONTRACTOR_PARAMS: {
        id: 'id'
    },
    UPDATE_HOUSELINK_RANKING:'UPDATE_HOUSELINK_RANKING'
};
export const  ACTION = {
    CREATE_CONTRACTOR : 'CREATE_CONTRACTOR',
    UPDATE_CONTRACTOR: 'UPDATE_CONTRACTOR',
    VIEW_CONTRACTOR: 'VIEW_CONTRACTOR',
    UPDATE_HOUSELINK_RANKING: 'UPDATE_HOUSELINK_RANKING'
};

connectRoles.use(ACTION.CREATE_CONTRACTOR,PATH.CREATE_CONTRACTOR, function (req) {
    return new Promise(function (resolve, reject) {
        console.log('55555555555555555555555555');
        if (SessionHelper.isAuthen(req)) {
            resolve(true);
        }else{
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN,null,req);
            resolve(false);
        }
    });

});

connectRoles.use(ACTION.VIEW_CONTRACTOR, PATH.DETAIL_CONTRACTOR, function (req) {
    var contractorId = req.params[PATH.DETAIL_CONTRACTOR_PARAMS.id];
    var user = SessionHelper.getUser(req);
    var userId = null;
    if(user){
        userId = user.id;
    }
    console.log(contractorId,userId);
    return AuthorusationUtities.canViewEntity(userId,contractorId,CONTRACTOR,req);
});
connectRoles.use(ACTION.UPDATE_CONTRACTOR, PATH.UPDATE_CONTRACTOR, function (req) {
    var contractorId = req.params[PATH.DETAIL_CONTRACTOR_PARAMS.id];
    var userId = SessionHelper.getUserId(req);
    return AuthorusationUtities.canUpdateEntity(userId,contractorId,CONTRACTOR,req);
});
connectRoles.use(ACTION.UPDATE_HOUSELINK_RANKING, PATH.UPDATE_HOUSELINK_RANKING, function (req) {
    var contractorId = req.params[PATH.DETAIL_CONTRACTOR_PARAMS.id];
    var userId = SessionHelper.getUser(req).id;
    return AuthorusationUtities.canUpdateEntity(userId,contractorId,CONTRACTOR,req);
});


export const contractorRoles = connectRoles;
