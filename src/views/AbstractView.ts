import { IView } from "../abstracts/Common";

export default class AbstractView implements IView {
    protected template = '';

    public getTemplate(): string {
        return this.template;
    }

    public setTemplate(template: string): this {
        this.template = template;
        return this;
    }
}