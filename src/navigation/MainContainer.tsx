import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../navigation/screens/HomeScreen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/Settings/SettingsScreen";

const Tabs = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "home") {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === "settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="home" component={HomeScreen} />
        <Tabs.Screen name="settings" component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

// <Stack.Screen name="Home" component={HomeScreen} />
