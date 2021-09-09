import * as styledComponents from 'styled-components';

const {
    default: styled,
    css, keyframe, ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface{
    primaryLightColor: string;
    secondaryLightColor: string;
    primaryDarkColor: string;
    secondaryDarkColor: string;
    messageBackgroundColor: string;
}

export const darkTheme = {
    primaryLightColor: '#e9e9b',
    secondaryLightColor: '#777777',
    primaryDarkColor: '1#e5266',
    secondaryDarkColor: '#111111',
    messageBackgroundColor: '#3d3d3c',
}