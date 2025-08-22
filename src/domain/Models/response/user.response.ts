export class UserResponseModel {
    id: number
    username: string
    phone: string
    accessId: number
}

export class UsersResponseModel {
    data: UserResponseModel[]
}