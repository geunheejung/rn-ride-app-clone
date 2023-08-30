import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type IngProps = NativeStackScreenProps<ParamListBase, 'Ing'>;

export default function Ing({navigation}: IngProps) {
  return (
    <View>
      <Text>Ing</Text>

      <Pressable
        onPress={() => {
          navigation.navigate('Complete');
        }}>
        <Text>완료</Text>
      </Pressable>
    </View>
  );
}
