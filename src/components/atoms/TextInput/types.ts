import {ReactNode} from 'react';
import {TextStyle, ViewStyle, KeyboardTypeOptions} from 'react-native';

export interface ITextInput {
  textInputStyle?: ViewStyle | TextStyle;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string | null;
  disabled?: boolean;
  inputContainerStyle?: ViewStyle;
  keyboardType?: KeyboardTypeOptions;
  value?: string | undefined | null;
  autoCapitalize?: AutoCapitalizeTypes;
  onChangeText?: (value: string) => void;
  onPressRightIcon?: () => void;
  leftText?: string;
  autoFocus?: boolean;
  maxLength?: number;
  isMarginLeftNotAvailable?: boolean;
  onFocus?: any;
}

export enum AutoCapitalizeTypes {
  NONE = 'none',
  SENTENCES = 'sentences',
  WORDS = 'words',
  CHARACTERS = 'characters',
}
