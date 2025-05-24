import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../../input/Input';
import { Logo } from '../../../logo/Logo';
import { PinkButton } from '../button';
import { FormBanner } from '../../../form-banner/FormBanner';
import { Form } from '../../../form/Form';
import { AuthLink } from '../../../auth-link/AuthLink';
import { ErrorMessage } from '../../../error-message/ErrorMessage';
import { request } from '../../../../utils/request';
import styles from './registration.module.css';

const schema = yup.object().shape({
	email: yup.string().email('Некорректный email').required('Email обязателен'),
	password: yup
		.string()
		.min(6, 'Минимальная длина 6 символов')
		.required('Пароль обязателен'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
		.required('Повторите пароль'),
});

export const Registration = () => {
	const [serverError, setServerError] = useState(null);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = ({ email, password }) => {
		request('/api/auth/register', 'POST', { email, password }).then((response) => {
			if (response.error) {
				setServerError(response.error);
				return;
			}
			if (response.message) {
				reset();
				navigate('/auth/login');
			}
		});
	};

	return (
		<div className={styles.container}>
			<NavLink to="/" className={styles['home-link']}>
				<Logo />
			</NavLink>
			<FormBanner
				backgroundColor="#D96073"
				imageSrc="/src/assets/images/dog-1.png"
				justifyContent="start"
				backgroundImage="/src/assets/images/cat-4.png"
			/>
			<div className={styles.form}>
				<h2>Добро пожаловать!</h2>
				<h3>Зарегистрируйтесь, чтобы пользоваться нашим сервисом.</h3>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="email"
						placeholder="Введите ваш email"
						{...register('email')}
					/>
					{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

					<Input
						type="password"
						placeholder="Введите ваш пароль"
						{...register('password')}
					/>
					{errors.password && (
						<ErrorMessage>{errors.password.message}</ErrorMessage>
					)}

					<Input
						type="password"
						placeholder="Повторите пароль"
						{...register('confirmPassword')}
					/>
					{errors.confirmPassword && (
						<ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
					)}

					{serverError && <ErrorMessage>{serverError}</ErrorMessage>}

					<PinkButton>Зарегистрируйтесь</PinkButton>

					<AuthLink
						text="Уже есть аккаунт?"
						linkText="Войдите в него!"
						to="/auth/login"
					/>
				</Form>
			</div>
		</div>
	);
};
