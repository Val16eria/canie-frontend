import * as yup from 'yup';

export const schema = yup.object({
    email: yup.string().required('Поле обязательно для заполнения'),
    pws: yup
        .string()
        .required('Поле обязательно для заполнения')
        .min(8, 'Пароль не должен быть менее 8 симоволов')
        .max(20, 'Пароль не может быть более 20 символов'),
    remember_me: yup.boolean().required(),
});

export type FormData = yup.InferType<typeof schema>;
