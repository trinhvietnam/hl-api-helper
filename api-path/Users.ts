/**
 * Created by NamTV on 3/15/2017.
 */

import connectRoles from "./ConnectRoles";
var Promise = require("bluebird");
export const PATH = {
    LIST_USERS:'/',
    EDIT_USER:'/:userId/edit',
    EDIT_USER_PARAMS:{
        userId:'userId'
    }
};
export const  ACTION = {
    EDIT_USER : 'EDIT USER'
};

connectRoles.use(ACTION.EDIT_USER,PATH.EDIT_USER, function (req) {
    return new Promise(function (resolve, reject) {
        if (req.params[PATH.EDIT_USER_PARAMS.userId] === req.user.id) {
            resolve(true);
        }else{
            resolve(null);
        }
    });

});

export const userRoles = connectRoles;
