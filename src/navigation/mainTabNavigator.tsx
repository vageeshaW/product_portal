import React from 'react';
import {Platform, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/home';

import NavigationScreens from '../constants/navigationScreens';
import {TabObject} from '../shared/types';
import styles from './styles';
import {useTheme} from '../components/theme/themeProvider';
import SettingsScreen from '../containers/settings';
import * as Icon from 'react-native-feather';

const AllTabs: TabObject[] = [
  {
    screenName: NavigationScreens.homeStack.HOME,
    component: HomeScreen,
    labelKey: 'Home',
    iconName: <Icon.Home />,
  },
  {
    screenName: NavigationScreens.settingsStack.SETTINGS,
    component: SettingsScreen,
    labelKey: 'Settings',
    iconName: <Icon.Settings />,
  },
];

const MainTabs = createBottomTabNavigator();
const MainTabNavigator = () => {
  const theme = useTheme();
  const themeStyles = styles(theme);
  return (
    <MainTabs.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarHideOnKeyboard: Platform.OS === 'android',
        headerShown: false,
        unmountOnBlur: true,
      }}>
      {AllTabs.map(tab => (
        <MainTabs.Screen
          key={tab.labelKey}
          name={tab.screenName}
          options={() => ({
            tabBarLabel: () => (
              <View style={themeStyles.tabBarLabel}>
                {/* <Text type={TextType.PRIMARY_S} text={tab.screenName} /> */}
              </View>
            ),
            tabBarStyle: themeStyles.tabBarStyle,
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  {
                    backgroundColor: focused
                      ? theme.colors.activeTabColor
                      : theme.colors.secondary,
                  },
                  themeStyles.tabIconWrapper,
                ]}>
                {tab.iconName}
              </View>
            ),
          })}
          component={tab.component}
        />
      ))}
    </MainTabs.Navigator>
  );
};

export default MainTabNavigator;
