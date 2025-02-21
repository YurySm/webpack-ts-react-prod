import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

export const $api = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {
		Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY)
	}
})