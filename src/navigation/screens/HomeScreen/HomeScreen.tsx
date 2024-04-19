import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExpenseList from "../ExpenseList/ExpenseList";
import { ExpensesProvider } from "../../../contexts/Expenses";
import Expense from "../Expense/Expense";
import { SCREENS } from "../../constants";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";

export default function HomeScreen() {
  const Stack = createNativeStackNavigator();
  const { t } = useTranslation("navigation");
  return (
    <ExpensesProvider>
      <Stack.Navigator
        initialRouteName={SCREENS.EXPENSES}
        screenOptions={{
          header: ({ options, route }) => {
            return (
              <NavigationHeader options={options} route={route} addTopPadding />
            );
          },
        }}
      >
        <Stack.Screen name={SCREENS.EXPENSES} component={ExpenseList} />
        <Stack.Screen name={SCREENS.EXPENSE} component={Expense} />
      </Stack.Navigator>
    </ExpensesProvider>
  );
}
