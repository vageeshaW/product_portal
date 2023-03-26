import {FlatList, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStore from '../../store';
import {ProductCard} from '../../components/ProductCard';

const HomeScreen = () => {
  const products = useStore(state => state.products);
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <ScrollView>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ProductCard
              name={item.name}
              description={item.description}
              coverImage={item.url}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
ScrollView;
