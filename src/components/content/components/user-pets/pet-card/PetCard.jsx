import PropTypes from 'prop-types';
import styles from './pet-card.module.css';
import { PinkButton } from '../../button';
import { Link } from 'react-router-dom';

export const PetCard = ({ pet: { id, photo, name, type, weight, age, description } }) => {
	return (
		<div className={styles['pet-card']}>
			<div></div>
			<img className={styles['pet-photo']} src={photo} alt={name} />
			<h4>{name}</h4>
			<p>{type}</p>
			<p>{age} лет</p>
			<p>{weight} кг</p>
			<p>{description}</p>
			<PinkButton>
				<Link to={`/editpet/${id}`}>Редактировать</Link>
			</PinkButton>
		</div>
	);
};

PetCard.propTypes = {
	pet: PropTypes.object.isRequired,
};
