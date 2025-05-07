import { ListWrapper } from '../../../../../list-wrapper/ListWrapper';
import { MediaPostCard } from '../../../../../media-post-card/MediaPostCard';
import PropTypes from 'prop-types';
// import styles from './forum-posts.module.css'

export const ForumPosts = ({ forumPosts }) => {
	return (
		<ListWrapper>
			{forumPosts.map(({ id, title, content }) => (
				<MediaPostCard
					key={id}
					title={title}
					description={content}
					buttonText="Ответить"
					to={`/forum/${id}`}
				/>
			))}
		</ListWrapper>
	);
};

ForumPosts.propTypes = {
	forumPosts: PropTypes.array.isRequired,
};
