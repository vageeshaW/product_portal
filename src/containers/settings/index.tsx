import React, {useEffect, useLayoutEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from '../../components/atoms/TextInput';
import * as Icon from 'react-native-feather';
import {Text, TextType} from '../../components/atoms/Text';
import {Button, ButtonType} from '../../components/atoms/Button';
import {logOut} from '../../services/onboardingService';
import {ToasterType} from '../../shared/types';
import {useToast} from 'react-native-toast-notifications';
import useStore from '../../store';
import {IResponse} from '../../services/types';
import {IUsers} from '../../store/types';
import {getUser} from '../../services/userService';

const SettingsScreen = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  //const [userData, setUserData] = useState<IUsers>();
  const changeLoginStatus = useStore(state => state.changeLoginStatus);
  const clearLogUser = useStore(state => state.clearUser);
  const allUsers = useStore(state => state.users);
  const loggedUser = useStore(state => state.user);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  const handleLogOut = async () => {
    setIsLoading(true);
    const response: IResponse = (await logOut()) as IResponse;
    if (response.success) {
      toast.show(response.message, {
        type: ToasterType.SUCCESS,
      });
      setIsLoading(false);
      changeLoginStatus(false);
      clearLogUser();
    } else {
      toast.show(response.message, {
        type: ToasterType.DANGER,
      });
      setIsLoading(false);
      changeLoginStatus(true);
    }
  };

  useEffect(() => {
    const userId = loggedUser.id;
    const user = allUsers.find(u => u.id === userId);
    if (user) {
      setName(user?.name);
      setAddress(user?.address);
      setPostCode(user?.password);
      setCountry(user?.country);
      setCity(user?.city);
      setEmail(user?.email);
    }

    console.log(user);
  }, []);

  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <Text
        type={TextType.PRIMARY_L_BOLD}
        text={'Profile Details'}
        textStyle={{marginVertical: 24}}
      />
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
        value={name}
      />
      <TextInput
        placeholder="Address"
        leftIcon={<Icon.Navigation width={12} height={12} />}
        onChangeText={value => {
          setAddress(value);
        }}
        value={address}
      />
      <TextInput
        placeholder="Post Code"
        leftIcon={<Icon.Layers width={12} height={12} />}
        onChangeText={value => {
          setPostCode(value);
        }}
        value={postCode}
      />
      <TextInput
        placeholder="City"
        leftIcon={<Icon.MapPin width={12} height={12} />}
        onChangeText={value => {
          setCity(value);
        }}
        value={city}
      />
      <TextInput
        placeholder="Country"
        leftIcon={<Icon.Map width={12} height={12} />}
        onChangeText={value => {
          setCountry(value);
        }}
        value={country}
      />
      <TextInput
        placeholder="Email"
        leftIcon={<Icon.Mail width={12} height={12} />}
        onChangeText={value => {
          setEmail(value);
        }}
        value={email}
      />

      <Button
        buttonType={ButtonType.PRIMARY}
        buttonText={'Update'}
        //  disabled={isLoading}
        onPress={() => {
          //  handleLogIn();
        }}
        // isLoading={isLoading}
      />

      <Button
        buttonType={ButtonType.SECONDARY}
        buttonText={'LogOut'}
        disabled={isLoading}
        style={{marginTop: 30}}
        onPress={() => {
          handleLogOut();
        }}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
