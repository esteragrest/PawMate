import { AuthorDetails } from '../../../../../../../author-details/AuthorDetails';
import PropTypes from 'prop-types';
import styles from './forum-post-content.module.css';

export const ForumPostContent = ({
	forumPost: {
		title,
		postOwnerPhoto,
		postOwnerFirstName,
		postOwnerLastName,
		createdAt,
		content,
	},
}) => {
	return (
		<div className={styles['forum-post-content-container']}>
			<h3>{title}</h3>
			<AuthorDetails
				photo={postOwnerPhoto}
				firstName={postOwnerFirstName}
				lastName={postOwnerLastName}
				createdAt={createdAt}
			/>
			<p className={styles['forum-post-content']}>{content}</p>
		</div>
	);
};

ForumPostContent.propTypes = {
	forumPost: PropTypes.object.isRequired,
};
