import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Button, ButtonType} from '../../components/atoms/Button';
import {TextInput} from '../../components/atoms/TextInput';
import * as Icon from 'react-native-feather';
import {Text, TextType} from '../../components/atoms/Text';
import NavigationScreens from '../../constants/navigationScreens';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {logIn} from '../../services/onboardingService';
import useStore from '../../store';
import {IResponse} from '../../services/types';
import {useToast} from 'react-native-toast-notifications';
import {ToasterType} from '../../shared/types';

const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const allUsers = useStore(state => state.users);
  const setLogUser = useStore(state => state.setUser);
  const changeLoginStatus = useStore(state => state.changeLoginStatus);

  const navigateToSignUpScreen = () => {
    navigation.navigate(NavigationScreens.signUpStack.SIGN_UP);
  };

  const handleLogIn = async () => {
    setIsLoading(true);
    const inputData = {
      userName,
      password,
    };
    if (userName !== '' && password !== '') {
      const response: IResponse = (await logIn(
        inputData,
        allUsers,
      )) as IResponse;
      if (response.success) {
        toast.show(response.message, {
          type: ToasterType.SUCCESS,
        });
        setIsLoading(false);
        changeLoginStatus(true);
        setLogUser(response.data.id, response.data.name);
      } else {
        toast.show(response.message, {
          type: ToasterType.DANGER,
        });
        setIsLoading(false);
        changeLoginStatus(false);
      }
    } else {
      toast.show('Fill all Inputs', {
        type: ToasterType.WARNING,
      });
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{margin: 20, flex: 1}}>
      <Text
        type={TextType.PRIMARY_L_BOLD}
        text={'Login'}
        textStyle={{marginVertical: 24}}
      />
      <TextInput
        placeholder="Email"
        leftIcon={<Icon.Mail width={12} height={12} />}
        onChangeText={value => {
          setUserName(value);
        }}
      />
      <TextInput
        placeholder="Password"
        leftIcon={<Icon.Lock width={12} height={12} />}
        //secureTextEntry
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <Button
        buttonType={ButtonType.PRIMARY}
        buttonText={'Login'}
        disabled={isLoading}
        onPress={() => {
          handleLogIn();
        }}
        isLoading={isLoading}
      />

      <Button
        buttonType={ButtonType.LINK_BUTTON}
        buttonText={"Don't have and account"}
        onPress={navigateToSignUpScreen}
        //  style={themeStyles.linkButton}
        //  disabled={isLoading || !isOnline}
        // buttonTextStyle={{color: theme.colors.primary}}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
