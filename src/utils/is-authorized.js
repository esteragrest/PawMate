import { ROLE } from '../constants';

export const isAuthorized = (userRole) => userRole !== ROLE.GUEST;
