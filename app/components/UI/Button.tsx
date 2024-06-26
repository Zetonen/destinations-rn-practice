import {Text, useWindowDimensions, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';

const Button = () => {
  const {width} = useWindowDimensions();
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      style={[
        styles.container,
        {
          width: width * 0.9,
        },
      ]}
      entering={FadeInDown.delay(1000)}
      onPress={() => console.log('Booking Now!')}>
      <Text style={styles.text}>Booking Now!</Text>
    </AnimatedPressable>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c6cce',
    padding: 22,
    alignItems: 'center',
    borderRadius: 40,
    margin: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
