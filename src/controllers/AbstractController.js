import alert from 'alert';
import { randomBytes } from 'crypto';

export default class AbstractController {
    async execute(req, res) {
        if (req.method === 'GET') {
            this.setCsrfToken(req);

            this.handleGet(req, res);
        } else if (req.method === 'POST') {
            if(!this.isCsrfTokenValid(req)) {
                return this.redirectToHome(res, 500, 'There was a problem getting your Csrf Token');
            }

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

    async redirectToHome(res, responseCode, errorMessage) {
        alert(errorMessage ?? 'You are not a mentor');

        await this.sendStatusAndRedirawait
        return res.status(responseCode).redirect('/'); 
    }

    sendError(res, errorCode, errorMessage) {
        return res.status(errorCode).send(errorMessage)
    }
    
    renderPage(req, res, viewClass) {
        res.render(
            viewClass.getTemplate(), 
            { 
                'this': viewClass,
                csrfToken: req.session.csrfToken 
            }
        );
    }
    
    isNumber(n) {
        const num = parseInt(n);
        return (typeof num === 'number' && num > 0);    
    }

    handleIdError(id, res) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        this.sendError(res, 500, errorText);
    }

    setCsrfToken(req) {
        if(!(req.session.csrfToken)) {
            req.session.csrfToken = randomBytes(50).toString('hex');
        }
    }

    isCsrfTokenValid(req) {
        return (req.session.csrfToken && req.session.csrfToken === req.body.csrfToken);
    }
}