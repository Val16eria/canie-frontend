import { rest } from 'msw';
import { user } from './mocks';
import { IUser } from '../user';
import { IAuthSignIn, IAuthSignUp } from './types';

export const mswSignIn = rest.post<IAuthSignIn, any, IUser>(
    `${process.env.REACT_APP_BASE_URL}/auth/signin`,
    async (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(user));
    },
);

export const mswSignUp = rest.post<IAuthSignUp, any, IUser>(
    `${process.env.REACT_APP_BASE_URL}/auth/signup`,
    async (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(user));
    },
);
