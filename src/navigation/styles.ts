import {Platform, StyleSheet, ViewStyle} from 'react-native';
import ITheme from '../components/theme/types';

export interface IViewWrapperStyles {
  tabIconWrapper: ViewStyle;
  tabBarStyle: ViewStyle;
  tabBarLabel: ViewStyle;
}

export default (theme: ITheme): IViewWrapperStyles =>
  StyleSheet.create({
    tabIconWrapper: {
      height: 40,
      width: Platform.OS === 'android' ? 60 : 65,
      borderRadius: theme.radius.round,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    tabBarStyle: {
      borderTopWidth: 0,
      elevation: 0,
      height: Platform.OS === 'android' ? 80 : 100,
      paddingTop: Platform.OS === 'android' ? theme.margin.small : 0,
      paddingHorizontal: 60,
    },
    tabBarLabel: {
      marginTop: theme.margin.extraSmall,
      marginBottom: Platform.OS === 'android' ? 4 : 0,
    },
  });
