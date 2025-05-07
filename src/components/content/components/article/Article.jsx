import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ARTICLES } from '../articles/articles-data';
import styles from './article.module.css';

export const Article = () => {
	const [article, setArticle] = useState({});
	const params = useParams();

	useEffect(() => {
		setArticle(ARTICLES.find(({ id }) => id === Number(params.articleId)));
	}, [params.articleId]);

	const { title, content, photo } = article;

	return (
		<div className={styles['article-container']}>
			<img className={styles['article-img']} src={photo} alt={title} />
			<h3>{title}</h3>
			<p className={styles.text}>{content}</p>
		</div>
	);
};
