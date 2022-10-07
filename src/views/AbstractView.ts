export default class AbstractView {
    template: string = '';

    getTemplate(): string {
        return this.template;
    }

    setTemplate(template: string) {
        this.template = template;
        return this;
    }
}