import { Response, Request } from 'express';

declare namespace Express {
    export interface Response {
        status?: (statusCode: number) => Response  // returning 'this' also didn't help here :(
        redirect?: (page: string) => Response
    }
}
