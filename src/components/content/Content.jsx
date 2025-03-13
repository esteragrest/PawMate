import { Authorization, MainPage, Registration } from './components';
import { Routes, Route } from 'react-router';

export const Content = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/auth/register" element={<Registration />} />
			<Route path="/auth/login" element={<Authorization />} />
			<Route path="/forum" element={<div>Обсуждение</div>} />
			<Route path="/forum/:postId" element={<div>Одно обсуждение</div>} />
			<Route path="/articles" element={<div>Статьи</div>} />
			<Route path="/articles/:articleId" element={<div>Одна статья</div>} />
			<Route path="/services" element={<div>Улсуги</div>} />
			<Route path="/services/:serviceId" element={<div>Одна услуга</div>} />
			<Route path="/newservice" element={<div>Добавление услуги</div>} />
			<Route path="/editservice" element={<div>Редактирование услуги</div>} />
			<Route path="/profile" element={<div>Профиль</div>} />
			<Route path="/editprofile" element={<div>Редактирование профиля</div>} />
			<Route path="/newpet" element={<div>Добавление питомца</div>} />
			<Route path="*" element={<div>Ошибка 404</div>} />
		</Routes>
	);
};
