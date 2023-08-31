import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {ReactNode} from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

interface DismissKeyboardViewProps extends KeyboardAwareScrollViewProps {
  children: ReactNode;
}

const DismissKeyboardView = ({
  children,
  ...props
}: DismissKeyboardViewProps) => {
  return (
    //  Keyboard 이벤트를 제어하는 모듈, dismiss() 활성 키보드를 닫고 포커스를 제거함.
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView {...props} style={props.style}>
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardView;
