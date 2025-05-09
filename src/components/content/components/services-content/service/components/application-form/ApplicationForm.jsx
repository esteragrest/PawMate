import { PinkButton } from '../../../../button';
import styles from './application-form.module.css';

export const ApplicationForm = () => {
	return (
		<div className={styles['application-form-container']}>
			<h4>Хотите оставить заявку?</h4>
			<form>
				<textarea
					className={styles['application-field']}
					name="application"
					id="application"
					placeholder="Отправьте свое сообщение..."
				></textarea>
				<PinkButton>Оставить заявку</PinkButton>
			</form>
		</div>
	);
};
