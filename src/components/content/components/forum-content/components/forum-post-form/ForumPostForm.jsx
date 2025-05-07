import { Form } from '../../../../../form/Form';
import { Input } from '../../../../../input/Input';
import { PinkButton } from '../../../button';
import styles from './forum-post-form.module.css';

export const ForumPostForm = () => {
	return (
		<Form>
			<img
				className={styles['forum-post-img']}
				src="/public/img/forum-post-img.svg"
				alt="forum-post"
			/>
			<h3 className={styles.title}>Оставить свой вопрос</h3>
			<Input type="text" name="title" id="title" placeholder="Введите заголовок" />
			<Input
				type="text"
				name="content"
				id="content"
				placeholder="Опишите подробнее"
			/>
			<PinkButton>Опубликовать</PinkButton>
		</Form>
	);
};
