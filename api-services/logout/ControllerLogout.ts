import {ResponseHelper} from "../../utities/ResponseHelper";
var express = require('express');
var router = express.Router();
var passport = require('passport');
var validate = require('express-validation');
import {PATH, ACTION, logoutRoles} from './AuthorisatorLogout';
import {VALIDATION_LOGOUT} from "./ValidatorLogout";
import {ModelUser} from "../user/ModelUser";
import {SessionHelper} from "../../utities/SessionHelper";
import {UserFields} from "../user/UserFields";
var mUser = new ModelUser();
router.post(PATH.LOGOUT, logoutRoles.can(ACTION.LOGOUT), validate(VALIDATION_LOGOUT), function (req, res, next) {
    var userId = SessionHelper.getUserId(req);
    req.session.destroy(function () {
        var properties = {};
        properties[UserFields.keyJWT] = null;
        mUser.update(userId, properties, userId);
        ResponseHelper.json(req, res, null, null);
    });
});
module.exports = router;
