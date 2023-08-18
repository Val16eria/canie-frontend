import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import { Login } from './Login';

describe('Login component', () => {
    describe('valid inputs', () => {
        it('renders valid inputs', async () => {
            render(
                <BrowserRouter>
                    <Login />
                </BrowserRouter>,
            );

            const emailInput = screen.getByPlaceholderText('Электронная почта');
            const pwsInput = screen.getByPlaceholderText('Пароль');
            const button = screen.getByRole('button');

            await userEvent.type(emailInput, 'test@gmail.com');
            await userEvent.type(pwsInput, '12345678');
            await userEvent.click(button);

            expect(
                screen.queryByText('Поле обязательно для заполнения'),
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

            expect(await screen.findByText('Valeria')).toBeInTheDocument();
            // проверять маршрут
            // проверять данные в сторе
        });
    });

    describe('invalid email', () => {
        describe('email is empty', () => {
            it('renders when email is empty', async () => {
                render(
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>,
                );

                const pwsInput = screen.getByPlaceholderText('Пароль');
                const button = screen.getByRole('button');

                await userEvent.type(pwsInput, '12345678');
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
                        <Login />
                    </BrowserRouter>,
                );

                const emailInput =
                    screen.getByPlaceholderText('Электронная почта');
                const button = screen.getByRole('button');

                await userEvent.type(emailInput, 'testgmail.com');
                await userEvent.click(button);

                expect(
                    screen.queryByText('Неправильный формат данных'),
                ).toBeInTheDocument();
            });
        });
    });

    describe('invalid password', () => {
        describe('password is empty', () => {
            it('renders when password is empty', async () => {
                render(
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>,
                );

                const emailInput =
                    screen.getByPlaceholderText('Электронная почта');
                const button = screen.getByRole('button');

                await userEvent.type(emailInput, 'test@gmail.com');
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
                        <Login />
                    </BrowserRouter>,
                );

                const emailInput =
                    screen.getByPlaceholderText('Электронная почта');
                const pwsInput = screen.getByPlaceholderText('Пароль');
                const button = screen.getByRole('button');

                await userEvent.type(emailInput, 'test@gmail.com');
                await userEvent.type(pwsInput, '123456789012345678901');
                await userEvent.click(button);

                expect(
                    screen.queryByText(
                        'Пароль не может быть более 20 символов',
                    ),
                ).toBeInTheDocument();
            });
        });

        describe('password less than 8 characters', () => {
            it('renders password less than 8 characters', async () => {
                render(
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>,
                );

                const emailInput =
                    screen.getByPlaceholderText('Электронная почта');
                const pwsInput = screen.getByPlaceholderText('Пароль');
                const button = screen.getByRole('button');

                await userEvent.type(emailInput, 'test@gmail.com');
                await userEvent.type(pwsInput, '123');
                await userEvent.click(button);

                expect(
                    screen.queryByText(
                        'Пароль не должен быть менее 8 симоволов',
                    ),
                ).toBeInTheDocument();
            });
        });
    });
});
