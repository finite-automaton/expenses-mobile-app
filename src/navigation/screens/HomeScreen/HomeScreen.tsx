import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExpenseList from "../ExpenseList/ExpenseList";

import Expense from "../Expense/Expense";
import { SCREENS } from "../../constants";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import { ExpensesProvider } from "../../../contexts/Expenses";
import WrappedExpenseList from "../ExpenseList/WrappedExpenseList";

export default function HomeScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.PENDING_EXPENSES}
      screenOptions={{
        header: ({ options, route }) => {
          return (
            <NavigationHeader options={options} route={route} addTopPadding />
          );
        },
      }}
    >
        <Stack.Screen name={SCREENS.PENDING_EXPENSES} component={ExpenseList} />
        <Stack.Screen name={SCREENS.PENDING_EXPENSE} component={Expense} />
    </Stack.Navigator>
  );
}
