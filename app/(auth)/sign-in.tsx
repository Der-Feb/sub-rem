import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView>
      <View className="p-5">
        <Text>signIn</Text>
        <Link href="/(auth)/sign-up">Create Account</Link>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
