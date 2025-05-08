import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import { RESET_FORUM_POST_DATA, setForumPostData } from '../../../../../../actions';
import { FORUM_POSTS } from '../../forum-posts-data';
import { selectForumPost } from '../../../../../../selectors';
import { CommentForm, CommentsList, ForumPostContent } from './components';
import styles from './forum-post.module.css';

export const ForumPost = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const forumPost = useSelector(selectForumPost);

	useLayoutEffect(() => {
		dispatch(RESET_FORUM_POST_DATA);
	}, [dispatch]);

	useEffect(() => {
		dispatch(
			setForumPostData(FORUM_POSTS.find(({ id }) => id === Number(params.postId))),
		);
	}, [dispatch, params.postId]);

	return (
		<div className={styles['forum-post-container']}>
			<ForumPostContent forumPost={forumPost} />
			<CommentForm />
			<CommentsList comments={forumPost.comments} />
		</div>
	);
};
