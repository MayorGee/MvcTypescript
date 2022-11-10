import AbstractView from '../../views/AbstractView.js';

import Controller from '../Controller.js';
import { IController, WebErrorResponse, Role, RequestMethod } from '../../abstracts/Common.js';

import alert from 'alert';
import { randomBytes } from 'crypto';

import { NextFunction, Request, Response } from 'express';

export default abstract class WebController extends Controller implements IController {
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
        errorCode = 401,
        errorMessage = 'You are not logged in (as intern)' 
    }: WebErrorResponse) {
        alert(errorMessage);
        
        this.sendStatusAndRedirect(res, errorCode, page);
    }

    protected sendStatusAndRedirect(res: Response, errorCode: number, page: string) {  // Response didn't work here too
        res.status(errorCode).redirect(page);
    }

    protected redirectToHome(res: Response, errorCode: number = 501, errorMessage: string = 'You are not a mentor') {
        alert(errorMessage);

        this.sendStatusAndRedirect(res, errorCode, '/');
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


    protected setCsrfToken(req: Request) {
        if(!(req.session.csrfToken)) {
            req.session.csrfToken = randomBytes(50).toString('hex');
        }
    }

    protected isCsrfTokenValid(req: Request): boolean | undefined | string {
        return (req.session.csrfToken && req.session.csrfToken === req.body.csrfToken);
    }
}