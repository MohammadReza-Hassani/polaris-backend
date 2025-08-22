import { Exclude, Expose } from "class-transformer";

export class UserValueObject {
    @Exclude() id: number;
    @Expose() username: string;
    @Exclude() password: string;
    @Expose() phone: string;
    @Expose() accessId: number;
}