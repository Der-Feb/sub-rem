import TabIcon from "@/components/TabIcon";
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          marginHorizontal: tabBar.horizontalInset,
          height: tabBar.height,
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          transform: [
            { translateY: -(tabBar.height / 2 - tabBar.iconFrame / 1.6) },
          ],
        },
        tabBarIconStyle: {
          width: tabBar.height,
          height: tabBar.height,
          alignItems: "center",
          justifyContent: "flex-start",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={tab.icon} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
