import { NavLink } from 'react-router';
import { Input } from '../../../input/Input';
import { Logo } from '../../../logo/Logo';
import { PinkButton } from '../button';
import { FormBanner } from '../../../form-banner/FormBanner';
import { Form } from '../../../form/Form';
import styles from './registration.module.css';
import { AuthLink } from '../../../auth-link/AuthLink';

export const Registration = () => {
	const OnSubmit = () => {};

	return (
		<div className={styles.container}>
			<NavLink to="/" className={styles['home-link']}>
				<Logo />
			</NavLink>
			<FormBanner
				backgroundColor="#D96073"
				imageSrc="/src/assets/images/dog-1.png"
				justifyContent="start"
				backgroundImage={'/src/assets/images/cat-4.png'}
			/>
			<div className={styles.form}>
				<h2>Добро пожаловать!</h2>
				<h3>Зарегистрируйтесь, чтобы пользоваться нашим сервисом.</h3>
				<Form onSubmit={OnSubmit}>
					<Input type="email" placeholder="Введите ваш email" />
					<Input type="password" placeholder="Введите ваш пароль" />
					<Input type="password" placeholder="Повторите пароль" />
					<PinkButton>Зарегистрируйтесь</PinkButton>
					{/*дописать ошибку*/}
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
