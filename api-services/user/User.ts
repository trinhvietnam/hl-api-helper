import {MathHelper} from "../../utities/MathHelper";
import {RECORD_STATUS} from "../../databases/Configs";
/**
 * Created by nam on 3/11/2017.
 */
export class User{
    entityName: string;// It exactly name table store this entity
    id: number = MathHelper.genIdInSystem();
    entityStatus: number = RECORD_STATUS.PUBLIC;
    isInitedRegisterInfo: boolean;
    /*public, draft, deleted, deactive*/
    /*Defaults ISO formats supported by ElasticSearch*/
    timeCreate: Date = new Date();
    timeModify: Date = new Date();
    modifiedById: number;
    createdById: number;
    type: String;// project_owner, contractor,supplier
    name: String;
    avatar: String;
    lastName: String;
    taxCode: String; // Mã số
    address: String;
    location: Object;
    city: String;
    country: String;
    district: String;
    phone: String;
    fax: String;
    website: String;
    email: String;
    suggestEmail:Object;
    isValidatePhone: boolean;
    language: String;
    emailNotifies: Array<Object>; //Các thiết lập đối với Email
    accountStatus: String; //VIP or FREE
    password: String; //MD5 password text
    paymentMethods: Array<String>;
    verifies: Array<Object>;//
    accountType: String; //Chủ dự án || Nhà thầu || Cả 2
    keyJWT: number;
    mapRoles:Object;
    companyTaxId:string;
    companyName:string;



    public entityMappingElasticSearch() {
        var body = {};
        body[this.entityName] = {
            properties: {
                id: {"type": "long", "index": "not_analyzed"},
                entityStatus: {"type": "integer", "index": "not_analyzed"},
                parentId: {"type": "long", "index": "not_analyzed"},
                timeCreate: {"type": "date", "index": "not_analyzed"},
                timeModify: {"type": "date", "index": "not_analyzed"},
                createdById: {"type": "date", "index": "not_analyzed"},
                parentType: {"type": "keyword", "index": "not_analyzed"}
            }
        };
        var properties = body[this.entityName].properties;
        properties.type = {"type": "keyword", "index": "not_analyzed"};
        properties.avatar = {"type": "keyword", "index": "not_analyzed"};
        properties.name = {"type": "text"};
        properties.lastName = {"type": "keyword"};
        properties.taxCode = {"type": "keyword", "index": "not_analyzed"};
        properties.address = {"type": "text"};
        properties.location = {"type": "geo_point"};
        properties.city = {"type": "keyword","index": "not_analyzed"};
        properties.country = {"type": "keyword","index": "not_analyzed"};
        properties.district = {"type": "keyword","index": "not_analyzed"};
        properties.phone = {"type": "keyword","index": "not_analyzed"};
        properties.fax = {"type": "keyword","index": "not_analyzed"};
        properties.website = {"type": "keyword","index": "not_analyzed"};
        properties.email = {"type": "keyword","index": "not_analyzed"};
        properties.suggestEmail =  {
            type: "completion"
        }
        properties.isValidatePhone = {"type": "boolean"};
        properties.language = {"type": "keyword","index": "not_analyzed"};
        // emailNotifies= {"type":"array"};
        properties.accountStatus = {"type": "keyword","index": "not_analyzed"};
        properties.password = {"type": "keyword","index": "not_analyzed"};
        // paymentMethods: {"type":"array"},
        // verifies: {"type":"array"},
        // accountType: {"type":"array"}
        return body;
    }

    public mapping(){
        var json = {
            "mappings": {
                "tweet": {
                    "properties": {
                        "userId": {
                            "type": "keyword",
                            "index": "not_analyzed"
                        },
                        "shortId":{
                            "type": "keyword",
                            "index": "not_analyzed"
                        },

                    }
                }
            }
        }
    }

}
