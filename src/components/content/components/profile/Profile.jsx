import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { USER_INFO } from '../../user-info';
import { ProfileHeader } from './profile-header/ProfileHeader';
import { ProfileNavigation } from './profile-navigation/ProfileNavigation';
import styles from './profile.module.css';

export const Profile = () => {
	const [userData, setUserData] = useState({});
	const [userPets, setUserPets] = useState([]);
	const [userServices, setUserServices] = useState([]);
	const [userForumPosts, setUserForumPosts] = useState([]);

	useEffect(() => {
		setUserData(USER_INFO);
		setUserPets(USER_INFO.pets);
		setUserServices(USER_INFO.services);
		setUserForumPosts(USER_INFO.forumPosts);
	}, []);

	return (
		<div className={styles['profile-container']}>
			<ProfileHeader userData={userData} />
			<hr />
			<ProfileNavigation />
			<div className={styles['profile-options']}>
				<Outlet context={{ userPets, userForumPosts, userServices }} />
			</div>
		</div>
	);
};
