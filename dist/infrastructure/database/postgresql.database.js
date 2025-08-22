"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabase = void 0;
class PostgresDatabase {
    getConnection() {
        return {
            type: 'postgres',
            host: 'ep-little-dream-ad1jtv04-pooler.c-2.us-east-1.aws.neon.tech',
            port: 5432,
            username: 'neondb_owner',
            password: 'npg_auVm2SGK7pCj',
            database: 'polarisdb',
            entities: [],
            synchronize: false,
            logging: false,
            ssl: {
                rejectUnauthorized: false,
            },
            extra: {
                sslmode: 'require',
            }
        };
    }
}
exports.PostgresDatabase = PostgresDatabase;
//# sourceMappingURL=postgresql.database.js.map