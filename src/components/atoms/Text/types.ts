import {ReactNode} from 'react';
import {TextStyle} from 'react-native';

export interface IText {
  text?: string | ReactNode;
  textStyle?: TextStyle | Array<TextStyle | undefined>;
  type?: TextType;
  numberOfLines?: number;
  onPress?: () => void;
  children?: ReactNode;
}

export enum TextType {
  DEFAULT_TEXT_STYLE = 'defaultTextStyle',
  PRIMARY_S = 'primaryS',
  PRIMARY_S_MEDIUM = 'primarySMedium',
  PRIMARY_S_BOLD = 'primarySBold',
  PRIMARY = 'primary',
  PRIMARY_MEDIUM = 'primaryMedium',
  PRIMARY_BOLD = 'primaryBold',
  PRIMARY_M = 'primaryM',
  PRIMARY_M_MEDIUM = 'primaryMMedium',
  PRIMARY_M_BOLD = 'primaryMBold',
  PRIMARY_L = 'primaryL',
  PRIMARY_L_MEDIUM = 'primaryLMedium',
  PRIMARY_L_BOLD = 'primaryLBold',
  PRIMARY_XL = 'primaryXL',
  PRIMARY_XL_MEDIUM = 'primaryXLMedium',
  PRIMARY_XL_BOLD = 'primaryXLBold',
  PRIMARY_XXL = 'primaryXXL',
  PRIMARY_XXL_MEDIUM = 'primaryXXLMedium',
  PRIMARY_XXL_BOLD = 'primaryXXLBold',
  PRIMARY_XXXL_BOLD = 'primaryXXXLBold',
  SECONDARY_S = 'secondaryS',
  SECONDARY_S_MEDIUM = 'secondarySMedium',
  SECONDARY_S_BOLD = 'secondarySBold',
  SECONDARY = 'secondary',
  SECONDARY_MEDIUM = 'secondaryMedium',
  SECONDARY_BOLD = 'secondaryBold',
  SECONDARY_M = 'secondaryM',
  SECONDARY_M_MEDIUM = 'secondaryMMedium',
  SECONDARY_M_BOLD = 'secondaryMBold',
  SECONDARY_L = 'secondaryL',
  SECONDARY_L_MEDIUM = 'secondaryLMedium',
  SECONDARY_L_BOLD = 'secondaryLBold',
  SECONDARY_XL = 'secondaryXL',
  SECONDARY_XL_MEDIUM = 'secondaryXLMedium',
  SECONDARY_XL_BOLD = 'secondaryXLBold',
}
