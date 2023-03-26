import {Text} from 'react-native';

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import NavigationScreens from '../../constants/navigationScreens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useStore from '../../store';
import {Loader} from 'react-native-feather';

const InitScreen = () => {
  console.log('Init');
  const isLoggedIn = useStore(state => state.isLoggedIn);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  console.log(useStore(state => state));

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate(NavigationScreens.homeTabs);
    } else {
      navigation.navigate(NavigationScreens.loginStack.LOGIN);
    }
  }, [isLoggedIn, navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Loader />
    </SafeAreaView>
  );
};

export default InitScreen;
