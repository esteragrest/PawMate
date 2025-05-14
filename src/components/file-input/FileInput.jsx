import { useState } from 'react';
import styles from './file-input.module.css';

export const FileInput = () => {
	const [preview, setPreview] = useState(null);

	const handleFileChange = ({ target }) => {
		const file = target.files[0];

		if (file) {
			setPreview(URL.createObjectURL(file));
		}
	};

	return (
		<div className={styles['file-input-container']}>
			<label htmlFor="file">
				<img src={preview || '/public/img/add-photo.svg'} alt="preview" />
			</label>
			<input
				type="file"
				name="file"
				id="file"
				accept="image/jpeg, image/jpg, image/png"
				onChange={handleFileChange}
			/>
		</div>
	);
};
