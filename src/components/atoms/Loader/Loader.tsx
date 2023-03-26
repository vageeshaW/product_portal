import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from '../../theme/themeProvider';

import styles from './styles';
import {ILoader, LoaderSize} from './types';

const Loader: FC<ILoader> = ({color, size}: ILoader) => {
  const theme = useTheme();
  const themeStyles = styles(theme);
  return (
    <View style={themeStyles.container}>
      <ActivityIndicator
        color={color || theme.colors.activeTabColor}
        size={size || LoaderSize.LARGE}
      />
    </View>
  );
};
export default Loader;
