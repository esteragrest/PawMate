import { ControlButton, GreenButton } from '../../button';
import PropTypes from 'prop-types';
import styles from './profile-header.module.css';

export const ProfileHeader = ({
	userData: { photo, firstName, lastName, email, phone, address },
}) => {
	return (
		<div className={styles['profile-header']}>
			<img className={styles['user-photo']} src={photo} alt={firstName} />
			<div className={styles['profile-info']}>
				<h3>
					{firstName} {lastName || []}
					<ControlButton
						to="/editprofile"
						img="/public/img/settings-svgrepo-com.svg"
					/>
				</h3>
				<p>{email}</p>
				<p>{phone}</p>
				<p>{address}</p>
				<div className={styles['control-panel']}>
					<GreenButton to={'/newpet'}>Добавить питомца</GreenButton>
					<GreenButton to="/newservice">Предложить услугу</GreenButton>
					<GreenButton to="/forum">Задать вопрос</GreenButton>
				</div>
			</div>
		</div>
	);
};

ProfileHeader.propTypes = {
	userData: PropTypes.object.isRequired,
};
