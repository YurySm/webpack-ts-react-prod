import { Action } from '@reduxjs/toolkit';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from  '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetailSlice';
import { ArticleBlockType, ArticleType } from '../../model/consts/consts';

const data: Article = {
    'id': '1',
    'title': 'Javascript news',
    'subtitle': 'Что нового в JS в 2025?',
    'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png',
    'views': 123,
    'createdAt': '15.03.2025',
    'user': {
        'id': '1',
        'username': 'max_admin',
        'avatar': 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
    },
    'type': [ArticleType.IT],
    'blocks': [
        {
            'id': '1',
            'type': ArticleBlockType.TEXT,
            'title': 'Заголовок этого блока',
            'paragraphs': [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
            ]
        },
        {
            'id': '4',
            'type': ArticleBlockType.CODE,
            'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
            'id': '2',
            'type': ArticleBlockType.IMAGE,
            'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            'title': 'Рисунок 1 - скриншот сайта'
        },
    ]
}

describe('articleSlice', () => {
    test('fetchArticleById.pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error'
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending as unknown as Action,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined
        });
    });

    test('fetchArticleById.fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data:undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '1', '') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            data,
        });
    });

    test('fetchArticleById.rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data:undefined,
            error: undefined
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected(new Error(), '', '1', 'error') as unknown as Action,
            ),
        ).toEqual({
            isLoading: false,
            data:undefined,
            form:undefined,
            error: 'error'
        });
    });
});
