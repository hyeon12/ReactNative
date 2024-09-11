import React from 'react';
import {View, Text, Button} from 'react-native';

const Greeting = props => {
  return (
    <>
      <View>
        <Text>안녕하세요, {props?.name ?? '기본 이름'}입니다...</Text>
      </View>
      <Button title="확인"></Button>
    </>
  );
};

/*
최근에는 defaultProps 오류 뜨는 경우O -> 안전하게.. ?? 사용하기
Greeting.defaultProps = {
  name: '기본 이름',
};*/

export default Greeting;
