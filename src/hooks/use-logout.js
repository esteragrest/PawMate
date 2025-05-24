import { useDispatch } from 'react-redux';
import { LOGOUT } from '../actions';

export const useLogout = () => {
	const dispatch = useDispatch();

	return () => {
		dispatch(LOGOUT);
		sessionStorage.removeItem('userData');
	};
};
