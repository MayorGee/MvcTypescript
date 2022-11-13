import dotenv from 'dotenv';
dotenv.config();

export default class Environment {
    public static getDatabaseHost(): string | undefined {
        return process.env.DB_HOST;
    }

    public static getDatabaseUser(): string | undefined {
        return process.env.DB_USER;
    }

    public static getDatabasePassword(): string | undefined {
        return process.env.DB_PASSWORD;
    }

    public static getDatabaseName(): string | undefined {
        return process.env.DB_NAME;
    }

    public static getCacheMode(): string | undefined {
        return process.env.CACHE_MODE;
    }

    public static getRedisHost(): string | undefined {
        return process.env.REDIS_HOST;
    }

    public static getRedisPort(): string | undefined {
        return process.env.REDIS_PORT;
    }

    public static getRedisPassword(): string | undefined {
        return process.env.REDIS_PASSWORD;
    }
}