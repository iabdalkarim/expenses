import { User } from "./user";

export interface Wallet {
    id: number;
    balance: number;
    name: string;
    user: User;
}
