import React, {FC} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Text, TextType} from '../Text';
import {ButtonType, ICustomButton} from './types';
import styles, {IButtonStyle} from './styles';
import {LoaderSize} from '../Loader/types';
import {useTheme} from '../../theme/themeProvider';
import * as Icon from 'react-native-feather';

const getButtonStyleByType = (
  buttonType: ButtonType | undefined,
  themeStyles: IButtonStyle,
) => {
  switch (buttonType) {
    case ButtonType.PRIMARY: {
      return themeStyles.primaryButtonStyle;
    }
    case ButtonType.SECONDARY: {
      return themeStyles.secondaryButtonStyle;
    }
    case ButtonType.LINK_BUTTON: {
      return themeStyles.linkButtonStyle;
    }
    default: {
      return themeStyles.defaultButtonStyle;
    }
  }
};

const getButtonTextColorByType = (
  buttonType: ButtonType | undefined,
  themeStyles: IButtonStyle,
) => {
  switch (buttonType) {
    case ButtonType.PRIMARY: {
      return themeStyles.primaryButtonTextStyle;
    }
    case ButtonType.SECONDARY: {
      return themeStyles.secondaryButtonTextStyle;
    }
    case ButtonType.LINK_BUTTON: {
      return themeStyles.linkButtonTextStyle;
    }
    default: {
      return themeStyles.defaultButtonTextStyle;
    }
  }
};

const Button: FC<ICustomButton> = ({
  buttonText,
  buttonType,
  icon,
  style,
  buttonTextStyle,
  onPress,
  isLoading,
  disabled,
}: ICustomButton) => {
  const theme = useTheme();
  const themeStyles = styles(theme);
  if (buttonType === ButtonType.BACK_BUTTON) {
    return (
      <TouchableOpacity
        style={
          disabled
            ? themeStyles.disabledBackButtonContainer
            : themeStyles.backButtonContainer
        }
        onPress={onPress}
        disabled={disabled}>
        <View style={themeStyles.backButtonStyle}>
          <View style={themeStyles.buttonWrapper}>
            <Icon.ArrowUpLeft color={theme.colors.secondary} />
            <Text
              text="Back"
              type={TextType.SECONDARY_S}
              textStyle={{color: '#ffff'}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        disabled
          ? themeStyles.disabledButtonContainerMain
          : themeStyles.buttonContainerMain,
        getButtonStyleByType(buttonType, themeStyles),
        style,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {buttonType === ButtonType.LINK_BUTTON ? (
        <Text
          type={TextType.PRIMARY_MEDIUM}
          text={buttonText || ''}
          textStyle={[
            getButtonTextColorByType(buttonType, themeStyles),
            buttonTextStyle,
          ]}
        />
      ) : (
        <View style={themeStyles.buttonContainer}>
          {isLoading ? (
            <View style={themeStyles.primaryButtonWithSpinner}>
              <Text
                type={TextType.PRIMARY_MEDIUM}
                text={buttonText || ''}
                textStyle={[
                  getButtonTextColorByType(buttonType, themeStyles),
                  buttonTextStyle,
                ]}
              />
              <ActivityIndicator
                size={LoaderSize.SMALL}
                color={theme.colors.secondary}
                style={themeStyles.loaderStyles}
              />
            </View>
          ) : (
            <>
              {icon ? <View style={themeStyles.icon}>{icon}</View> : null}
              <Text
                type={TextType.PRIMARY_MEDIUM}
                text={buttonText || ''}
                textStyle={[
                  getButtonTextColorByType(buttonType, themeStyles),
                  buttonTextStyle,
                ]}
              />
            </>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
