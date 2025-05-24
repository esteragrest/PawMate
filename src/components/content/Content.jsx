import {
	Article,
	Articles,
	Authorization,
	ForumContent,
	MainPage,
	Registration,
	ServicesContent,
	Profile,
	UserServices,
	UserForumPosts,
	UserPets,
	ProfileEdit,
	PetForm,
	ServiceForm,
} from './components';
import { Routes, Route } from 'react-router-dom';

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
			<Route path="/newservice" element={<ServiceForm />} />
			<Route path="/editservice" element={<ServiceForm />} />
			<Route path="/profile/*" element={<Profile />}>
				<Route path="pets" element={<UserPets />} />
				<Route path="forum" element={<UserForumPosts />} />
				<Route path="services" element={<UserServices />} />
			</Route>
			<Route path="/editprofile" element={<ProfileEdit />} />
			<Route path="/newpet" element={<PetForm />} />
			<Route path="/editpet/:petId" element={<PetForm />} />
			<Route path="*" element={<div>Ошибка 404</div>} />
		</Routes>
	);
};
