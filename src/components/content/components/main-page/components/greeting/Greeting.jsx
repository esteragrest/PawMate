import { Link } from 'react-router-dom';
import { GreenButton } from '../../../button';
import styles from './greeting.module.css';

export const Greeting = () => {
	return (
		<div className={styles.container}>
			<div className={styles['welcome-section']}>
				<h1>
					Добро пожаловать в <span className={styles.highlight}>PawMate</span>!
					<img
						src="/src/assets/images/paw-icon.png"
						alt="paw-icon"
						className={styles['paw-icon']}
					/>
				</h1>
				<div className={styles.hr}></div>
				<p>
					Приветствуем всех любителей домашних животных! PawMate — это ваше
					новое любимое место, где вы можете делиться информацией, задавать
					вопросы и находить услуги для ваших любимых питомцев.
				</p>
				<GreenButton>
					<Link to="/services">Найти услугу</Link>
				</GreenButton>
			</div>
			<div className={styles['welcome-image']}>
				<img
					src="/src/assets/img-for-home-sreen/main-1.png"
					alt="img"
					className={styles.pets}
				/>
			</div>
		</div>
	);
};
