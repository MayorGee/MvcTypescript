import AbstractView from '../AbstractView.js';

import { Intern } from '../../abstracts/entities/Intern.js';

export default class InternsView extends AbstractView {  
    interns: Intern[] = [];
    template: string = './intern/interns';
    
    getInterns(): Intern[] {
        return this.interns;
    }

    setInterns(interns: Intern[]) {
        this.interns = interns;
    }
}