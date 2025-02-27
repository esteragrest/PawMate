import { GreenButton } from '../../../button';
import styles from './banner.module.css';

export const Banner = () => {
	return (
		<div className={styles.container}>
			<div className={styles['banner-img']}>
				<img src="/src/assets/images/banner.png" alt="banner" />
			</div>
			<div className={styles['banner-text']}>
				<h2>
					Присоединяйтесь к нашему удивительному сообществу любителей животных
					на PawMate!
				</h2>
				<p>
					Поделитесь своей любовью к вашим питомцам, обменивайтесь полезными
					советами, участвуйте в увлекательных обсуждениях и находите новых
					друзей, которые так же, как и вы, ценят заботу и внимание к своим
					четвероногим друзьям. Вместе мы можем сделать жизнь наших питомцев еще
					ярче и счастливее!
				</p>

				<GreenButton to="/register">Присоединиться</GreenButton>
			</div>
		</div>
	);
};
