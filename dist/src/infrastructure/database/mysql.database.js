"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLDatabase = void 0;
class MySQLDatabase {
    getConnection() {
        return {
            type: 'mysql',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT ?? "3306"),
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || '1qaz',
            database: process.env.DB_NAME || 'polarisDb',
            entities: [],
            synchronize: false,
            logging: false,
        };
    }
}
exports.MySQLDatabase = MySQLDatabase;
//# sourceMappingURL=mysql.database.js.map