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
        errorMessage = 'You are not logged in (as intern)' 
    }) {
        alert(errorMessage);
        
        await this.sendStatusAndRedirect(res, responseCode, page);
    }

    async redirectToHome(res) {
        alert('You are not a mentor');

        await this.sendStatusAndRedirect(res, 401, '/');
    }    
    
    delay (duration) {
        return new Promise(resolve => setTimeout(resolve, duration));
    }
  
    async sendStatusAndRedirect() {
        await this.delay(3000);
        return res.status(responseCode).redirect(page) 
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