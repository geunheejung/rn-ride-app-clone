import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';
import Complete from './Complete';

const Stack = createNativeStackNavigator();

export default function Delivery() {
  return (
    <Stack.Navigator initialRouteName="Ing">
      {/* 지도 마커 -> 완료 처리 시 지도 위에 -> 완료 스택 화면 */}
      {/* 지도 로딩 시간 및 렌더링 시간 고려. */}
      <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen name="Complete" component={Complete} />
    </Stack.Navigator>
  );
}
