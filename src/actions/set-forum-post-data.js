import { ACTION_TYPE } from './action-type';

export const setForumPostData = (forumPostData) => ({
	type: ACTION_TYPE.SET_FORUM_POST_DATA,
	payload: forumPostData,
});
