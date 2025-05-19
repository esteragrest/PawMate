import { useOutletContext } from 'react-router-dom';
import { ServicesList } from '../../../services-list/ServicesList';

export const UserServices = () => {
	const { userServices } = useOutletContext();

	return userServices.length === 0 ? (
		<h3>Здесь пока еще нет записей</h3>
	) : (
		<ServicesList services={userServices} />
	);
};
