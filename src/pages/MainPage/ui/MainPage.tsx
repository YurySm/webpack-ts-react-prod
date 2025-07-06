import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная')}
            <VStack>
                <ListBox
                    defaultValue={ 'Выберите значение' }
                    onChange={ (value: string) => {} }
                    items={ [
                        {
                            value: 'dsfdf',
                            content: 'dsfdf',
                        },
                        {
                            value: 'sdsdfd',
                            content: 'dsfsdfsddf',
                        },
                        {
                            value: 'wqwe',
                            content: 'dsfqweedf',
                        },
                    ] }
                />

            </VStack>
        </Page>
    )
};

export default MainPage;
