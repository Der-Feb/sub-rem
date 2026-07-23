import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Subscriptions = () => {
  return (
    <SafeAreaView>
      <View className="p-5">
        <Text>subscription</Text>
      </View>
    </SafeAreaView>
  );
};

export default Subscriptions;
