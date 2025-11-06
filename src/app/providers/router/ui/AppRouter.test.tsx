import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';


describe('AppRouter', () => {
    beforeAll(() => {
        class ResizeObserver {
            observe() {}
            unobserve() {}
            disconnect() {}
        }
        global.ResizeObserver = ResizeObserver;
    });
    test('проверка рендера страницы о нас', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout()
        });

        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('рендер страницы не найдено', async () => {
        componentRender(<AppRouter />, {
            route: '/asdfasdasdfasdfasdf'
        });

        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })

    test('редирект не авторизированного пользователя на главную страницу', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1')
        });

        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })

    test('доступ авторизированного пользователя к защищенной странице', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        });

        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })

    test('доступ запрещен (не подходит роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })

    test('доступ разрешен (правильная роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRole.ADMIN]
                    }
                }
            }
        });

        const page = await screen.findByTestId('AdminPanelPage')
        expect(page).toBeInTheDocument()
    })
})