import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { FileInput } from '../../../file-input/FileInput';
import { Input } from '../../../input/Input';
import { GreenButton } from '../button';
import { Form } from '../../../form/Form';
import { FormBanner } from '../../../form-banner/FormBanner';
import styles from './pet-form.module.css';
import { ErrorMessage } from '../../../error-message/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { savePetAsync } from '../../../../actions';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { isAuthorized } from '../../../../utils';

const petValidationSchema = yup.object().shape({
	photo: yup
		.mixed()
		.required('Фото обязательно')
		.test(
			'isValidFileOrUrl',
			'Файл должен быть изображением (jpg, jpeg, png) или ссылкой',
			(value) => {
				if (!value) return false;

				if (typeof value === 'string') {
					return value.startsWith('http://') || value.startsWith('https://');
				}

				return ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type);
			},
		),
	name: yup
		.string()
		.max(100, 'Имя не должно превышать 100 символов')
		.required('Введите имя питомца'),
	type: yup
		.string()
		.max(50, 'Тип не должен превышать 50 символов')
		.required('Введите тип питомца'),
	breed: yup
		.string()
		.max(100, 'Порода не должна превышать 100 символов')
		.nullable()
		.default(''),
	age: yup
		.number()
		.typeError('Возраст должен быть числом')
		.integer('Возраст должен быть целым числом')
		.min(0, 'Возраст не может быть отрицательным')
		.nullable(),
	weight: yup
		.number()
		.typeError('Вес должен быть числом')
		.min(0, 'Вес не может быть отрицательным')
		.nullable(),
	description: yup.string().nullable(),
});

export const PetForm = () => {
	const location = useLocation();
	const { id, photo, name, type, breed, weight, age, description } =
		location.state || {};
	const userId = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);
	const isEditing = !!useMatch('/editpet');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isAuth = isAuthorized(userRole);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(petValidationSchema),
		defaultValues: {
			photo: photo || '',
			name: name || '',
			type: type || '',
			breed: breed || '',
			age: age || null,
			weight: weight || null,
			description: description || '',
		},
	});

	const onSubmit = (data) => {
		console.log('Данные формы:', data);
		const serverUrl = isEditing ? `/api/pets/${id}` : '/api/pets';
		const method = isEditing ? 'PUT' : 'POST';

		dispatch(savePetAsync({ ...data, user_id: userId }, serverUrl, method)).then(
			(res) => {
				if (res) {
					navigate(`/profile/pets`);
				}
			},
		);
	};

	if (!isAuth) {
		navigate('/auth/login');
		return;
	}

	return (
		<div className={styles.container}>
			<FormBanner
				backgroundColor="#D96073"
				imageSrc="/public/img/create-edit-pet.png"
				justifyContent="start"
				backgroundImage="/public/img/bg-profile-edit.png"
			/>
			<div className={styles.form}>
				<h2>{isEditing ? 'Внесите изменения' : 'Добавьте своего питомца'}</h2>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FileInput
						register={register}
						setValue={setValue}
						defaultImage={photo}
					/>
					{errors.photo && (
						<ErrorMessage className={styles.error}>
							{errors.photo.message}
						</ErrorMessage>
					)}
					<Input
						type="text"
						placeholder="Введите имя вашего питомца"
						{...register('name')}
					/>
					{errors.name && (
						<ErrorMessage className={styles.error}>
							{errors.name.message}
						</ErrorMessage>
					)}
					<Input
						type="text"
						placeholder="Введите тип вашего питомца"
						{...register('type')}
					/>
					{errors.type && (
						<ErrorMessage className={styles.error}>
							{errors.type.message}
						</ErrorMessage>
					)}
					<Input
						type="text"
						placeholder="Введите породу вашего питомца"
						{...register('breed')}
					/>
					{errors.breed && (
						<ErrorMessage className={styles.error}>
							{errors.breed.message}
						</ErrorMessage>
					)}
					<Input
						type="number"
						placeholder="Укажите возвраст"
						{...register('age')}
					/>
					{errors.age && (
						<ErrorMessage className={styles.error}>
							{errors.age.message}
						</ErrorMessage>
					)}
					<Input
						type="number"
						placeholder="Укажите вес"
						{...register('weight')}
					/>
					{errors.weight && (
						<ErrorMessage className={styles.error}>
							{errors.weight.message}
						</ErrorMessage>
					)}
					<Input
						type="text"
						placeholder="Дополнительные сведения"
						{...register('description')}
					/>
					{errors.description && (
						<ErrorMessage className={styles.error}>
							{errors.description.message}
						</ErrorMessage>
					)}
					<GreenButton>Опубликовать</GreenButton>
				</Form>
			</div>
		</div>
	);
};
