import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignUp = () => {
  return (
    <SafeAreaView>
      <View className="p-5">
        <Text>SignUp</Text>
        <Link href={"/(auth)/sign-up"}></Link>

        <Link href="/(auth)/sign-in">Sign in</Link>
        <Link href="/">Home</Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
