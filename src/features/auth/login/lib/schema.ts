import * as yup from 'yup';

export const schema = yup.object({
    email: yup
        .string()
        .required('Поле обязательно для заполнения')
        .matches(
            /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
            'Неправильный формат данных',
        ),
    pws: yup
        .string()
        .required('Поле обязательно для заполнения')
        .min(8, 'Пароль не должен быть менее 8 симоволов')
        .max(20, 'Пароль не может быть более 20 символов'),
    remember_me: yup.boolean().required(),
});

export type FormData = yup.InferType<typeof schema>;
