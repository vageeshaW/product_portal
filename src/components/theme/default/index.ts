import ITheme from '../types';

const DefaultTheme: ITheme = {
  name: 'DefaultTheme',
  colors: {
    transparent: 'transparent',
    primary: '#11142D',
    secondary: '#ffff',
    secondaryDark: '#F4F5F6',
    success: '#49CAA3',
    danger: '#E65E75',
    pending: '#FFC261',
    inactive: '#9B9CA4',
    inactiveLight: '#E6E8EC',
    active: '#3772FF',
    activePale: '#585FDD',
    activeLight: '#E1E2FA',
    primaryTheme: '#88C6E9',
    primaryThemeLight: '#D1CCF5',
    secondaryTheme: '#FFA4E0',
    secondaryThemeLight: '#f0e9f7',
    primaryText: '#11142D',
    primaryTextLight: '#353945',
    primaryTextDark: '#11142D',
    secondaryText: '#808191',
    secondaryTextLight: '#B2B3BD',
    secondaryTextDark: '#4B4A4A',
    secondaryTextPale: '#777E90',
    darkTextColor: '#000000',
    lightTextColor: '#FFFFFF',
    TextInputBackgroundColor: '#F7F7F7',
    primaryRadioButton: '#3772FF',
    activeTabColor: '#E7ECFF',
    activeTabColorDark: '#D8D8EE',
    activeTabColorLight: '#E9EAF8',
    phoneInputSplit: '#b5b5b5',
  },
  textSize: {
    small: 12,
    normal: 14,
    medium: 16,
    large: 18,
    extraLarge: 32,
    extraExtraLarge: 36,
    XXXLarge: 85,
  },
  radius: {
    oval: 34,
    squareRound: 16,
    round: 10,
    square: 4,
  },
  lineHeight: {
    small: 10,
    medium: 12,
    large: 14,
  },
  fontWeight: {
    small: '300',
    medium: '400',
    large: '500',
    extraLarge: '600',
    XXLarge: '700',
  },
  fontFamily: {
    regular: 'Manrope-Regular',
    medium: 'Manrope-Medium',
    bold: 'Manrope-Bold',
  },
  margin: {
    extraSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 24,
    XXLarge: 32,
    XXXLarge: 36,
  },
  padding: {
    extraSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 20,
    XXLarge: 24,
  },
};

export default DefaultTheme;
