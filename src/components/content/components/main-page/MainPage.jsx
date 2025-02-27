import { Banner, Capabilities, Greeting, Reasons } from './components';

export const MainPage = () => {
	return (
		<>
			<Greeting />
			<Capabilities />
			<Reasons />
			<Banner />
		</>
	);
};
