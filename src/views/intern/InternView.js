import AbstractView from "../AbstractView.js";

export default class InternView extends AbstractView {
    intern = null;

    constructor() {
        super();

        this.template = './intern/intern';
    }
    
    setIntern(intern) {
        this.intern = intern;
    }
    
    getIntern() {
        return this.intern;
    }
}