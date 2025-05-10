import { SelectedOption } from './selected-option/SelectedOption';
import styles from './profile-navigation.module.css';

export const ProfileNavigation = () => {
	return (
		<div className={styles['profile-navigation']}>
			<SelectedOption to="/profile/pets">Питомцы</SelectedOption>
			<SelectedOption to="/profile/services">Объявления</SelectedOption>
			<SelectedOption to="/profile/forum">Вопросы</SelectedOption>
		</div>
	);
};
