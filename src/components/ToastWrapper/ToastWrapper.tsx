import React, {FC} from 'react';
import {useWindowDimensions} from 'react-native';

import {ToastProvider} from 'react-native-toast-notifications';
import {IToastWrapper} from './types';
import * as Icon from 'react-native-feather';
import {useTheme} from '../theme/themeProvider';

const ToastWrapper: FC<IToastWrapper> = (props: IToastWrapper) => {
  const {children} = props;
  const theme = useTheme();
  const {width} = useWindowDimensions();

  return (
    <ToastProvider
      placement="top"
      duration={4000}
      animationType="slide-in"
      animationDuration={250}
      successColor={theme.colors.success}
      dangerColor={theme.colors.danger}
      warningColor={theme.colors.pending}
      normalColor={theme.colors.inactive}
      successIcon={<Icon.Check color={'#ffff'} />}
      dangerIcon={<Icon.XCircle color={'#ffff'} />}
      warningIcon={<Icon.AlertCircle color={'#ffff'} />}
      textStyle={{
        fontSize: theme.textSize.normal,
        marginLeft: theme.margin.small,
      }}
      offset={50}
      offsetTop={50}
      offsetBottom={40}
      swipeEnabled
      style={{
        width,
        justifyContent: 'center',
        borderRadius: theme.radius.round,
        paddingStart: 20,
        paddingEnd: 20,
      }}>
      {children}
    </ToastProvider>
  );
};

export default ToastWrapper;
