import { useSelector } from 'react-redux';
import { PinkButton } from '../../../../button';
import styles from './application-form.module.css';
import { selectUserRole } from '../../../../../../../selectors';
import { isAuthorized } from '../../../../../../../utils';

export const ApplicationForm = () => {
	const userRole = useSelector(selectUserRole);

	const isAuth = isAuthorized(userRole);

	return (
		<div className={styles['application-form-container']}>
			{isAuth && (
				<>
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
				</>
			)}
		</div>
	);
};
