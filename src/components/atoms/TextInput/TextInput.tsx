import React, {FC} from 'react';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AutoCapitalizeTypes, ITextInput} from './types';
import styles from './styles';
import {useTheme} from '../../theme/themeProvider';
import Text from '../Text/Text';
import {TextType} from '../Text/types';
import * as Icon from 'react-native-feather';

const CustomTextInput: FC<ITextInput> = ({
  textInputStyle,
  autoCorrect,
  secureTextEntry,
  placeholder,
  leftIcon,
  rightIcon,
  error,
  disabled,
  inputContainerStyle,
  keyboardType,
  value,
  onChangeText,
  autoCapitalize,
  onPressRightIcon,
  leftText,
  autoFocus,
  maxLength,
  isMarginLeftNotAvailable,
}: ITextInput) => {
  const theme = useTheme();
  const themeStyles = styles(theme);

  return (
    <View style={inputContainerStyle}>
      <TouchableWithoutFeedback>
        <View style={themeStyles.inputContainer}>
          {leftIcon}
          {leftText && (
            <Text
              text={leftText}
              type={TextType.PRIMARY}
              textStyle={themeStyles.leftTextStyle}
            />
          )}
          <TextInput
            style={[
              isMarginLeftNotAvailable
                ? themeStyles.inputWithoutMarginLeftStyle
                : themeStyles.inputStyle,
              textInputStyle,
            ]}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.secondaryTextLight}
            editable={!disabled}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            autoCapitalize={autoCapitalize || AutoCapitalizeTypes.NONE}
            maxLength={maxLength}
            allowFontScaling={false}
          />
          {rightIcon && (
            <View>
              <TouchableOpacity
                style={themeStyles.rightIconStyle}
                onPress={onPressRightIcon}>
                {rightIcon}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
      {error && (
        <View style={themeStyles.errorContainer}>
          <View>
            <Icon.AlertCircle />
          </View>
          <View style={{marginLeft: 10}}>
            <Text
              text={error}
              textStyle={themeStyles.errorText}
              type={TextType.SECONDARY_M}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;
