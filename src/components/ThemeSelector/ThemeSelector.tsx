import * as React from 'react';
import RadioGroup from '../common/RadioGroup'
import StyledThemeSelector from './StyledThemeSelector';
import {readRecord, storeToLocalStorage} from '../../utilities/localStorageService';
import { IAppContext } from '../../utilities/TranslationsProvider';

class ThemeSelector extends React.Component<{translations: IAppContext, changeTheme: () => void}>{
    public render() {
        const {translations} = this.props;
        return (
            <StyledThemeSelector>

            </StyledThemeSelector>
        )
    }
}