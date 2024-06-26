import {StyleSheet, Platform, Image, Pressable} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootNavigation';
import Animated, {FadeIn} from 'react-native-reanimated';

const NavHeader = () => {
  const inset = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Animated.View
      entering={FadeIn.delay(400)}
      style={[styles.container, {top: Platform.OS === 'ios' ? inset.top : 20}]}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../../assets/images/chevron.png')}
          style={styles.chevron}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../../assets/images/like.png')}
          style={styles.chevron}
        />
      </Pressable>
    </Animated.View>
  );
};

export default NavHeader;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  chevron: {
    height: 44,
    width: 44,
  },
});
