class AppService {
    wsToken = null;
    static _instance;

    static getInstance() {
        if (!AppService._instance) {
            AppService._instance = new AppService();
        }

        return AppService._instance;
    }

    get token() {
        return this._token;
    }




}

export default AppService.getInstance();
