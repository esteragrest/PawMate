import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Content, Header, Footer } from './components';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';

export const App = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser({ ...currentUserData }));
	}, [dispatch]);

	const showHeaderFooter =
		location.pathname !== '/auth/register' && location.pathname !== '/auth/login';

	return (
		<>
			{showHeaderFooter && <Header />}
			<Content />
			{showHeaderFooter && <Footer />}
		</>
	);
};
