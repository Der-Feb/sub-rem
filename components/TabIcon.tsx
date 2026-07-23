import clsx from "clsx";
import { StyleSheet } from "react-native";
import { SafeImage, SafeView } from "./WebPrimitives";

interface TabIconProps {
  focused: boolean;
  icon: any;
  activeColor?: string;
}

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  pillBase: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const TabIcon = ({ focused, icon }: TabIconProps) => (
  <SafeView style={styles.centerContainer}>
    <SafeView
      className={clsx("tabs-pill", focused && "tabs-active")}
      style={styles.pillBase}
      webStyles={{
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 100,
        backgroundColor: focused ? "#ea7a53" : "transparent",
      }}
    >
      <SafeImage
        source={icon}
        className="tabs-glyph"
        size={24}
        resizeMode="contain"
      />
    </SafeView>
  </SafeView>
);

export default TabIcon;
