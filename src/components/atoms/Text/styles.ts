import {TextStyle, StyleSheet} from 'react-native';
import ITheme from '../../theme/types';

export interface ITextStyles {
  defaultTextStyle: TextStyle;
  primaryS: TextStyle;
  primarySMedium: TextStyle;
  primarySBold: TextStyle;
  primary: TextStyle;
  primaryMedium: TextStyle;
  primaryBold: TextStyle;
  primaryM: TextStyle;
  primaryMMedium: TextStyle;
  primaryMBold: TextStyle;
  primaryL: TextStyle;
  primaryLMedium: TextStyle;
  primaryLBold: TextStyle;
  primaryXL: TextStyle;
  primaryXLMedium: TextStyle;
  primaryXLBold: TextStyle;
  primaryXXL: TextStyle;
  primaryXXLMedium: TextStyle;
  primaryXXLBold: TextStyle;
  primaryXXXLBold: TextStyle;
  secondaryS: TextStyle;
  secondarySMedium: TextStyle;
  secondarySBold: TextStyle;
  secondary: TextStyle;
  secondaryMedium: TextStyle;
  secondaryBold: TextStyle;
  secondaryM: TextStyle;
  secondaryMMedium: TextStyle;
  secondaryMBold: TextStyle;
  secondaryL: TextStyle;
  secondaryLMedium: TextStyle;
  secondaryLBold: TextStyle;
  secondaryXL: TextStyle;
  secondaryXLMedium: TextStyle;
  secondaryXLBold: TextStyle;
}

export default (theme: ITheme): ITextStyles =>
  StyleSheet.create({
    defaultTextStyle: {
      fontSize: 20,
    },
    primaryS: {
      color: theme.colors.primaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.small,
    },
    primarySMedium: {
      color: theme.colors.primaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.small,
    },
    primarySBold: {
      color: theme.colors.primaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.small,
    },
    primary: {
      color: theme.colors.primaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.normal,
    },
    primaryMedium: {
      color: theme.colors.primaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.normal,
    },
    primaryBold: {
      color: theme.colors.primaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.normal,
    },
    primaryM: {
      color: theme.colors.primaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.medium,
    },
    primaryMMedium: {
      color: theme.colors.primaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.medium,
    },
    primaryMBold: {
      color: theme.colors.primaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.medium,
    },
    primaryL: {
      color: theme.colors.primaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.large,
    },
    primaryLMedium: {
      color: theme.colors.primaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.large,
    },
    primaryLBold: {
      color: theme.colors.primaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.large,
    },
    primaryXL: {
      color: theme.colors.primaryText,
      fontWeight: '600',
      fontSize: theme.textSize.extraLarge,
    },
    primaryXLMedium: {
      color: theme.colors.primaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.extraLarge,
    },
    primaryXLBold: {
      color: theme.colors.primaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.extraLarge,
    },
    primaryXXL: {
      color: theme.colors.primaryText,
      fontWeight: '600',
      fontSize: theme.textSize.extraExtraLarge,
    },
    primaryXXLMedium: {
      color: theme.colors.primaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.extraExtraLarge,
    },
    primaryXXLBold: {
      color: theme.colors.primaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.extraExtraLarge,
    },
    primaryXXXLBold: {
      color: theme.colors.primaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.XXXLarge,
    },

    secondaryS: {
      color: theme.colors.secondaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.small,
    },
    secondarySMedium: {
      color: theme.colors.secondaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.small,
    },
    secondarySBold: {
      color: theme.colors.secondaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.small,
    },
    secondary: {
      color: theme.colors.secondaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.normal,
    },
    secondaryMedium: {
      color: theme.colors.secondaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.normal,
    },
    secondaryBold: {
      color: theme.colors.secondaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.normal,
    },
    secondaryM: {
      color: theme.colors.secondaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.medium,
    },
    secondaryMMedium: {
      color: theme.colors.secondaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.medium,
    },
    secondaryMBold: {
      color: theme.colors.secondaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.medium,
    },
    secondaryL: {
      color: theme.colors.secondaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.large,
    },
    secondaryLMedium: {
      color: theme.colors.secondaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.large,
    },
    secondaryLBold: {
      color: theme.colors.secondaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.large,
    },
    secondaryXL: {
      color: theme.colors.secondaryText,
      fontWeight: '600',
      fontStyle: 'normal',
      fontSize: theme.textSize.extraLarge,
    },
    secondaryXLMedium: {
      color: theme.colors.secondaryText,
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: theme.textSize.extraLarge,
    },
    secondaryXLBold: {
      color: theme.colors.secondaryText,
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: theme.textSize.extraLarge,
    },
  });
