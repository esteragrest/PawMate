import PropTypes from 'prop-types';
import styles from './media-post-card.module.css';
import { DescriptionContainer } from '../description-container/DescriptionContainer';

export const MediaPostCard = ({ img, title, description, buttonText, to }) => {
	return (
		<div className={styles['media-post-card-container']}>
			{img && <img className={styles['card-img']} src={img} alt={title} />}
			<DescriptionContainer
				title={title}
				description={description}
				buttonText={buttonText}
				to={to}
			/>
		</div>
	);
};

MediaPostCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
