import AbstractView from "../AbstractView.js";

export default class InternView extends AbstractView {
    intern = null;
    
    setIntern(intern) {
        this.intern = intern;
        return this;
    }
    
    getIntern() {
        return this.intern;
    }
}