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

export interface IUserRoleParams {
    price_per_hour: number[];
    types_of_photos?: string[];
    limit?: number;
    offset?: number;
}

export interface IDescriptionUser {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    description: string;
    average_raiting: number;
    count_of_reviews: number;
    price_per_hour: number;
    photo_types: string[];
}
