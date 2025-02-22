import { Content } from './components';
import { Header } from './components';

const Footer = () => <div>Футер</div>;

export const App = () => {
	return (
		<>
			<Header />
			<Content />
			<Footer />
		</>
	);
};
