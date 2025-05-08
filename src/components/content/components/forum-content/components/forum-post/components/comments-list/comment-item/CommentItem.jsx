import PropTypes from 'prop-types';
import styles from './comment-item.module.css';
import { AuthorDetails } from '../../../../../../../../author-details/AuthorDetails';

export const CommentItem = ({
	comment: {
		commentatorFirstName,
		commentatorLastName,
		commentatorPhoto,
		content,
		createdAt,
	},
}) => {
	return (
		<div className={styles['comment-item-container']}>
			<AuthorDetails
				photo={commentatorPhoto}
				firstName={commentatorFirstName}
				lastName={commentatorLastName}
				createdAt={createdAt}
			/>
			<p>{content}</p>
		</div>
	);
};

CommentItem.propTypes = {
	comment: PropTypes.object,
};
