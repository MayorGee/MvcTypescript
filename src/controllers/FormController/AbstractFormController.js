
export default class AbstractFormController {
    async execute(req, res) {
        if(req.method === 'GET') {
            this.handleGet(res);
        } else if (req.method === 'POST') {
            this.handlePost(req, res);
        }
    }

    handleGet() { }

    handlePost() { }
}