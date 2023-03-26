import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import ITheme from '../../components/theme/types';

export interface IQuestionCardStyle {
  cardWrapper: ViewStyle;
  imageSectionStyle: ViewStyle;
  detailSectionStyle: ViewStyle;
  coverStyle: ViewStyle;
  coverImageStyle: ImageStyle;
  defaultCoverWrapperStyles: ViewStyle;
  titleStyles: TextStyle;
  descriptionStyle: TextStyle;
}

export default (theme: ITheme): IQuestionCardStyle =>
  StyleSheet.create({
    cardWrapper: {
      minHeight: 340,
      width: 'auto',
      borderRadius: theme.radius.squareRound,
      marginBottom: theme.margin.large,
      borderColor: theme.colors.activeTabColorDark,
      borderWidth: 1,
    },
    imageSectionStyle: {
      backgroundColor: theme.colors.secondaryDark,
      height: 200,
      borderTopRightRadius: theme.radius.squareRound,
      borderTopLeftRadius: theme.radius.squareRound,
    },
    detailSectionStyle: {
      backgroundColor: theme.colors.secondaryDark,
      borderBottomLeftRadius: theme.radius.squareRound,
      borderBottomRightRadius: theme.radius.squareRound,
    },
    coverStyle: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.inactiveLight,
      borderTopRightRadius: theme.radius.squareRound,
      borderTopLeftRadius: theme.radius.squareRound,
    },
    coverImageStyle: {
      borderTopRightRadius: theme.radius.squareRound,
      borderTopLeftRadius: theme.radius.squareRound,
    },
    defaultCoverWrapperStyles: {
      alignItems: 'center',
      position: 'relative',
      bottom: -12,
    },
    titleStyles: {
      fontSize: 24,
    },
    descriptionStyle: {
      fontSize: 18,
    },
  });
