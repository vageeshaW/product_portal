import { StyleSheet, ViewStyle } from 'react-native';
import { ITheme } from '../..';

export interface ILoaderStyle {
  container: ViewStyle;
}

export default (theme: ITheme): ILoaderStyle =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.transparent,
    },
  });
