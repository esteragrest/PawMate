import PropTypes from 'prop-types';
import styles from './author-details.module.css';

export const AuthorDetails = ({ photo, firstName, lastName, createdAt }) => {
	return (
		<div className={styles['author-details-container']}>
			<img
				className={styles['profile-picture']}
				src={photo}
				alt={`${firstName} ${lastName || ''}`}
			/>
			<div className={styles.details}>
				<p>
					{firstName} {lastName || ''}
				</p>
				<p className={styles['created-at']}>{createdAt}</p>
			</div>
		</div>
	);
};

AuthorDetails.propTypes = {
	photo: PropTypes.string,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string,
	createdAt: PropTypes.string.isRequired,
};
