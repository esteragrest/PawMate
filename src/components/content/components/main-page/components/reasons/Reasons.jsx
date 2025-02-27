import styles from './reasons.module.css';

export const Reasons = () => {
	return (
		<div className={styles.container}>
			<div className={styles['reasons-text']}>
				<h2>
					Почему стоит выбрать <span className={styles.highlight}>PawMate</span>
					:
				</h2>
				<h4>Дружелюбное сообщество</h4>
				<p>
					Наши пользователи — это люди, которые так же, как и вы, обожают своих
					питомцев и готовы помогать друг другу
				</p>
				<h4>Простота и удобство</h4>
				<p>
					Наш интерфейс интуитивно понятен и прост в использовании. Все нужные
					функции всегда под рукой.
				</p>
				<h4>Актуальная информация</h4>
				<p>
					Мы регулярно обновляем наши статьи и полезные советы, чтобы вы всегда
					были в курсе последних новостей и рекомендаций по уходу за питомцами.
				</p>
			</div>
			<div className={styles['reasons-img']}>
				<img src="/src/assets/images/reasons-img.png" alt="reasons-img" />
			</div>
		</div>
	);
};
