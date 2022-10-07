// @ts-ignore
import alert from 'alert';
import { randomBytes } from 'crypto';

import { IController, IStringIndex, RequestMethod } from '../abstracts/Common.js';

export default abstract class AbstractController implements IController {
    resource: any;

    execute(req: any, res: any, next: any) {
        const reqestMethod = req.method.toLowerCase();

        if (reqestMethod === RequestMethod.get) {
            this.setCsrfToken(req);

            return this.handleGet(req, res, next);
        }
        
        if (reqestMethod === RequestMethod.post) {
            if(!this.isCsrfTokenValid(req)) {
                return this.redirectToHome(res, 500, 'There was a problem getting your Csrf Token');
            }

            return this.handlePost(req, res, next);
        }
    }

    abstract handleGet(req: any, res: any, next: any): void

    handlePost(req: any, res: any, next: any) { }

    isInternLoggedIn(req: any): boolean {
        return !!req.session.internId;
    }

    isMentorLoggedIn(req: any) {
        return req.session.mentorId;
    }

    isRoleMentor(req: any) {
        return req.session.role === 'Mentor';
    }

    redirect({ 
        res,
        page, 
        responseCode = 401,
        errorMessage = 'You are not logged in (as intern)' 
    }: IStringIndex ) {
        alert(errorMessage);
        
        this.sendStatusAndRedirect(res, responseCode, page);
    }

    sendStatusAndRedirect(res: any, responseCode: number, page: string) {
        return res.status(responseCode).redirect(page); 
    }

    async redirectToHome(res: any, responseCode?: number, errorMessage?: string) {
        alert(errorMessage ?? 'You are not a mentor');

        if (responseCode) {
            return res.status(responseCode).redirect('/'); 
        }
        
        return res.status(501).redirect('/'); 
    }

    sendError(res: any, errorCode: number, errorMessage: string) {
        return res.status(errorCode).send(errorMessage)
    }
    
    renderPage(req: any, res: any, viewClass: any) {
        res.render(
            viewClass.getTemplate(), 
            { 
                'this': viewClass,
                csrfToken: req.session.csrfToken 
            }
        );
    }
    
    isNumber(n: number | string): boolean {

        if (typeof n === 'string') {
            return false;
        }
        
        return (n > 0);    
    }

    handleIdError(id: number, res: any) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        this.sendError(res, 500, errorText);
    }

    setCsrfToken(req: any) {
        if(!(req.session.csrfToken)) {
            req.session.csrfToken = randomBytes(50).toString('hex');
        }
    }

    isCsrfTokenValid(req: any) {
        return (req.session.csrfToken && req.session.csrfToken === req.body.csrfToken);
    }
}