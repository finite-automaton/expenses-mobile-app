import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../navigation/screens/HomeScreen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/Settings/SettingsScreen";
import { useTranslation } from "react-i18next";
import { SCREENS } from "./constants";

const Tabs = createBottomTabNavigator();

export default function MainContainer() {
  const { t } = useTranslation("navigation");
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === SCREENS.HOME) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === SCREENS.SETTINGS) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: route.name !== SCREENS.HOME,
        })}
      >
        <Tabs.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tabs.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
