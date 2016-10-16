import axios from 'axios';
import CommonValidator from '../common/CommonValidator';

class BaseService {
    constructor() {
        this.commonValidator = new CommonValidator();
        this.host = window.location.hostname;
        this.axios = axios.create({
            baseURL: "http://" + this.host + ":5000/api",
        });
    }
}

export default BaseService;