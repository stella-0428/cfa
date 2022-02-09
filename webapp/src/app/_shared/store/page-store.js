import { makeObservable, observable, action, computed } from "mobx";

class PageStore {

    @observable pageIndex = 1;

    constructor() {
        makeObservable(this)
    }

    @action setPageIndex = (pI) => {
        this.pageIndex = pI;
    }

    @computed get getPageIndex() {
        return this.pageIndex;
    }

}


const pageStore = new PageStore();
export default pageStore;