import { NavLink } from 'react-router';
import { Input } from '../../../input/Input';
import { Logo } from '../../../logo/Logo';
import { GreenButton } from '../button';
import { FormBanner } from '../../../form-banner/FormBanner';
import { Form } from '../../../form/Form';
import styles from './authorization.module.css';
import { AuthLink } from '../../../auth-link/AuthLink';

export const Authorization = () => {
	const OnSubmit = () => {};

	return (
		<div className={styles.container}>
			<NavLink to="/" className={styles['home-link']}>
				<Logo />
			</NavLink>
			<div className={styles.form}>
				<h2>С возвращением!</h2>
				<h3>Введите свою почту и пароль для входа в аккаунт.</h3>
				<Form onSubmit={OnSubmit}>
					<Input type="email" placeholder="Введите ваш email" />
					<Input type="password" placeholder="Введите ваш пароль" />
					<GreenButton>Войти в аккаунт</GreenButton>
					{/*дописать ошибку*/}
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
