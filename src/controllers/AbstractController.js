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
    
    isIdNumber(id) {
        return (typeof id === 'number' && id > 0);   
    }

    handleIdError(id, res) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        res.status(500).send(errorText);
    }
}