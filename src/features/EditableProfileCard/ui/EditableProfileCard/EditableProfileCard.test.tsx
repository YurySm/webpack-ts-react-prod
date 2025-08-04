import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { EditableProfileCard } from './EditableProfileCard';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { profileReducer } from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    username: 'test',
    firstName: 'Test',
    lastName: 'Test',
    age: 35,
    city: 'Moscow',
    currency: Currency.RUB,
    country: Country.Russia
}

jest.mock('entities/Currency', () => ({
    ...jest.requireActual('entities/Currency'),
    CurrencySelect: ({ value, onChange }: any) => (
        <select data-testid="CurrencySelect" value={ value } onChange={ (e) => onChange(e.target.value) }>
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
    ),
}));

jest.mock('entities/Country', () => ({
    ...jest.requireActual('entities/Country'),
    CountrySelect: ({ value, onChange }: any) => (
        <select data-testid="CountrySelect" value={ value } onChange={ (e) => onChange(e.target.value) }>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Armenia">Armenia</option>
            <option value="Kazakhstan">Kazakhstan</option>
        </select>
    ),
}));

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'test',
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('EditableProfileCard', () => {
    test('рендер без initialState', () => {
        componentRender(<EditableProfileCard id="1" />);
        expect(screen.getByTestId('EditableProfileCard')).toBeInTheDocument();
    });

    test('Режим readonly переключается', async () => {
        componentRender(<EditableProfileCard id={ '1' }/>, options);

        const user = userEvent.setup()
        await user.click(await screen.findByTestId('EditableProfileCardHeader.EditButton'))
        expect(await screen.findByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения обнуляются', async () => {
        componentRender(<EditableProfileCard id={ '1' }/>, options);

        const user = userEvent.setup()
        await user.click(await screen.findByTestId('EditableProfileCardHeader.EditButton'))

        await user.clear(await screen.findByTestId('ProfileCard.FirstName'))
        await user.clear(await screen.findByTestId('ProfileCard.LastName'))

        await user.type(await screen.findByTestId('ProfileCard.FirstName'), 'user')
        await user.type(await screen.findByTestId('ProfileCard.LastName'), 'user')

        expect(await screen.findByTestId('ProfileCard.FirstName')).toHaveValue('user')
        expect(await screen.findByTestId('ProfileCard.LastName')).toHaveValue('user')

        await user.click(await screen.findByTestId('EditableProfileCardHeader.CancelButton'))

        expect(await screen.findByTestId('ProfileCard.FirstName')).toHaveValue('Test')
        expect(await screen.findByTestId('ProfileCard.LastName')).toHaveValue('Test')
    });

    test('Должна появится ошибка', async () => {
        componentRender(<EditableProfileCard id={ '1' }/>, options);

        const user = userEvent.setup()
        await user.click(await screen.findByTestId('EditableProfileCardHeader.EditButton'))

        await user.clear(await screen.findByTestId('ProfileCard.FirstName'))

        await user.click(await screen.findByTestId('EditableProfileCardHeader.SaveButton'))

        expect(await screen.findByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    });

    test('Ошибок нет, отправляется запрос на изменение', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={ '1' }/>, options);

        const user = userEvent.setup()
        await user.click(await screen.findByTestId('EditableProfileCardHeader.EditButton'))

        await user.clear(await screen.findByTestId('ProfileCard.FirstName'))

        await user.type(await screen.findByTestId('ProfileCard.FirstName'), 'User')

        await user.click(await screen.findByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    });
});
