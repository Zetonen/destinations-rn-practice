import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from 'app/navigation/RootNavigation';
import Animated, {FadeInDown} from 'react-native-reanimated';
import NavHeader from '../components/blocks/NavHeader';
import Button from '../components/UI/Button';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type Props = {
  route: DetailsScreenRouteProp;
};
const Detail = ({route}: Props) => {
  const {item} = route.params;
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <NavHeader />
      <View>
        <View>
          <Animated.Image
            sharedTransitionTag={item.name}
            source={item.image}
            style={{width, height: width}}
          />
          <Animated.View
            style={styles.textContainer}
            entering={FadeInDown.delay(600)}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitle}>{item.location}</Text>
          </Animated.View>
        </View>
        <Animated.View
          style={styles.descriptionContainer}
          entering={FadeInDown.delay(800)}>
          <Text style={styles.textAbout}>About</Text>
          <Text style={styles.text}>{item.about}</Text>
        </Animated.View>
      </View>
      <Button />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  textContainer: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  descriptionContainer: {
    padding: 10,
    gap: 10,
  },
  textAbout: {
    color: '#333333',
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    color: '#333333',
    fontSize: 16,
    textAlign: 'justify',
  },
});
