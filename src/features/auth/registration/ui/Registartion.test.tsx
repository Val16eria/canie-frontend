import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createBrowserHistory } from '@remix-run/router';

import { user } from '../../../../shared/api';
import registrationModel from '../model';
import { Registration } from './Registration';

describe('Registration component', () => {
    it('renders valid inputs', async () => {
        render(
            <BrowserRouter>
                <Registration />
            </BrowserRouter>,
        );

        const history = createBrowserHistory();
        const firstNameInput = screen.getByPlaceholderText('Имя');
        const lastNameInput = screen.getByPlaceholderText('Фамилия');
        const emailInput = screen.getByPlaceholderText('Электронная почта');
        const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
        const roleInput = screen.getByDisplayValue('photograph');
        const contract = screen.getByRole('checkbox');
        const button = screen.getByRole('button', {
            name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
        });

        await userEvent.type(firstNameInput, 'Valeria');
        await userEvent.type(lastNameInput, 'Mikhailenko');
        await userEvent.type(emailInput, 'test@gmail.com');
        await userEvent.type(pwsInput, '12345678');
        await userEvent.click(roleInput);
        await userEvent.click(contract);
        await userEvent.click(button);

        expect(
            screen.queryByText('Поле обязательно для заполнения'),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Необходимо выбрать роль'),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Обязательное действие'),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Неправильный формат данных'),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Пароль не должен быть менее 8 симоволов'),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText('Пароль не может быть более 20 символов'),
        ).not.toBeInTheDocument();

        expect(registrationModel.data).toEqual(user);
        expect(history.location.pathname).toBe('/');
    });

    describe('first_name is empty', () => {
        it('renders when first_name is empty', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const roleInput = screen.getByDisplayValue('photograph');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.type(pwsInput, '12345678');
            await userEvent.click(roleInput);
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Поле обязательно для заполнения'),
            ).toBeInTheDocument();
        });
    });

    describe('last_name is empty', () => {
        it('renders when last_name is empty', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const roleInput = screen.getByDisplayValue('photograph');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.type(pwsInput, '12345678');
            await userEvent.click(roleInput);
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Поле обязательно для заполнения'),
            ).toBeInTheDocument();
        });
    });

    describe('email is empty', () => {
        it('renders when email is empty', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const roleInput = screen.getByDisplayValue('photograph');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(pwsInput, '12345678');
            await userEvent.click(roleInput);
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Поле обязательно для заполнения'),
            ).toBeInTheDocument();
        });
    });

    describe('incorrect email format', () => {
        it('renders when incorrect email format', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const roleInput = screen.getByDisplayValue('photograph');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(emailInput, 'testgmail.com');
            await userEvent.type(pwsInput, '12345678');
            await userEvent.click(roleInput);
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Неправильный формат данных'),
            ).toBeInTheDocument();
        });
    });

    describe('password is empty', () => {
        it('renders when password is empty', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const roleInput = screen.getByDisplayValue('photograph');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.click(roleInput);
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Поле обязательно для заполнения'),
            ).toBeInTheDocument();
        });
    });

    describe('password more than 20 characters', () => {
        it('renders wnen password more than 20 characters', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const roleInput = screen.getByDisplayValue('photograph');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.type(pwsInput, '123456789012345678901');
            await userEvent.click(roleInput);
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Пароль не может быть более 20 символов'),
            ).toBeInTheDocument();
        });
    });

    describe('password less than 8 characters', () => {
        it('renders password less than 8 characters', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const roleInput = screen.getByDisplayValue('photograph');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.type(pwsInput, '123');
            await userEvent.click(roleInput);
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Пароль не должен быть менее 8 симоволов'),
            ).toBeInTheDocument();
        });
    });

    describe('role is empty', () => {
        it('renders when role is empty', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const contract = screen.getByRole('checkbox');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.type(pwsInput, '12345678');
            await userEvent.click(contract);
            await userEvent.click(button);

            expect(
                screen.queryByText('Необходимо выбрать роль'),
            ).toBeInTheDocument();
        });
    });

    describe('conract is empty', () => {
        it('renders when conract is empty', async () => {
            render(
                <BrowserRouter>
                    <Registration />
                </BrowserRouter>,
            );

            const firstNameInput = screen.getByPlaceholderText('Имя');
            const lastNameInput = screen.getByPlaceholderText('Фамилия');
            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Придумайте пароль');
            const roleInput = screen.getByDisplayValue('photograph');
            const button = screen.getByRole('button', {
                name: 'ЗАРЕГИСТРИРОВАТЬСЯ',
            });

            await userEvent.type(firstNameInput, 'Valeria');
            await userEvent.type(lastNameInput, 'Mikhailenko');
            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.type(pwsInput, '12345678');
            await userEvent.click(roleInput);
            await userEvent.click(button);

            expect(
                screen.queryByText('Обязательное действие'),
            ).toBeInTheDocument();
        });
    });
});
