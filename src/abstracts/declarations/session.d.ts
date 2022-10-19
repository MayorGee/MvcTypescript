import 'express-session';

declare module 'express-session' {
    interface SessionData {
       internId: number,
       mentorId: number,
       role: string,
       csrfToken: string
       destroy: () => void
    }
}
