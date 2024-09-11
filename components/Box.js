import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({rounded}) => {
  /*return <View style={[styles.box, rounded ? styles.rounded : null]} />;*/
  return <View style={[styles.box, rounded && styles.rounded]} />;

  // 선별적으로 적용하고 싶을때, 옵션처럼 사용할 수 있다...! -> 속성 추가
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {width: 32, height: 32},
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

export default Box;
