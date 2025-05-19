import { Input } from '../../../input/Input';
import { GreenButton } from '../button';
import { FormBanner } from '../../../form-banner/FormBanner';
import { Form } from '../../../form/Form';
import { FileInput } from '../../../file-input/FileInput';
import styles from './profile-edit.module.css';

export const ProfileEdit = () => {
	const OnSubmit = () => {};

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<h2>Измените свой профиль</h2>
				<Form onSubmit={OnSubmit}>
					<FileInput />
					<Input type="text" placeholder="Введите ваше имя" />
					<Input type="text" placeholder="Введите вашу фамилию" />
					<Input type="phone" placeholder="Введите номер телефона" />
					<Input type="email" placeholder="Введите ваш email" />
					<Input type="text" placeholder="Введите ваш адрес" />
					<GreenButton>Сохранить</GreenButton>
					{/*дописать ошибку*/}
				</Form>
			</div>
			<FormBanner
				backgroundColor="#D6DC82"
				imageSrc="/public/img/profile-edit.png"
				justifyContent="end"
				backgroundImage="/public/img/bg-profile-editt.png"
			/>
		</div>
	);
};
