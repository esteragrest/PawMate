import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { FileInput } from '../../../file-input/FileInput';
import { Input } from '../../../input/Input';
import { GreenButton } from '../button';
import { Form } from '../../../form/Form';
import { FormBanner } from '../../../form-banner/FormBanner';
import styles from './profile-edit.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAsync } from '../../../../actions';
import { selectUserId } from '../../../../selectors';

const schema = yup.object().shape({
	photo: yup.mixed(),
	first_name: yup.string().trim(),
	surname: yup.string().trim(),
	last_name: yup.string().trim(),
	phone: yup
		.string()
		.trim()
		.required('Введите номер телефона')
		.matches(/^\+?[\d\s-]{5,20}$/, 'Неверный формат телефона'),
	address: yup.string().trim(),
});

export const ProfileEdit = () => {
	const location = useLocation();
	const { photo, firstName, surname, lastName, email, phone, address } =
		location.state || {};
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			photo: photo || '',
			first_name: firstName || '',
			surname: surname || '',
			last_name: lastName || '',
			phone: phone || '',
			email: email || '',
			address: address || '',
		},
	});

	const onSubmit = (data) => {
		dispatch(updateUserAsync(data, userId)).then(() => {
			navigate(-1);
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<h2>Измените свой профиль</h2>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FileInput
						register={register}
						setValue={setValue}
						defaultImage={photo}
					/>
					<Input
						type="text"
						placeholder="Введите ваше имя"
						{...register('first_name')}
					/>
					{errors.first_name && (
						<p className={styles.error}>{errors.first_name.message}</p>
					)}

					<Input
						type="text"
						placeholder="Введите ваше отчество"
						{...register('surname')}
					/>
					{errors.surname && (
						<p className={styles.error}>{errors.surname.message}</p>
					)}
					<Input
						type="text"
						placeholder="Введите вашу фамилию"
						{...register('last_name')}
					/>
					{errors.last_name && (
						<p className={styles.error}>{errors.last_name.message}</p>
					)}
					<Input
						type="phone"
						placeholder="Введите номер телефона"
						{...register('phone')}
					/>
					{errors.phone && (
						<p className={styles.error}>{errors.phone.message}</p>
					)}
					<Input
						type="text"
						placeholder="Введите ваш адрес"
						{...register('address')}
					/>
					{errors.address && (
						<p className={styles.error}>{errors.address.message}</p>
					)}

					<GreenButton>Сохранить</GreenButton>
				</Form>
			</div>
			<FormBanner
				backgroundColor="#D6DC82"
				imageSrc="/public/img/profile-edit.png"
				justifyContent="end"
				backgroundImage="/public/img/bg-profile-editt.png"
			/>
		</div>
	);
};
