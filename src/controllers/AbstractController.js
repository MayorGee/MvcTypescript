export default class AbstractController {
    async execute(req, res) {
        if (req.method === 'GET') {
            this.handleGet(req, res);
        } else if (req.method === 'POST') {
            this.handlePost(req, res);
        }
    }

    isInternLoggedIn(req) {
        return req.session.internId;
    }

    isRoleAdmin(req) {
        return req.session.role === 'Admin';
    }

    redirectToLogin(res) {
        return res.status(401).redirect('/login');
    }

    redirectToHome(res) {
        return res.status(401).redirect('/');
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