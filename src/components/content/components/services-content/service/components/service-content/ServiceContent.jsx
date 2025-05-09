import { AuthorDetails } from '../../../../../../author-details/AuthorDetails';
import PropTypes from 'prop-types';
import styles from './service-content.module.css';
import { OptionItem } from '../service-options/option-item/OptionItem';
import { ServiceOptions } from '../service-options/ServiceOptions';

export const ServiceContent = ({
	service: {
		title,
		description,
		photo,
		serviceOwnerFirstName,
		serviceOwnerLastName,
		serviceOwnerPhoto,
		address,
		price,
		userEmail,
	},
}) => {
	return (
		<div className={styles['service-content-container']}>
			<div className={styles['service-header']}>
				<img className={styles['service-img']} src={photo} alt={title} />
				<div>
					<h3>{title}</h3>
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
