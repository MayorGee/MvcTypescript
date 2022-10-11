import AbstractView from '../AbstractView.js';

import { Intern } from '../../abstracts/entities/Intern.js';
import { IView } from '../../abstracts/Common.js';

export default class InternsView extends AbstractView implements IView {  
    private interns: Intern[] = [];
    public template = './intern/interns';
    
    public getInterns(): Intern[] {
        return this.interns;
    }

    public setInterns(interns: Intern[]) {
        this.interns = interns;
    }
}