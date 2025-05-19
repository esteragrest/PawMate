import { useMatch } from 'react-router-dom';
import { FileInput } from '../../../file-input/FileInput';
import { Form } from '../../../form/Form';
import { Input } from '../../../input/Input';
import { GreenButton } from '../button';
import styles from './create-service.module.css';

export const CreateService = () => {
	const isEditing = !!useMatch('/editservice');

	return (
		<div className={styles['create-service-container']}>
			<div className={styles['bg-create-service-left']}></div>
			<div className={styles['create-service-form']}>
				<h3>
					{isEditing
						? 'Отредактируйте объявление'
						: 'Оставьте свое предложение'}
				</h3>
				<Form>
					<FileInput />
					<Input
						type="text"
						name="setvice_title"
						id="setvice_title"
						placeholder="Введите заголовок"
					/>
					<Input
						type="text"
						name="setvice_description"
						id="setvice_description"
						placeholder="Опишите подробнее"
					/>
					<Input
						type="number"
						name="setvice_price"
						id="setvice_price"
						placeholder="Укажите цену"
					/>
					<Input
						type="email"
						name="setvice_email"
						id="setvice_email"
						placeholder="Введите Вашу почту для связи"
					/>
					<Input
						type="text"
						name="setvice_address"
						id="setvice_address"
						placeholder="Укажите адрес"
					/>
					<GreenButton>Опубликовать</GreenButton>
				</Form>
			</div>
			<div className={styles['bg-create-service-right']}></div>
			<div className={styles['bg-create-service']}></div>
		</div>
	);
};
