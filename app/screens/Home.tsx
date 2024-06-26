import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import data from '../data/data';
import RenderItem from '../components/UI/RenderItem';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Popular Destinations</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f1f1',
  },
  text: {
    fontSize: 34,
    marginHorizontal: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
});
