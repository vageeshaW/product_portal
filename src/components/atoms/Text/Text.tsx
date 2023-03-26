import React, {FC} from 'react';
import {Text} from 'react-native';
import {IText, TextType} from './types';
import styles, {ITextStyles} from './styles';
import {useTheme} from '../../theme/themeProvider';

const getFontStyleForType = (type: TextType, themeStyles: ITextStyles) => {
  switch (type) {
    case TextType.PRIMARY_S:
      return themeStyles.primaryS;
    case TextType.PRIMARY_S_MEDIUM:
      return themeStyles.primarySMedium;
    case TextType.PRIMARY_S_BOLD:
      return themeStyles.primarySBold;
    case TextType.PRIMARY:
      return themeStyles.primary;
    case TextType.PRIMARY_MEDIUM:
      return themeStyles.primaryMedium;
    case TextType.PRIMARY_BOLD:
      return themeStyles.primaryBold;
    case TextType.PRIMARY_M:
      return themeStyles.primaryM;
    case TextType.PRIMARY_M_MEDIUM:
      return themeStyles.primaryMMedium;
    case TextType.PRIMARY_M_BOLD:
      return themeStyles.primaryMBold;
    case TextType.PRIMARY_L:
      return themeStyles.primaryL;
    case TextType.PRIMARY_L_MEDIUM:
      return themeStyles.primaryLMedium;
    case TextType.PRIMARY_L_BOLD:
      return themeStyles.primaryLBold;
    case TextType.PRIMARY_XL:
      return themeStyles.primaryXL;
    case TextType.PRIMARY_XL_MEDIUM:
      return themeStyles.primaryXLMedium;
    case TextType.PRIMARY_XL_BOLD:
      return themeStyles.primaryXLBold;
    case TextType.PRIMARY_XXL:
      return themeStyles.primaryXXL;
    case TextType.PRIMARY_XXL_MEDIUM:
      return themeStyles.primaryXXLMedium;
    case TextType.PRIMARY_XXL_BOLD:
      return themeStyles.primaryXXLBold;
    case TextType.PRIMARY_XXXL_BOLD:
      return themeStyles.primaryXXXLBold;
    case TextType.SECONDARY_S:
      return themeStyles.secondaryS;
    case TextType.SECONDARY_S_MEDIUM:
      return themeStyles.secondarySMedium;
    case TextType.SECONDARY_S_BOLD:
      return themeStyles.secondarySBold;
    case TextType.SECONDARY:
      return themeStyles.secondary;
    case TextType.SECONDARY_MEDIUM:
      return themeStyles.secondaryMedium;
    case TextType.SECONDARY_BOLD:
      return themeStyles.secondaryBold;
    case TextType.SECONDARY_M:
      return themeStyles.secondaryM;
    case TextType.SECONDARY_M_MEDIUM:
      return themeStyles.secondaryMMedium;
    case TextType.SECONDARY_M_BOLD:
      return themeStyles.secondaryMBold;
    case TextType.SECONDARY_L:
      return themeStyles.secondaryL;
    case TextType.SECONDARY_L_MEDIUM:
      return themeStyles.secondaryLMedium;
    case TextType.SECONDARY_L_BOLD:
      return themeStyles.secondaryLBold;
    case TextType.SECONDARY_XL:
      return themeStyles.secondaryXL;
    case TextType.SECONDARY_XL_MEDIUM:
      return themeStyles.secondaryXLMedium;
    case TextType.SECONDARY_XL_BOLD:
      return themeStyles.secondaryXLBold;
    default:
      return themeStyles.defaultTextStyle;
  }
};

const CustomText: FC<IText> = ({
  text,
  textStyle,
  type = TextType.DEFAULT_TEXT_STYLE,
  numberOfLines,
  onPress,
  children,
}: IText) => {
  const theme = useTheme();
  const themeStyles = styles(theme);
  return (
    <Text
      style={[
        themeStyles.defaultTextStyle,
        getFontStyleForType(type, themeStyles),
        textStyle,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
      allowFontScaling={false}>
      {text}
      {children}
    </Text>
  );
};

export default CustomText;
