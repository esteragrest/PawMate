import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProfileHeader } from './profile-header/ProfileHeader';
import { ProfileNavigation } from './profile-navigation/ProfileNavigation';
import styles from './profile.module.css';
import { useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { isAuthorized, request } from '../../../../utils';

export const Profile = () => {
	const [userData, setUserData] = useState(null);
	const [userPets, setUserPets] = useState([]);
	const [userServices, setUserServices] = useState([]);
	const [userForumPosts, setUserForumPosts] = useState([]);
	const userRole = useSelector(selectUserRole);
	const userId = useSelector(selectUserId);
	const navigate = useNavigate();

	const isAuth = isAuthorized(userRole);

	useEffect(() => {
		if (!isAuth) {
			navigate('/auth/login');
			return;
		}

		request(`/api/profiles/${userId}`).then((data) => {
			if (data.error) {
				console.log(data.error);
				return;
			}

			setUserData(data);
			setUserPets(data.pets);
			setUserServices(data.services);
			setUserForumPosts(data.posts);
		});
	}, [navigate, isAuth, userId]);

	return (
		<div className={styles['profile-container']}>
			{userData && (
				<>
					<ProfileHeader userData={userData} />
					<hr />
					<ProfileNavigation />
					<div className={styles['profile-options']}>
						<Outlet context={{ userPets, userForumPosts, userServices }} />
					</div>
				</>
			)}
		</div>
	);
};
