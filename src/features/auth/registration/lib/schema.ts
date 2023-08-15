import * as yup from 'yup';

export const schema = yup.object({
    first_name: yup.string().required('Поле обязательно для заполнения'),
    last_name: yup.string().required('Поле обязательно для заполнения'),
    email: yup.string().required('Поле обязательно для заполнения'),
    pws: yup
        .string()
        .required('Поле обязательно для заполнения')
        .min(8, 'Пароль не должен быть менее 8 симоволов')
        .max(20, 'Пароль не может быть более 20 символов'),
    role: yup
        .mixed()
        .oneOf(['photograph', 'model'])
        .required('Необходимо выбрать роль'),
    contract: yup
        .boolean()
        .oneOf([true], 'Обязательное действие')
        .required('Обязательное действие'),
});

export type FormData = yup.InferType<typeof schema>;
