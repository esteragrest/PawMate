import { useMatch, useNavigate } from 'react-router-dom';
import { FileInput } from '../../../file-input/FileInput';
import { Form } from '../../../form/Form';
import { Input } from '../../../input/Input';
import { GreenButton } from '../button';
import { useEffect, useState } from 'react';
import { AddressPicker } from './address-picker/AddressPicker';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './service-form.module.css';
import { ErrorMessage } from '../../../error-message/ErrorMessage';
import { isAuthorized } from '../../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectService, selectUserId, selectUserRole } from '../../../../selectors';
import { saveServiceAsync } from '../../../../actions';

const schema = yup.object().shape({
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
	title: yup.string().required('Заголовок обязателен'),
	description: yup.string().required('Описание обязательно'),
	price: yup
		.number()
		.typeError('Цена должна быть числом')
		.required('Цена обязательна')
		.positive('Цена должна быть положительной'),
	user_email: yup.string().email('Неверный формат email').required('Email обязателен'),
	address: yup.string().required('Адрес обязателен'),
});

export const ServiceForm = () => {
	const [showModal, setShowModal] = useState(false);
	const [serverError, setServerError] = useState('');
	const isEditing = !!useMatch('/editservice');
	const userRole = useSelector(selectUserRole);
	const userId = useSelector(selectUserId);
	const service = useSelector(selectService);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const isAuth = isAuthorized(userRole);

	useEffect(() => {
		if (isEditing && service) {
			setValue('title', service.title);
			setValue('description', service.description);
			setValue('price', service.price);
			setValue('user_email', service.userEmail);
			setValue('address', service.address);
		}
	}, [isEditing, service, setValue]);

	const onSubmit = (serviceFormData) => {
		const serverUrl = isEditing ? `/api/services/${service.id}` : '/api/services';
		const method = isEditing ? 'PUT' : 'POST';

		dispatch(
			saveServiceAsync({ ...serviceFormData, user_id: userId }, serverUrl, method),
		).then((data) => {
			if (data) {
				navigate(`/services/${data}`);
			}
		});
	};

	if (!isAuth) {
		navigate('/auth/login');
		return;
	}

	return (
		<div className={styles['create-service-container']}>
			<div className={styles['bg-create-service-left']}></div>
			<div className={styles['create-service-form']}>
				<h3>
					{isEditing
						? 'Отредактируйте объявление'
						: 'Оставьте свое предложение'}
				</h3>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FileInput
						register={register}
						setValue={setValue}
						defaultImage={isEditing ? service.photo : null}
					/>
					<Input
						type="text"
						name="title"
						id="title"
						placeholder="Введите заголовок"
						{...register('title')}
					/>
					{errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

					<Input
						type="text"
						name="description"
						id="description"
						placeholder="Опишите подробнее"
						{...register('description')}
					/>
					{errors.description && (
						<ErrorMessage>{errors.description.message}</ErrorMessage>
					)}

					<Input
						type="number"
						name="price"
						id="price"
						placeholder="Укажите цену"
						{...register('price')}
					/>
					{errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}

					<Input
						type="email"
						name="user_email"
						id="user_email"
						placeholder="Введите Вашу почту для связи"
						{...register('user_email')}
					/>
					{errors.user_email && (
						<ErrorMessage>{errors.user_email.message}</ErrorMessage>
					)}

					<Input
						type="text"
						name="address"
						id="address"
						placeholder="Укажите адрес"
						onClick={() => setShowModal(!showModal)}
						{...register('address')}
					/>
					{errors.address && (
						<ErrorMessage>{errors.address.message}</ErrorMessage>
					)}

					{serverError && <ErrorMessage>{serverError}</ErrorMessage>}

					<GreenButton>Опубликовать</GreenButton>
				</Form>
			</div>
			<div className={styles['bg-create-service-right']}></div>
			<div className={styles['bg-create-service']}></div>

			<AddressPicker
				showModal={showModal}
				setShowModal={setShowModal}
				setMainAddress={(value) => setValue('address', value)}
			/>
		</div>
	);
};
