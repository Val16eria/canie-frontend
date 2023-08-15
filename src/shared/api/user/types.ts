export interface IUser {
    user: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        role: string;
    };
    authentication: {
        access_token: string;
        refresh_token: string;
    };
}
