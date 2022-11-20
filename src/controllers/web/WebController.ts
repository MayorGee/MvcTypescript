import AbstractView from '../../views/AbstractView.js';

import Controller from '../Controller.js';

import { IController } from '../../abstracts/Contract.js';
import { WebErrorResponse } from '../../abstracts/Common.js';
import { RequestMethod, Role } from '../../abstracts/Enum.js';

import alert from 'alert';
import Tokens from 'csrf';

import { NextFunction, Request, Response } from 'express';

export default abstract class WebController extends Controller implements IController {
    public async execute(req: Request, res: Response, next: NextFunction) {
        const requestMethod = req.method.toLowerCase();

        if (requestMethod === RequestMethod.get) {
            await this.setCsrfToken(req);
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
        errorMessage = 'You are not logged in as intern' 
    }: WebErrorResponse) {
        alert(errorMessage);
        
        this.sendStatusAndRedirect(res, errorCode, page);
    }

    protected sendStatusAndRedirect(res: Response, errorCode: number, page: string) {
        res.status(errorCode).redirect(page);
    }

    protected redirectToHome(res: Response, errorCode: number = 501, errorMessage: string = 'You need to login as mentor') {
        alert(errorMessage);

        this.sendStatusAndRedirect(res, errorCode, '/');
    }
    
    protected renderPage(req: Request, res: Response, viewClass: AbstractView) {
        res.render(
            viewClass.getTemplate(), 
            { 
                'this': viewClass,
                csrfToken: req.session.csrfToken,
                role: req.session.role
            }
        );
    }
    
    protected async setCsrfToken(req: Request) {
        if(!(req.session.csrfToken)) {
            const tokens = new Tokens({ secretLength: 50 });
            const secret =  await tokens.secret();

            req.session.csrfToken = tokens.create(secret);
        }
    }

    protected isCsrfTokenValid(req: Request): boolean | undefined | string {
        return (req.session.csrfToken && req.session.csrfToken === req.body.csrfToken);
    }
}