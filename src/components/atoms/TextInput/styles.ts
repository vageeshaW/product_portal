import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
import ITheme from '../../theme/types';

export interface ITextInputStyles {
  inputContainer: ViewStyle;
  inputStyle: ViewStyle;
  inputWithoutMarginLeftStyle: ViewStyle;
  errorContainer: ViewStyle;
  errorText: ViewStyle;
  leftTextStyle: TextStyle;
  rightIconStyle: TextStyle;
}
const styles = (theme: ITheme): ITextInputStyles =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
      backgroundColor: theme.colors.TextInputBackgroundColor,
      paddingLeft: theme.margin.large,
      paddingRight: theme.margin.large,
      color: theme.colors.primaryTextDark,
      borderRadius: 10,
      borderColor: theme.colors.inactive,
      borderWidth: 1,
      fontWeight: theme.fontWeight.large,
      alignItems: 'center',
      marginBottom: theme.margin.medium,
    },
    inputStyle: {
      flex: 1,
      fontSize: theme.textSize.normal,
      marginLeft: theme.margin.small,
      color: theme.colors.primary,
    },
    inputWithoutMarginLeftStyle: {
      flex: 1,
      fontSize: theme.textSize.normal,
      color: theme.colors.primary,
    },
    errorContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: theme.margin.small,
      backgroundColor: theme.colors.activePale,
      paddingTop: 17,
      paddingBottom: 17,
      paddingLeft: theme.margin.large,
      paddingRight: 36,
    },
    errorText: {
      backgroundColor: theme.colors.activePale,
      color: theme.colors.secondary,
      fontSize: 12,
    },
    leftTextStyle: {
      marginLeft: 4,
    },
    rightIconStyle: {
      height: '100%',
      width: '100%',
      paddingHorizontal: '1%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;
