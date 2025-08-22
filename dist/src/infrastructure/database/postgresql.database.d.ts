import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare class PostgresDatabase {
    getConnection(): TypeOrmModuleOptions;
}
