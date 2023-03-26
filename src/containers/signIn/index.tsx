import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Text, TextType} from '../../components/atoms/Text';

import {TextInput} from '../../components/atoms/TextInput';
import * as Icon from 'react-native-feather';
import {Button, ButtonType} from '../../components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import NavigationScreens from '../../constants/navigationScreens';
import {signIn} from '../../services/onboardingService';
import useStore from '../../store';
import {IResponse} from '../../services/types';
import {ToasterType} from '../../shared/types';
import {useToast} from 'react-native-toast-notifications';

const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const allUsers = useStore(state => state.users);
  const addUsers = useStore(state => state.addUsers);

  const navigateToSignUpScreen = () => {
    navigation.navigate(NavigationScreens.loginStack.LOGIN);
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    const inputData = {
      id: Date.now(),
      name,
      address,
      postCode,
      city,
      country,
      email,
      password,
    };
    if (
      name !== '' &&
      address !== '' &&
      postCode !== '' &&
      city !== '' &&
      country !== '' &&
      email !== '' &&
      password !== ''
    ) {
      const response: IResponse = (await signIn(
        inputData,
        allUsers,
      )) as IResponse;
      if (response.success) {
        toast.show(response.message, {
          type: ToasterType.SUCCESS,
        });
        setIsLoading(false);
        addUsers(response.data);
        navigation.navigate(NavigationScreens.loginStack.LOGIN);
      } else {
        toast.show(response.message, {
          type: ToasterType.DANGER,
        });
        setIsLoading(false);
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
        text={'Sign Up'}
        textStyle={{marginVertical: 24}}
      />
      <TextInput
        placeholder="Name"
        leftIcon={<Icon.User width={12} height={12} />}
        onChangeText={value => {
          setName(value);
        }}
      />
      <TextInput
        placeholder="Address"
        leftIcon={<Icon.Navigation width={12} height={12} />}
        onChangeText={value => {
          setAddress(value);
        }}
      />
      <TextInput
        placeholder="Post Code"
        leftIcon={<Icon.Layers width={12} height={12} />}
        onChangeText={value => {
          setPostCode(value);
        }}
      />
      <TextInput
        placeholder="City"
        leftIcon={<Icon.MapPin width={12} height={12} />}
        onChangeText={value => {
          setCity(value);
        }}
      />
      <TextInput
        placeholder="Country"
        leftIcon={<Icon.Map width={12} height={12} />}
        onChangeText={value => {
          setCountry(value);
        }}
      />
      <TextInput
        placeholder="Email"
        leftIcon={<Icon.Mail width={12} height={12} />}
        onChangeText={value => {
          setEmail(value);
        }}
      />
      <TextInput
        placeholder="Password"
        leftIcon={<Icon.Lock width={12} height={12} />}
        secureTextEntry
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <Button
        buttonType={ButtonType.PRIMARY}
        buttonText={'Sign In'}
        disabled={isLoading}
        onPress={() => {
          handleSignIn();
        }}
        isLoading={isLoading}
      />
      <Button
        buttonType={ButtonType.LINK_BUTTON}
        buttonText={'Already Have an Account'}
        onPress={navigateToSignUpScreen}
        //  style={themeStyles.linkButton}
        //  disabled={isLoading || !isOnline}
        // buttonTextStyle={{color: theme.colors.primary}}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
