import axios from 'axios';
import { toast } from 'react-toastify';
import { appConstants } from '../config/app.config';
import { StorageService } from '../services';



const options = {}

class NetworkService {
    static _instance;
    // eslint-disable-next-line no-useless-constructor
    constructor() { }


    static getInstance() {
        if (!NetworkService._instance) {
            NetworkService._instance = new NetworkService();
        }
        return NetworkService._instance;
    }


    get(url, params = null, config = {}) {
        const axiosConfig = this._prepareRequest(url, config);
        axiosConfig.method = 'GET';
        if (params !== null) {
            axiosConfig.params = params;
        }
        return this._getResponse(axiosConfig);
    }

    post(url, data, config = options) {
        const axiosConfig = this._prepareRequest(url, config);
        axiosConfig.method = 'POST';
        axiosConfig.data = data;
        return this._getResponse(axiosConfig);
    }

    put(url, data, config = {}) {
        const axiosConfig = this._prepareRequest(url, config);
        axiosConfig.method = 'PUT';
        axiosConfig.data = data;
        return this._getResponse(axiosConfig);
    }

    delete(url, params = null, config = {}) {
        const axiosConfig = this._prepareRequest(url, config);
        axiosConfig.method = 'DELETE';
        if (params !== null) {
            axiosConfig.params = params;
        }
        return this._getResponse(axiosConfig);
    }

    _prepareRequest(url, config) {
        let token = StorageService.getItem('token', appConstants.storageTypes.local);
        token = typeof(token) === 'string' ? `Bearer ${token}` : `Bearer`;
        const axiosConfig = Object.assign({ 
            url: url, 
            headers: {} 
        }, config);

        if (token !== null) {
            Object.assign(axiosConfig.headers, {
                'Authorization': token
            });
        }

        return axiosConfig;
    }

    _getResponse(config) {
        return axios(config)
            .then((response) => {
                return response.data;
            })
            .catch((axiosError) => {
                // handle the response error
                const error = this._parseError(axiosError);
                toast.error(error.message);
                return Promise.reject(error);
            });
    }

    _parseError(error) {
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            return {
                "status": error.response.status,
                "message": error.response.data.error ? error.response.data.error : error.message
            }
        } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             */
            return {
                "status": null,
                "message": error.message
            }
        } else {
            // Something happened in setting up the request and triggered an Error
            return {
                "status": null,
                "message": error.message
            }
        }
    }
}

export default NetworkService.getInstance();
