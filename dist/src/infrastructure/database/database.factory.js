"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseFactory = void 0;
const _1 = require(".");
class DatabaseFactory {
    static createDatabaseConnection(dbType) {
        switch (dbType) {
            case "sqlite":
                return new _1.SQLiteDatabase().getConnection();
            case 'postgres':
                return new _1.PostgresDatabase().getConnection();
            case 'mysql':
                return new _1.MySQLDatabase().getConnection();
            default:
                throw new Error('Unsupported database type');
        }
    }
}
exports.DatabaseFactory = DatabaseFactory;
//# sourceMappingURL=database.factory.js.map