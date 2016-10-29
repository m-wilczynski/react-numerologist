import BaseService from './BaseService';

class DefinitionsService extends BaseService {
    constructor() {
        super();
        this.apiPath = "/definitions/";
    }

    getDefinitionByBirthdate(birthDate, successCallback) {
        if (!this.commonValidator.isValidDate(birthDate))
        {
            throw new Error("Invalid date passed.");
        }
        return this.axios({
            method: "get",
            url: this.apiPath + "byBirthdate/" + birthDate
        })
        .then(function(response) {
            successCallback(response);  
        })
        .catch(function(error) {
            console.log(error);
        });
    }

}

export default DefinitionsService;