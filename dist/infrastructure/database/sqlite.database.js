"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLiteDatabase = void 0;
const Entities_1 = require("../../domain/Models/Entities");
class SQLiteDatabase {
    getConnection() {
        return {
            type: 'sqlite',
            database: `database.sqlite`,
            entities: [
                Entities_1.User
            ],
            synchronize: false
        };
    }
}
exports.SQLiteDatabase = SQLiteDatabase;
//# sourceMappingURL=sqlite.database.js.map