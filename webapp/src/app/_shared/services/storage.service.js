import { appConstants } from "../config/app.config";

class StorageService {
    
    static _instance;
    // eslint-disable-next-line no-useless-constructor
    constructor() { }


    static getInstance() {
        if (!StorageService._instance) {
            StorageService._instance = new StorageService();
        }
        return StorageService._instance;
    }


    getItem(key, storageType = appConstants.keys.storageType) {
        // eslint-disable-next-line default-case
        switch (storageType) {
            case appConstants.storageTypes.local:
                return JSON.parse(localStorage.getItem(key) || '{}');

            case appConstants.storageTypes.session:
                return JSON.parse(sessionStorage.getItem(key) || '{}');
        }
    }

    setItem(key, data, storageType = appConstants.keys.storageType) {
        // eslint-disable-next-line default-case
        switch (storageType) {
            case appConstants.storageTypes.local:
                localStorage.setItem(key, JSON.stringify(data));
                break;

            case appConstants.storageTypes.session:
                sessionStorage.setItem(key, JSON.stringify(data));
                break;
        }
    }

    removeItem(key, storageType = appConstants.keys.storageType) {
        // eslint-disable-next-line default-case
        switch (storageType) {
            case appConstants.storageTypes.local:
                localStorage.removeItem(key);
                break;

            case appConstants.storageTypes.session:
                sessionStorage.removeItem(key);
                break;

        }
    }

    clearAll(storageType = appConstants.keys.storageType) {
        // eslint-disable-next-line default-case
        switch (storageType) {
            case appConstants.storageTypes.local:
                localStorage.clear();
                break;

            case appConstants.storageTypes.session:
                sessionStorage.clear();
                break;
        }
    }
}

export default StorageService.getInstance();
