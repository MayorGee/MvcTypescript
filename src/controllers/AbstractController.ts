import alert from 'alert';
import { randomBytes } from 'crypto';
import { NextFunction, Request, Response } from 'express';

import { IController, ErrorResponse, RequestMethod, Role } from '../abstracts/Common.js';
import AbstractView from '../views/AbstractView.js';

export default abstract class AbstractController implements IController {
    public execute(req: Request, res: Response, next: NextFunction) {
        const requestMethod = req.method.toLowerCase();

        if (requestMethod === RequestMethod.get) {
            this.setCsrfToken(req);

            return this.handleGet(req, res, next);
        }
        
        if (requestMethod === RequestMethod.post) {
            if(!this.isCsrfTokenValid(req)) {
                return this.redirectToHome(res, 500, 'There was a problem getting your Csrf Token');
            }

            return this.handlePost(req, res, next);
        }
    }

    protected abstract handleGet(req: Request, res: Response, next: NextFunction): void

    protected handlePost(req: Request, res: Response, next: NextFunction): void { }

    protected isInternLoggedIn(req: Request): boolean {
        return !!req.session.internId;
    }

    protected isMentorLoggedIn(req: Request): boolean {
        return !!req.session.mentorId;
    }

    protected isRoleMentor(req: Request): boolean {
        return req.session.role === Role.mentor;
    }

    protected redirect({ 
        res,
        page, 
        responseCode = 401,
        errorMessage = 'You are not logged in (as intern)' 
    }: ErrorResponse) {
        alert(errorMessage);
        
        this.sendStatusAndRedirect(res, responseCode, page);
    }

    protected sendStatusAndRedirect(res: Response, responseCode: number, page: string) {  // Response didn't work here too
        res.status(responseCode).redirect(page);
    }

    protected redirectToHome(res: Response, responseCode: number = 501, errorMessage: string = 'You are not a mentor') {
        alert(errorMessage);

        this.sendStatusAndRedirect(res, responseCode, '/');
    }

    protected sendError(res: Response, errorCode: number, errorMessage: string): Response {
        return res.status(errorCode).send(errorMessage)
    }
    
    protected renderPage(req: Request, res: Response, viewClass: AbstractView) {
        res.render(
            viewClass.getTemplate(), 
            { 
                'this': viewClass,
                csrfToken: req.session.csrfToken 
            }
        );
    }
    
    protected isNumber(variable: any): variable is number {
        return typeof variable !== 'string' && variable > 0;
    }

    protected handleIdError(id: any, res: Response) {
        let errorText = id ? 'Invalid id entered' : 'No Id entered';

        this.sendError(res, 500, errorText);
    }

    protected setCsrfToken(req: Request) {
        if(!(req.session.csrfToken)) {
            req.session.csrfToken = randomBytes(50).toString('hex');
        }
    }

    protected isCsrfTokenValid(req: Request): boolean | undefined | string {
        return (req.session.csrfToken && req.session.csrfToken === req.body.csrfToken);
    }
}