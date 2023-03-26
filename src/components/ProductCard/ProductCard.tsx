import React, {FC, useLayoutEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../theme/themeProvider';

import styles from './styles';
import {IProductCard} from './types';

const ProductCard: FC<IProductCard> = (props: IProductCard) => {
  const {name, description, coverImage, onPress} = props;
  const theme = useTheme();
  const themeStyles = styles(theme);

  const [onLoadImage, setLoadImage] = useState(false);

  const imageLoading = () => {
    if (!onLoadImage) {
      setLoadImage(true);
    }
  };

  useLayoutEffect(() => {
    setLoadImage(false);
  }, []);

  return (
    <TouchableOpacity style={themeStyles.cardWrapper} onPress={onPress}>
      <View style={themeStyles.imageSectionStyle}>
        <ImageBackground
          source={
            onLoadImage
              ? {uri: coverImage}
              : require('../../assets/Images/loading.gif')
          }
          resizeMode="cover"
          style={themeStyles.coverStyle}
          imageStyle={themeStyles.coverImageStyle}
          onLoad={() => {
            imageLoading();
          }}
        />
      </View>
      <View style={themeStyles.detailSectionStyle}>
        <View>
          <Text style={themeStyles.titleStyles}> {name}</Text>
          <Text style={themeStyles.descriptionStyle}> {description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
