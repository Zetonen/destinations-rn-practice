import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Data} from '../../data/data';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootNavigation';

type Props = {
  item: Data;
  index: number;
};

const RenderItem = ({item, index}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Animated.View entering={FadeInRight.delay(200 * index)}>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate('Detail', {item});
        }}>
        <Animated.Image
          sharedTransitionTag={item.name}
          source={item.image}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>{item.location}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    flexShrink: 1,
    padding: 20,
    gap: 10,
  },
  title: {
    color: '#333333',
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    color: '#333333',
    fontSize: 18,
  },
});
