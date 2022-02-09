class AppStorageTypes {
    local = 'localStorage';
    session = 'sessionStorage';
}

class AppKeys {
    user = 'user_id';
    token = 'accessToken';
    storageType = 'sessionStorage';
    state = 'state';
}

class AppUrls {

    /* Local Docker*/
    protocol = 'http';
    APIServer = 'localhost:8000';
    baseUrl = `${this.protocol}://${this.APIServer}`;
}

class SocketRoomNames {
    fileUpload= 'upload';
    modelRun= 'modelRun';
}

/**
 * Application constants
 */
class AppConstants {
     static _instance;

     keys = new AppKeys();
     urls = new AppUrls();
     storageTypes = new AppStorageTypes();
     socketRoomNames = new SocketRoomNames();

     static getInstance() {
        if (!AppConstants._instance) {
            AppConstants._instance = new AppConstants();
        }

        return AppConstants._instance;
    }
}

export const appConstants = AppConstants.getInstance();