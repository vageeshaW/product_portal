import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ITheme} from '../..';

export interface IButtonStyle {
  buttonContainerMain: ViewStyle;
  disabledButtonContainerMain: ViewStyle;
  buttonContainer: TextStyle;
  buttonText: TextStyle;
  icon: ViewStyle;
  defaultButtonStyle: ViewStyle;
  primaryButtonStyle: ViewStyle;
  secondaryButtonStyle: ViewStyle;
  linkButtonStyle: ViewStyle;
  primaryButtonTextStyle: TextStyle;
  secondaryButtonTextStyle: TextStyle;
  linkButtonTextStyle: TextStyle;
  defaultButtonTextStyle: TextStyle;
  backButtonStyle: ViewStyle;
  backButtonContainer: ViewStyle;
  buttonWrapper: ViewStyle;
  primaryButtonWithSpinner: ViewStyle;
  loaderStyles: ViewStyle;
  disabledBackButtonContainer: ViewStyle;
}

export default (theme: ITheme): IButtonStyle =>
  StyleSheet.create({
    buttonContainerMain: {
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: theme.radius.round,
      height: 50,
      flexDirection: 'row',
    },
    disabledButtonContainerMain: {
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: theme.radius.round,
      height: 50,
      opacity: 0.4,
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      textAlignVertical: 'center',
      textAlign: 'center',
    },
    linkButtonStyle: {
      opacity: 0.7,
      textAlign: 'center',
      alignSelf: 'center',
    },
    icon: {
      marginRight: 10,
    },
    defaultButtonStyle: {
      backgroundColor: theme.colors.inactive,
    },
    primaryButtonStyle: {
      backgroundColor: theme.colors.primary,
    },
    secondaryButtonStyle: {
      backgroundColor: theme.colors.inactive,
    },
    disabledBackButtonContainer: {
      width: 79,
      height: 32,
      borderRadius: 64,
      flexDirection: 'row',
      marginBottom: 18,
      opacity: 0.4,
      alignSelf: 'flex-start',
      display: 'flex',
      justifyContent: 'center',
    },
    backButtonContainer: {
      width: 79,
      height: 32,
      borderRadius: 64,
      flexDirection: 'row',
      marginBottom: 18,
      alignSelf: 'flex-start',
      display: 'flex',
      justifyContent: 'center',
    },
    backButtonStyle: {
      width: 79,
      height: 32,
      borderRadius: 64,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButtonTextStyle: {
      color: theme.colors.secondary,
      fontSize: theme.textSize.normal,
    },
    secondaryButtonTextStyle: {
      color: theme.colors.primary,
      fontSize: theme.textSize.normal,
    },
    linkButtonTextStyle: {
      color: theme.colors.secondaryTextDark,
      fontSize: theme.textSize.normal,
    },
    defaultButtonTextStyle: {
      color: theme.colors.primary,
      fontSize: theme.textSize.normal,
    },
    buttonWrapper: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: -4,
    },
    primaryButtonWithSpinner: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderStyles: {
      marginLeft: 8,
    },
  });
