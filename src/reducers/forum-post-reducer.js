import { ACTION_TYPE } from '../actions/action-type';

const initialForumPostState = {
	id: '',
	postOwnerId: '',
	postOwnerFirstName: '',
	postOwnerLastName: '',
	postOwnerPhoto: '',
	title: '',
	content: '',
	createdAt: '',
	comments: [],
};

export const forumPostReducer = (state = initialForumPostState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_FORUM_POST_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case ACTION_TYPE.RESET_FORUM_POST_DATA: {
			return initialForumPostState;
		}
		default:
			return state;
	}
};
