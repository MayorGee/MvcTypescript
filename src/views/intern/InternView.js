import AbstractView from "../AbstractView.js";

export default class InternView extends AbstractView {
    intern = null;
    
    setIntern(intern) {
        this.intern = intern;
    }
    
    getIntern() {
        return this.intern;
    }
}