import * as React from 'react';
import {readRecord} from './localStorageService';
import { darkTheme, ThemeProvider } from '../theme';

export interface IAppContext{
    clockDisplay: string;
    clockModes: {
        hours12: string;
        hours24: string;
    },
    colors: {
        color1: string,
    };
    interfaceColor: string;
    nav: {
        chatTabLabel: string,
        settingsTabLabel: string
    };

    resetButtonLabel: string;
    userName: string;
    ctrlEnterOptionsTitle: string;
    ctrlEnterSendingOptions: {
        option1: string;
        option2: string;
    }
    changeLanguage: () => void;
}

const context = React.createContext<IAppContext | any>(null);
const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;

export default class TranslationProvider extends React.Component {
    public state = {
        colorTheme: readRecord('theme') !== 'dark' ? darkTheme : darkTheme
    };
    public render() {
        const {colorTheme} = this.state;

        return (
            <AppContextProvider value={{
                state: this.state,
                changeTheme: this.changeTheme,
            }}>
                <ThemeProvider theme={colorTheme}>
                    {this.props.children as any}
                </ThemeProvider>
            </AppContextProvider>
        )
    }
    private changeTheme = () => {
        this.setState({
            colorTheme: this.state.colorTheme === darkTheme ? darkTheme : darkTheme
        });
    };
}