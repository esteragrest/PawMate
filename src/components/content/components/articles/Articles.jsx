import { ListWrapper } from '../../../list-wrapper/ListWrapper';
import { MediaPostCard } from '../../../media-post-card/MediaPostCard';
import { ARTICLES } from './articles-data';
import styles from './articles.module.css';

export const Articles = () => {
	return (
		<div className={styles['articles-container']}>
			<ListWrapper>
				{ARTICLES.map(({ id, title, content, photo }) => (
					<MediaPostCard
						key={id}
						title={title}
						description={content}
						img={photo}
						to={`/articles/${id}`}
						buttonText="Читать далее..."
					/>
				))}
			</ListWrapper>
		</div>
	);
};
