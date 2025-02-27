import { useLocation } from 'react-router-dom';
import { Content, Header, Footer } from './components';

export const App = () => {
	const location = useLocation();

	const showHeaderFooter =
		location.pathname !== '/register' && location.pathname !== '/login';

	return (
		<>
			{showHeaderFooter && <Header />}
			<Content />
			{showHeaderFooter && <Footer />}
		</>
	);
};
