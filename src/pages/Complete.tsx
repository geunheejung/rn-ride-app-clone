import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';

export default function Complete() {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <View>
      <Text>{isComplete ? '수령 완료' : '수령 대기'}</Text>
      <Pressable
        onPress={() => {
          setIsComplete(true);
        }}>
        <Text>수령</Text>
      </Pressable>
    </View>
  );
}
