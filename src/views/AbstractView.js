export default class AbstractView {
    template = '';

    getTemplate() {
        return this.template;
    }

    setTemplate(template) {
        this.template = template;
    }
}