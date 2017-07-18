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
    UPDATE_CONTACT: '/contact/contact',
    UPDATE_CONTACT_BODY: {
        ownerId:'ownerid',
        ownerType:'ownerType',
        contact:'contact',
    },
};
export const ACTION = {
    UPDATE_CONTACT: 'UPDATE_CONTACT',
};

connectRoles.use(ACTION.UPDATE_CONTACT, PATH.UPDATE_CONTACT, function (req) {
    return new Promise(function (resolve, reject) {
        if (SessionHelper.isAuthen(req)) {
            var contractorId = req.body[PATH.UPDATE_CONTACT_BODY.ownerId];
            var userId = SessionHelper.getUser(req).id;
            return AuthorusationUtities.canUpdateEntity(userId,contractorId,CONTRACTOR,req);
        } else {
            ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null,req);
            resolve(false);
        }
    });
});

export const metaInfoRoles = connectRoles;
