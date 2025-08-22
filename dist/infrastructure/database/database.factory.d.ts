import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare class DatabaseFactory {
    static createDatabaseConnection(dbType: string): TypeOrmModuleOptions;
}
