import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const onboarding = () => {
  return (
    <SafeAreaView>
      <View className="p-5">
        <Text>Onboarding</Text>

        <Link href="/">Go to Home</Link>
      </View>
    </SafeAreaView>
  );
};

export default onboarding;
