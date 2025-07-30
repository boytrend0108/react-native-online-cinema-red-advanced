import { User } from "./user.interface";


export type IAuthFormData = Pick<User, 'email' | 'password'>;