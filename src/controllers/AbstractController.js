export default class AbstractController {
    async execute(req, res) {
        if (req.method === 'GET') {
            this.handleGet(req, res);
        } else if (req.method === 'POST') {
            this.handlePost(req, res);
        }
    }

    handleGet() { }

    handlePost() { }
    
    renderPage(res, viewClass) {
        res.render(viewClass.getTemplate(), { 'this': viewClass });
    }
    
    async isIdInvalid(id) {
        return (/\d+/.test(id) || id) ? false : true;
    }

    async handleIdError(id, res) {
        const errorText = id ? 'Invalid id entered' : 'No id entered';
        
        res.status(500).send(errorText);
    }
}