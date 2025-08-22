"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLiteDatabase = void 0;
const entities_1 = require("../../domain/models/entities");
class SQLiteDatabase {
    getConnection() {
        return {
            type: 'sqlite',
            database: `database.sqlite`,
            entities: [
                entities_1.User
            ],
            synchronize: false
        };
    }
}
exports.SQLiteDatabase = SQLiteDatabase;
//# sourceMappingURL=sqlite.database.js.map