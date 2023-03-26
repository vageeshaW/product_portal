import { TextStyle, ViewStyle } from 'react-native';

import { ReactNode } from 'react';

export interface ICustomButton {
  buttonText?: string;
  buttonType?: ButtonType;
  icon?: ReactNode;
  style?: ViewStyle | TextStyle;
  buttonTextStyle?: TextStyle;
  isLoading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

export enum ButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK_BUTTON = 'linkButton',
  BACK_BUTTON = 'backButton',
}
