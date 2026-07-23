import { Platform } from "react-native";
import { icons } from "./icons";

export const tabs = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "subscriptions", title: "Subscriptions", icon: icons.wallet },
  { name: "insights", title: "Insights", icon: icons.activity },
  { name: "settings", title: "Settings", icon: icons.setting },
];

export const bools = {
  isWeb: Platform.OS === "web",
  isAndroid: Platform.OS === "android",
  isIOS: Platform.OS === "ios",
};
