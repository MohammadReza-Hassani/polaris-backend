import { DatabaseFactory } from "./database.factory";
import { MySQLDatabase } from "./mysql.database";
import { PostgresDatabase } from "./postgresql.database";
import { SQLiteDatabase } from "./sqlite.database";
export { SQLiteDatabase, PostgresDatabase, MySQLDatabase, DatabaseFactory, };
declare const _default: {
    SQLiteDatabase: typeof SQLiteDatabase;
    PostgresDatabase: typeof PostgresDatabase;
    MySQLDatabase: typeof MySQLDatabase;
    DatabaseFactory: typeof DatabaseFactory;
};
export default _default;
