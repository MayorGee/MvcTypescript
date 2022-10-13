// @ts-ignore
import alert from 'alert';
import { randomBytes } from 'crypto';

import { IController, ErrorResponse, RequestMethod } from '../abstracts/Common.js';

export default abstract class AbstractController implements IController {
    public execute(req: any, res: any, next: any) {
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

    protected abstract handleGet(req: any, res: any, next: any): void

    protected handlePost(req: any, res: any, next: any): void { }

    protected isInternLoggedIn(req: any): boolean {
        return !!req.session.internId;
    }

    protected isMentorLoggedIn(req: any): boolean {
        return !!req.session.mentorId;
    }

    protected isRoleMentor(req: any): boolean {
        return req.session.role === 'Mentor';
    }

    protected redirect({ 
        res,
        page, 
        responseCode = 401,
        errorMessage = 'You are not logged in (as intern)' 
    }: ErrorResponse ) {
        alert(errorMessage);
        
        return this.sendStatusAndRedirect(res, responseCode, page);
    }

    protected sendStatusAndRedirect(res: any, responseCode: number, page: string) {
        return res.status(responseCode).redirect(page); 
    }

    protected redirectToHome(res: any, responseCode: number = 501, errorMessage: string = 'You are not a mentor'): any {
        alert(errorMessage);

        return this.sendStatusAndRedirect(res, responseCode, '/');
    }

    protected sendError(res: any, errorCode: number, errorMessage: string) {
        return res.status(errorCode).send(errorMessage)
    }
    
    protected renderPage(req: any, res: any, viewClass: any) {
        res.render(
            viewClass.getTemplate(), 
            { 
                'this': viewClass,
                csrfToken: req.session.csrfToken 
            }
        );
    }
    
    protected isNumber(n: number | string): boolean {
        return typeof n !== 'string' && n > 0;
    }

    protected handleIdError(id: number, res: any) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        this.sendError(res, 500, errorText);
    }

    protected setCsrfToken(req: any) {
        if(!(req.session.csrfToken)) {
            req.session.csrfToken = randomBytes(50).toString('hex');
        }
    }

    protected isCsrfTokenValid(req: any): boolean {
        return (req.session.csrfToken && req.session.csrfToken === req.body.csrfToken);
    }
}