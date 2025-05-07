import { useEffect, useState } from 'react';
import { FORUM_POSTS } from './forum-posts-data';
import { ForumPost, ForumPostForm, ForumPosts } from './components';
import styles from './forum-content.module.css';
import { useMatch } from 'react-router';

export const ForumContent = () => {
	const [forumPosts, setForumPosts] = useState([]);
	const isAllPosts = !!useMatch('/forum');

	useEffect(() => {
		if (isAllPosts) {
			setForumPosts(FORUM_POSTS);
		}
	}, [isAllPosts]);

	return (
		<div className={styles['forum-content-container']}>
			<div className={styles['forum-content']}>
				{isAllPosts ? <ForumPosts forumPosts={forumPosts} /> : <ForumPost />}
			</div>
			<div className={styles['forum-post-form']}>
				<ForumPostForm />
			</div>
		</div>
	);
};
