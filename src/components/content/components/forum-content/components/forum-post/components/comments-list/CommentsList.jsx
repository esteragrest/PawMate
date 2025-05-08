import PropTypes from 'prop-types';
import styles from './comments-list.module.css';
import { ListWrapper } from '../../../../../../../list-wrapper/ListWrapper';
import { CommentItem } from './comment-item/CommentItem';

export const CommentsList = ({ comments }) => {
	return (
		<div className={styles['comments-list-container']}>
			{comments.length === 0 ? (
				<p>Здесь еще нет ответов, вы можете ответить первым!</p>
			) : (
				<ListWrapper>
					{comments.map((comment) => (
						<CommentItem key={comment.id} comment={comment} />
					))}
				</ListWrapper>
			)}
		</div>
	);
};

CommentsList.propTypes = {
	comments: PropTypes.array,
};
