"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseFactory = exports.MySQLDatabase = exports.PostgresDatabase = exports.SQLiteDatabase = void 0;
const database_factory_1 = require("./database.factory");
Object.defineProperty(exports, "DatabaseFactory", { enumerable: true, get: function () { return database_factory_1.DatabaseFactory; } });
const mysql_database_1 = require("./mysql.database");
Object.defineProperty(exports, "MySQLDatabase", { enumerable: true, get: function () { return mysql_database_1.MySQLDatabase; } });
const postgresql_database_1 = require("./postgresql.database");
Object.defineProperty(exports, "PostgresDatabase", { enumerable: true, get: function () { return postgresql_database_1.PostgresDatabase; } });
const sqlite_database_1 = require("./sqlite.database");
Object.defineProperty(exports, "SQLiteDatabase", { enumerable: true, get: function () { return sqlite_database_1.SQLiteDatabase; } });
exports.default = {
    SQLiteDatabase: sqlite_database_1.SQLiteDatabase,
    PostgresDatabase: postgresql_database_1.PostgresDatabase,
    MySQLDatabase: mysql_database_1.MySQLDatabase,
    DatabaseFactory: database_factory_1.DatabaseFactory,
};
//# sourceMappingURL=index.js.map