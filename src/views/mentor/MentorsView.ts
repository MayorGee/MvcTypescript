import AbstractView from '../AbstractView.js';

import { Mentor } from '../../abstracts/entities/Mentor.js';
import { IView } from '../../abstracts/Contract.js';
import CalculateExecutionTime from '../../decorators/CalculateExecusionTime.js';

export default class MentorsView extends AbstractView implements IView {
    private mentors: Mentor[] = [];
    protected template = './mentor/mentors';

    @CalculateExecutionTime()
    public getMentors(): Mentor[] {
        return this.mentors;
    }

    public setMentors(mentors: Mentor[]): this {
        this.mentors = mentors;
        return this;
    }
}