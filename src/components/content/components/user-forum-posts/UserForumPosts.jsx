import { useOutletContext } from 'react-router-dom';
import { ListWrapper } from '../../../list-wrapper/ListWrapper';
import { MediaPostCard } from '../../../media-post-card/MediaPostCard';
import styles from './user-forum-posts.module.css';

export const UserForumPosts = () => {
	const { userForumPosts } = useOutletContext();

	return (
		<div className={styles['user-forum-posts-container']}>
			{userForumPosts.length === 0 ? (
				<h3>Здесь пока еще нет записей</h3>
			) : (
				<ListWrapper>
					{userForumPosts.map(({ id, title, content }) => (
						<MediaPostCard
							key={id}
							title={title}
							description={content}
							buttonText="Ответить"
							to={`/forum/${id}`}
						/>
					))}
				</ListWrapper>
			)}
		</div>
	);
};
