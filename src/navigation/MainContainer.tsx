import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../navigation/screens/HomeScreen/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/Settings/SettingsScreen";
import { useTranslation } from "react-i18next";
import { SCREENS } from "./constants";
import NavigationHeader from "../components/NavigationHeader/NavigationHeader";
import { useExpenses } from "../contexts/Expenses";
import { EXPENSE_STATUS } from "../domain/expenses";

const Tabs = createBottomTabNavigator();

export default function MainContainer() {
  const { t } = useTranslation("navigation");
  const expenses = useExpenses();
  const pendingExpensesCount = expenses.filter(
    (expense) => expense.status === EXPENSE_STATUS.PENDING
  ).length;
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
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: route.name !== SCREENS.HOME,
          header: ({ options, route }) => {
            return <NavigationHeader options={options} route={route} />;
          },
          title: t(route.name),
        })}
      >
        <Tabs.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{ tabBarBadge: pendingExpensesCount }}
        />
        <Tabs.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
