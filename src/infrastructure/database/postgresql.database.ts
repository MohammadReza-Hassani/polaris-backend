import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

export class PostgresDatabase {
    getConnection(): TypeOrmModuleOptions  {
        return {
            type: 'postgres',
            host: 'ep-little-dream-ad1jtv04-pooler.c-2.us-east-1.aws.neon.tech',
            port: 5432,
            username: 'neondb_owner',
            password: 'npg_auVm2SGK7pCj',
            database: 'polarisdb',
            entities: [],
            synchronize: false, // Set to false in production
            logging: false, // Disable logging in production,
            ssl: {
                rejectUnauthorized: false, // tells pg to accept Neon’s TLS cert
            },
            extra: {
                sslmode: 'require', // explicitly tell Neon to require SSL
            }
        }
    }
}