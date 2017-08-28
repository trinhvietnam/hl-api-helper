import {MathHelper} from "../../utities/MathHelper";
import {RECORD_STATUS} from "../../databases/Configs";
import {COMPANY_INFO} from "../../constants/database/EntityName";
/**
 * Created by nam on 3/11/2017.
 */
export class CompanyInfo{
    entityName: string = COMPANY_INFO;// It exactly name table store this entity
    id: number;
    taxId: string;
    name: string;
    noSignName: string;
    address: string;
    city: string;
    country: string;
    district: string;
    village: string;
    foundedDate: string;
    public elasticSearchMapping(){
        var json = {
            "companyInfo": {
                "properties": {
                    "taxId": {
                        "type":     "string",
                        "analyzer": "autocomplete"
                    },
                    "name": {
                        "type":     "text"
                    },
                    "noSignName": {
                        "type":     "text"
                    },
                    "address": {
                        "type":     "text"
                    },
                    "city": {
                        "type":     "keyword"
                    },
                    "country": {
                        "type":     "keyword"
                    }
                    ,
                    "district": {
                        "type":     "keyword"
                    }
                    ,
                    "village": {
                        "type":     "keyword"
                    },
                    "id": {
                        "type":     "long"
                    }
                }
            }
        }
    }
}
