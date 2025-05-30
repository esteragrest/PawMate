import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectService } from '../../../../../selectors';
import { useEffect, useLayoutEffect } from 'react';
import { loadServiceAsync, RESET_SERVICE_DATA } from '../../../../../actions';
import styles from './service.module.css';
import { ApplicationForm, ServiceContent } from './components';

export const Service = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const service = useSelector(selectService);

	useLayoutEffect(() => {
		dispatch(RESET_SERVICE_DATA);
	}, [dispatch]);

	useEffect(() => {
		dispatch(loadServiceAsync(params.serviceId));
	}, [dispatch, params.serviceId]);
	return (
		<div className={styles['service-container']}>
			<ServiceContent service={service} />
			<ApplicationForm />
		</div>
	);
};
