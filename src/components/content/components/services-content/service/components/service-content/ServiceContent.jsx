import { AuthorDetails } from '../../../../../../author-details/AuthorDetails';
import PropTypes from 'prop-types';
import { OptionItem } from '../service-options/option-item/OptionItem';
import { ServiceOptions } from '../service-options/ServiceOptions';
import { ControlButton } from '../../../../button';
import styles from './service-content.module.css';
import { useNavigate } from 'react-router-dom';
import { checkAccessRights, request } from '../../../../../../../utils';
import { useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../../../../../selectors';

export const ServiceContent = ({
	service: {
		id,
		title,
		description,
		photo,
		serviceOwnerFirstName,
		serviceOwnerLastName,
		serviceOwnerPhoto,
		userId,
		address,
		price,
		userEmail,
	},
}) => {
	const navigate = useNavigate();
	const currentUserId = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);

	const onEdit = () => {
		navigate(`/editservice/${id}`, {
			state: {
				id,
				title,
				description,
				photo,
				address,
				price,
				userEmail,
			},
		});
	};

	const onDelete = () => {
		request(`/api/services/${id}`, 'DELETE').then((res) => {
			if (res.message) {
				navigate(-1);
			}
		});
	};

	const isAccess = checkAccessRights(userId, currentUserId, userRole);

	return (
		<div className={styles['service-content-container']}>
			<div className={styles['service-header']}>
				<img className={styles['service-img']} src={photo} alt={title} />
				<div>
					<div className={styles['control-panel']}>
						<h3>{title}</h3>
						{isAccess && (
							<>
								<ControlButton onClick={onEdit}>
									<img src="/public/img/edit.svg" alt="edit" />
								</ControlButton>
								<ControlButton onClick={onDelete}>
									<img src="/public/img/delete.svg" alt="delete" />
								</ControlButton>
							</>
						)}
					</div>
					<AuthorDetails
						photo={serviceOwnerPhoto}
						firstName={serviceOwnerFirstName}
						lastName={serviceOwnerLastName}
						createdAt="15.02.2025"
					/>
					<OptionItem optionName="Цена:" description={price} />
				</div>
			</div>
			<ServiceOptions
				options={[
					{ optionName: 'Описание:', description },
					{ optionName: 'Адрес:', description: address },
					{ optionName: 'Контакты для связи:', description: userEmail },
				]}
			/>
		</div>
	);
};

ServiceContent.propTypes = {
	service: PropTypes.object.isRequired,
};
