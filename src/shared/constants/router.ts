export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => '/articles/' + id
export const getRouteArticleCreate = () => '/articles/create'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteAdminPanel = () => '/admin'
export const getRouteForbidden = () => '/forbidden'