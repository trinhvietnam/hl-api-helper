import {ResponseHelper} from "../../utities/ResponseHelper";
import {ModelUser} from "../user/ModelUser";
import {PATH,ACTION, loginRoles} from "./AuthorisatorLogin";
import {VALIDATION_LOGIN} from "./ValidatorLogin";
import {User} from "../user/User";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {UserFields} from "../user/UserFields";
import {RoleManager} from "../../manager/RoleManager";
import {SessionHelper} from "../../utities/SessionHelper";
import {SocketServer} from "../../socket/SocketServer";
import {BusinessEvent} from "../../constants/eventnames/BusinessEvent";
var express = require('express');
var router = express.Router();
var passport = require('passport');
var validate = require('express-validation');
var mUser = new ModelUser();
router.post(PATH.LOGIN, validate(VALIDATION_LOGIN), loginRoles.can(ACTION.LOGIN), function (req, res, next) {
    passport.authenticate('local', function (err, user: User, info) {
        console.log('333333333333333333333333333333333333', err, user, info);
        if (err) {
            return ResponseHelper.json(req, res, {ec: ErrorEC.LOGIN_FAIL}, null);
            // return next(err);
            // return next(err);
        }
        if (!user) {
            var error = ErrorHelper.error(ErrorEC.LOGIN_FAIL, info, req);
            ResponseHelper.json(req, res, error, null);
            return;
        }

        if (!user[UserFields.keyJWT]) {
            user[UserFields.keyJWT] = new Date().getTime();
            var properties = {};
            properties[UserFields.keyJWT] = user[UserFields.keyJWT];
            mUser.update(user.id, properties, user.id);
        }
        RoleManager.Instance.getFullRolesOfUserOnAllEntity(user.id)
            .then((mapRoles) => {
                console.log('666666666666666666666666666666666666');
                user.mapRoles = mapRoles;
                SessionHelper.setUser(user, req);
                ResponseHelper.json(req, res, null, JSON.parse(JSON.stringify([user, SessionHelper.getTokenJWTObject(user)])));
                SocketServer.Instance.onWebServerEvent(BusinessEvent.ON_LOGIN, user);
            });

    })(req, res, next);
});
module.exports = router;
