export default interface ITheme {
  name: string;
  colors: {
    transparent: string;
    primary: string;
    secondary: string;
    secondaryDark: string;
    success: string;
    danger: string;
    pending: string;
    inactive: string;
    inactiveLight: string;
    active: string;
    activeLight: string;
    activePale: string;
    primaryTheme: string;
    primaryThemeLight: string;
    secondaryTheme: string;
    secondaryThemeLight: string;
    primaryText: string;
    primaryTextLight: string;
    primaryTextDark: string;
    secondaryText: string;
    secondaryTextLight: string;
    secondaryTextDark: string;
    secondaryTextPale: string;
    TextInputBackgroundColor: string;
    primaryRadioButton: string;
    darkTextColor: string;
    lightTextColor: string;
    activeTabColor: string;
    activeTabColorDark: string;
    activeTabColorLight: string;
    phoneInputSplit: string;
  };
  textSize: {
    small: number;
    normal: number;
    medium: number;
    large: number;
    extraLarge: number;
    extraExtraLarge: number;
    XXXLarge: number;
  };
  lineHeight: {
    small: number;
    medium: number;
    large: number;
  };
  radius: {
    oval: number;
    squareRound: number;
    round: number;
    square: number;
  };
  fontWeight: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    XXLarge: string;
  };
  fontFamily: {
    regular: string;
    medium: string;
    bold: string;
  };
  margin: {
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    XXLarge: number;
    XXXLarge: number;
  };
  padding: {
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    XXLarge: number;
  };
}
