export default class AbstractController {
    async execute(req, res) {
        if(req.method === 'GET') {
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
    
    async validateId(id, res) {
        if(!id) {
            res.status(500).send('No id entered');
            return false;
        }else if (!(/\d+/.test(id))) {
            res.status(500).send('Invalid id entered');
            return false;
        }else {
            return true;
        }   
    }
}