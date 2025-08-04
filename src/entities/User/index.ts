export { userReducer, userActions } from './model/slice/userSlece';
export { UserRole } from '@/entities/User/model/consts/consts';

export type {
    User,
    UserSchema
} from './model/types/user';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    getUserRoles,
    isUserAdmin,
    isUserManager
} from './model/selectors/roleSelectors'



