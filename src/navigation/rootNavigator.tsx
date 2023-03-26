import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../containers/login';
import SignUpScreen from '../containers/signIn';
import NavigationScreens from '../constants/navigationScreens';
import InitScreen from '../containers/init';
import MainTabNavigator from './mainTabNavigator';

const RootStack = createNativeStackNavigator();

// Need to have common config file ( header styles , header config )
const RootNavigator = (props: any) => (
  <RootStack.Navigator
    headerMode="none"
    {...props}
    initialRouteName={NavigationScreens.init}
    screenOptions={{
      headerTitleAlign: 'center',
      headerShown: false,
      gestureEnabled: false,
    }}>
    <RootStack.Screen name={NavigationScreens.init} component={InitScreen} />
    <RootStack.Screen
      name={NavigationScreens.homeTabs}
      component={MainTabNavigator}
    />
    <RootStack.Screen
      name={NavigationScreens.signUpStack.SIGN_UP}
      component={SignUpScreen}
      options={{
        headerShown: false,
      }}
    />

    <RootStack.Screen
      name={NavigationScreens.loginStack.LOGIN}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
