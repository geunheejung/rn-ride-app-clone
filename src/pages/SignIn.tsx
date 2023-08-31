import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import DismissKeyboardView from '../components/DismissKeyboardView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignIn({navigation}: SignInScreenProps) {
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);

  const onSubmit = useCallback(() => {
    if (!email) {
      return Alert.alert('알림', '이메일을 입력해주세요.');
    }

    if (!password) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }

    Alert.alert('알림', '로그인 되었습니다.');
  }, [email, password]);

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const canGoNext = useMemo(() => email && password, [email, password]);

  return (
    <DismissKeyboardView>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeEmail}
          placeholder="이메일을 입력해주세요"
          placeholderTextColor="#666"
          // 안드로이드 에서 자동 완성 목적, 앱의 개별 필드를 뷰 구조에 포함해야 하는지 여부. yes: 자동 완성 중요
          importantForAutofill="yes"
          // 자동 완성 기능을 제공할 수 있도록 힌트 제공.
          autoComplete="email"
          // iOS 사용자가 입력하는 콘텐츠에 대한 예상되는 의미 정보를 키보드, 시스템에 제공.
          textContentType="emailAddress"
          value={email}
          // Return 키의 모양을 결정한다.
          returnKeyType="next"
          // 텍스트 뷰의 오른쪽에 지우기 버튼이 나타나야 하는 경우. -> 단일 TextInput 구성 요소에만 지원.
          clearButtonMode="while-editing"
          ref={emailRef}
          // 텍스트 입력의 제출 버튼을 눌렀을 때 호출되는 콜백이다.
          onSubmitEditing={() => passwordRef.current?.focus()}
          // true => 제출 시 텍스트 필드가 흐려짐.
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
          placeholderTextColor="#666"
          importantForAutofill="yes"
          onChangeText={onChangePassword}
          value={password}
          autoComplete="password"
          textContentType="password"
          // true: 텍스트 입력 시 입력된 텍스트가 가려져 비밀번호와 같
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={passwordRef}
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          style={
            canGoNext
              ? StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
              : styles.loginButton
          }
          disabled={!canGoNext}
          onPress={onSubmit}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={toSignUp}>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
    </DismissKeyboardView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 5,
    // 가장 얇은, 눈에 보이는.
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputWrapper: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
