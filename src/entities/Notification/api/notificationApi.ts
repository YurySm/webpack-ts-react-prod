import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotificationsList: build.query<Notification[], void>({
            query: () => ({
                url: '/notifications'
            }),
        }),
    })
})

export const { useGetNotificationsListQuery } = notificationApi
