import { observable, action, computed } from "mobx";

class UserStore {

    @observable email = '';

    @action setUserCaseCode = (caseCode) => {
        this.caseCode = caseCode;
    }

    @computed get getEmail() {
        return this.email;
    }

}


const userStore = new UserStore();
export default userStore;