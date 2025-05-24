import PropTypes from 'prop-types';
import styles from './pet-card.module.css';
import { PinkButton } from '../../button';
import { useNavigate } from 'react-router-dom';

export const PetCard = ({
	pet: { id, photo, name, type, breed, weight, age, description },
}) => {
	const navigate = useNavigate();

	const onEdit = () => {
		navigate(`/editpet/${id}`, {
			state: {
				id,
				photo,
				name,
				type,
				breed,
				weight,
				age,
				description,
			},
		});
	};
	return (
		<div className={styles['pet-card']}>
			<div></div>
			<img className={styles['pet-photo']} src={photo} alt={name} />
			<h4>{name}</h4>
			<p>{type}</p>
			<p>{breed}</p>
			<p>{age} лет</p>
			<p>{weight} кг</p>
			<p>{description}</p>
			<PinkButton onClick={onEdit}>Редактировать</PinkButton>
		</div>
	);
};

PetCard.propTypes = {
	pet: PropTypes.object.isRequired,
};
