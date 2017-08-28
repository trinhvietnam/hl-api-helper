/**
 * Created by nam on 6/18/2017.
 */
export const UserFields = {
    type : 'type',// User hoặc công ty
    name : 'name',
    avatar : 'avatar',
    lastName : 'lastName',
    taxCode : 'taxCode', // Mã số
    address : 'address',
    location : 'location',
    city : 'city',
    country : 'country',
    district : 'district',
    phone : 'phone',
    fax : 'fax',
    website : 'website',
    email : 'email',
    suggestEmail : 'suggestEmail',
    isValidatePhone : 'isValidatePhone',
    language : 'language',
    emailNotifies : 'emailNotifies', //Các thiết lập đối với Email
    accountStatus : 'accountStatus', //VIP or FREE
    password : 'password', //MD5 password text
    tempPassword : 'tempPassword', //MD5 password text
    isWaitingResetPassword : 'isWaitingResetPassword', //MD5 password text
    paymentMethods : 'paymentMethods',
    verifies : 'verifies',//
    accountType : 'accountType', //Chủ dự án || Nhà thầu || Cả 2
    keyJWT : 'keyJWT',
    mapRoles : 'mapRoles',
    entityName : 'entityName',// It exactly name table store this entity
    id : 'id',
    entityStatus : 'entityStatus',
    /*public, draft, deleted, deactive*/
    timeCreate : 'timeCreate',
    /*Defaults ISO formats supported by ElasticSearch*/
    timeModify : 'timeModify',
    modifiedById : 'modifiedById',
    createdById : 'createdById',
    isInitedRegisterInfo:'isInitedRegisterInfo',
    companyName:'companyName',
    companyTaxId:'companyTaxId'
}
