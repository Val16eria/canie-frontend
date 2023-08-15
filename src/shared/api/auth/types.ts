export interface IAuthSignUp {
    first_name: string;
    last_name: string;
    email: string;
    pws: string;
    role: string;
}

export interface IAuthSignIn {
    email: string;
    pws: string;
    remember_me: boolean;
}
