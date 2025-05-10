import { Outlet } from 'react-router';
import styles from './profile.module.css';
import { useEffect, useState } from 'react';
import { USER_INFO } from '../../user-info';
import { ProfileHeader } from './profile-header/ProfileHeader';

export const Profile = () => {
	const [userData, setUserData] = useState({});
	const [pets, setPets] = useState([]);
	const [services, setServices] = useState({});
	const [forumPosts, setForumPosts] = useState({});

	useEffect(() => {
		setUserData(USER_INFO);
		setPets(USER_INFO.pets);
		setServices(USER_INFO.services);
		setForumPosts(USER_INFO.forumPosts);
	}, []);

	return (
		<div className={styles['profile-container']}>
			<ProfileHeader userData={userData} />
			<hr />
			<Outlet />
		</div>
	);
};
