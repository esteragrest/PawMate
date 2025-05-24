import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../../input/Input';
import { Logo } from '../../../logo/Logo';
import { GreenButton } from '../button';
import { FormBanner } from '../../../form-banner/FormBanner';
import { Form } from '../../../form/Form';
import { AuthLink } from '../../../auth-link/AuthLink';
import { ErrorMessage } from '../../../error-message/ErrorMessage';
import { useDispatch } from 'react-redux';
import { request } from '../../../../utils/request';
import { setUser } from '../../../../actions';
import styles from './authorization.module.css';

const schema = yup.object().shape({
	email: yup.string().email('Некорректный email').required('Email обязателен'),
	password: yup
		.string()
		.min(6, 'Минимальная длина 6 символов')
		.required('Пароль обязателен'),
});

export const Authorization = () => {
	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
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
		request('/api/auth/login', 'POST', { email, password }).then(
			({ error, user, token }) => {
				if (error) {
					console.log('error');
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}

				dispatch(setUser({ ...user, token }));
				sessionStorage.setItem('userData', JSON.stringify({ ...user, token }));
				navigate('/');
				reset();
			},
		);
	};

	return (
		<div className={styles.container}>
			<NavLink to="/" className={styles['home-link']}>
				<Logo />
			</NavLink>
			<div className={styles.form}>
				<h2>С возвращением!</h2>
				<h3>Введите свою почту и пароль для входа в аккаунт.</h3>
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
					{serverError && <ErrorMessage>{serverError}</ErrorMessage>}
					<GreenButton>Войти в аккаунт</GreenButton>

					<AuthLink
						text="Ещё нет аккаунта?"
						linkText="Зарегистрируйтесь!"
						to="/auth/register"
					/>
				</Form>
			</div>
			<FormBanner
				backgroundColor="#D6DC82"
				imageSrc="/src/assets/images/cat-1.png"
				justifyContent="end"
				backgroundImage="/src/assets/images/dog-2.png"
			/>
		</div>
	);
};
