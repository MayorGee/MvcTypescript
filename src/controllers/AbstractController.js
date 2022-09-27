import alert from 'alert';

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

    isInternLoggedIn(req) {
        return req.session.internId;
    }

    isMentorLoggedIn(req) {
        return req.session.mentorId;
    }

    isRoleMentor(req) {
        return req.session.role === 'Mentor';
    }

    async redirect({ 
        res,
        page, 
        responseCode = 401,
        errorMessage = 'You are not a Mentor' 
    }) {
        alert(errorMessage);
        
        setTimeout(() => {
            return res.status(responseCode).redirect(page)
        }, 3000); 
    }

    sendError(res, errorCode, errorMessage) {
        return res.status(errorCode).send(errorMessage)
    }
    
    renderPage(res, viewClass) {
        res.render(viewClass.getTemplate(), { 'this': viewClass });
    }
    
    isNumber(n) {
        const num = parseInt(n);
        return (typeof num === 'number' && num > 0);    
    }

    handleIdError(id, res) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        this.sendError(res, 500, errorText);
    }
}