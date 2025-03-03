export {
    Profile,
    ProfileSchema
} from './model/types/profile';

export {
    profileActions,
    profileReducer
} from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileDate/fetchProfileDate';

export { ProfileCard } from './ui/ProfileCard/ProfileCard'

export { getProfileData } from './model/selectors/getProfileData/getProfileData'
export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading'
export { getProfileError } from './model/selectors/getProfileError/getProfileError'
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
