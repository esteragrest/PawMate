import { Input } from '../../../../../../../input/Input';
import { ControlButton } from '../../../../../button';
import styles from './comment-form.module.css';

export const CommentForm = () => {
	return (
		<div className={styles['comment-form-container']}>
			<Input
				type="textaerea"
				name="comment_form"
				id="comment_form"
				placeholder="Оставьте комментарий"
			/>
			<ControlButton img="/public/img/send-img.svg" />
		</div>
	);
};
