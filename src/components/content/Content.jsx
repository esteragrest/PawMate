import {
	Article,
	Articles,
	Authorization,
	ForumContent,
	MainPage,
	Registration,
	ServicesContent,
	Profile,
} from './components';
import { Routes, Route } from 'react-router';

export const Content = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/auth/register" element={<Registration />} />
			<Route path="/auth/login" element={<Authorization />} />
			<Route path="/forum" element={<ForumContent />} />
			<Route path="/forum/:postId" element={<ForumContent />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/articles/:articleId" element={<Article />} />
			<Route path="/services" element={<ServicesContent />} />
			<Route path="/services/:serviceId" element={<ServicesContent />} />
			<Route path="/newservice" element={<div>Добавление услуги</div>} />
			<Route path="/editservice" element={<div>Редактирование услуги</div>} />
			<Route path="/profile/*" element={<Profile />}>
				<Route path="pets" element={<div>питомцы</div>} />
				<Route path="questions" element={<div>вопросы</div>} />
				<Route path="services" element={<div>услуги</div>} />
			</Route>
			<Route path="/editprofile" element={<div>Редактирование профиля</div>} />
			<Route path="/newpet" element={<div>Добавление питомца</div>} />
			<Route path="*" element={<div>Ошибка 404</div>} />
		</Routes>
	);
};
