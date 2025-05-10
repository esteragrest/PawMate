import { useOutletContext } from 'react-router';
import styles from './user-pets.module.css';
import { PetCard } from './pet-card/PetCard';

export const UserPets = () => {
	const { userPets } = useOutletContext();

	return (
		<div className={styles['user-pets-list']}>
			{userPets.map((pet) => (
				<PetCard key={pet.id} pet={pet} />
			))}
		</div>
	);
};
