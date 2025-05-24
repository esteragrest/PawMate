import { ControlButton, GreenButton } from '../../button';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import styles from './profile-header.module.css';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '../../../../../selectors';

export const ProfileHeader = ({ userData }) => {
	const navigate = useNavigate();
	const userEmail = useSelector(selectUserEmail);

	if (!userData) {
		return <div className={styles['profile-header']}>Нет данных о пользователе</div>;
	}

	const { id, photo, firstName, lastName, phone } = userData;

	const onEdit = () => {
		navigate('/editprofile', {
			state: {
				id,
				photo,
				firstName,
				lastName,
				phone,
			},
		});
	};

	return (
		<div className={styles['profile-header']}>
			<img
				className={styles['user-photo']}
				src={photo || '/public/img/avatar.jpg'}
				alt={firstName || 'Аватар'}
			/>
			<div className={styles['profile-info']}>
				<h3>
					{firstName || lastName ? (
						<>
							{firstName} {lastName}
						</>
					) : (
						'Данные не заполнены'
					)}
					<ControlButton onClick={onEdit}>
						<img src="/public/img/settings-svgrepo-com.svg" alt="settings" />
					</ControlButton>
				</h3>
				<p>{userEmail || 'Email не указан'}</p>
				<p>{phone || 'Телефон не указан'}</p>
				<div className={styles['control-panel']}>
					<GreenButton>
						<Link to="/newpet">Добавить питомца</Link>
					</GreenButton>
					<GreenButton>
						<Link to="/newservice">Предложить услугу</Link>
					</GreenButton>
					<GreenButton>
						<Link to="/forum">Задать вопрос</Link>
					</GreenButton>
				</div>
			</div>
		</div>
	);
};

ProfileHeader.propTypes = {
	userData: PropTypes.shape({
		id: PropTypes.number,
		photo: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
	}),
};

ProfileHeader.defaultProps = {
	userData: null,
};
