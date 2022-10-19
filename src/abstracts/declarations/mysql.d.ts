declare module 'mysql-await' {
    export interface ConnectionParams {
        host: string | undefined,
        user: string | undefined,
        password: string | undefined,
        database: string | undefined
    }

    export interface Connection {
        connect: () => void,
        awaitQuery: <T>(query: string) => Promise<T>
    }
    
    export function createConnection(params: ConnectionParams): Connection;
}