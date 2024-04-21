import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import HomeScreen from "../navigation/screens/HomeScreen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/Settings/SettingsScreen";
import { useTranslation } from "react-i18next";
import { SCREENS } from "./constants";
import NavigationHeader from "../components/NavigationHeader/NavigationHeader";
import CompletedExpenses from "./screens/CompletedExpenses/CompletedExpenses";

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
            if (route.name === SCREENS.HOME) {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === SCREENS.SETTINGS) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === SCREENS.COMPLETED_HOME) {
              iconName = focused ? "checkmark-done" : "checkmark-done-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown:
            route.name !== SCREENS.HOME &&
            route.name !== SCREENS.COMPLETED_HOME,
          header: ({ options, route }) => {
            return <NavigationHeader options={options} route={route} />;
          },
          title: t(route.name),
        })}
      >
        <Tabs.Screen name={SCREENS.HOME} component={HomeScreen} />
        {/* <Tabs.Screen
          name={SCREENS.COMPLETED_HOME}
          component={CompletedExpenses}
        /> */}
        <Tabs.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
