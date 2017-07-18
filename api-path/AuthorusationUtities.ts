import {ROLE} from "../../constants/database/EntityName";
import {ErrorHelper} from "../../utities/ErrorHelper";
import {ErrorEC} from "../../constants/errors/ErrorEC";
import {Logger} from "../../utities/Logger";
import {FactoryModel} from "../../models/FactoryModel";
var Promise = require("bluebird");
/**
 * Created by NamTV on 4/5/2017.
 */
var log = Logger.getNewLogger(__filename);
export class AuthorusationUtities{
    static canViewEntity(userId, entityId, entityName, req):Promise<any>{
        var mEntity = FactoryModel.getModel(entityName);
        return new Promise(function (resolve, reject) {
            mEntity.checkCanView(userId, entityId)
                .then(([isCanView, role,entity])=>{
                    req[ROLE] = role;
                    req[entityName] = entity;
                    if(isCanView){
                        resolve(isCanView);
                    }else{
                        resolve(null);
                    }})
                .catch((error)=>{
                    ErrorHelper.setRoleError(ErrorEC.NOT_EXIST_ENTITY,error,req);
                })

            })
    }
    static canUpdateEntity(userId, entityId, entityName, req):Promise<any> {
        var mEntity = FactoryModel.getModel(entityName);
        return new Promise(function (resolve, reject) {

            if (!userId) {
                ErrorHelper.setRoleError(ErrorEC.NOT_AUTHEN, null, req);
                resolve(false);
            } else {
                mEntity.checkCanUpdate(userId, entityId).then(([isCanUpdate, role]) => {
                    req[ROLE] = role;
                    if (isCanUpdate) {
                        resolve(isCanUpdate);
                    } else {
                        resolve(null);
                    }
                }).catch((error) => {
                    ErrorHelper.setRoleError(ErrorEC.ACCESS_DENIED, error, req);
                })
            }
        });
    }
}