import { Input } from '../../../input/Input';
import { GreenButton } from '../button';
import { FormBanner } from '../../../form-banner/FormBanner';
import { Form } from '../../../form/Form';
import { FileInput } from '../../../file-input/FileInput';
import styles from './create-pet.module.css'

export const CreatePet = () => {
	const OnSubmit = () => {};

	return (
			<div className={styles.container}>
				<FormBanner
					backgroundColor="#D96073"
					imageSrc="/public/img/create-edit-pet.png"
					justifyContent="start"
					backgroundImage="/public/img/bg-profile-edit.png"
				/>
				<div className={styles.form}>
					<h2>Добавьте своего питомца</h2>
					<Form onSubmit={OnSubmit}>
						<FileInput />
						<Input type="text" placeholder="Введите ваше имя вашего питомца" />
						<Input type="text" placeholder="Введите породу вашего питомца" />
						<Input type="number" placeholder="Укажите возвраст" />
						<Input type="number" placeholder="Укажите вес" />
						<Input type="text" placeholder="Дополнительные сведенья" />
						<GreenButton>Опубликовать</GreenButton>
						{/*дописать ошибку*/}
					</Form>
				</div>
			</div>
		);
};
