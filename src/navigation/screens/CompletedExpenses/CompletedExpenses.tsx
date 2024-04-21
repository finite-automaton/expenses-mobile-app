import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExpenseList from "../ExpenseList/ExpenseList";
import { ExpensesProvider, useExpenses } from "../../../contexts/Expenses";
import Expense from "../Expense/Expense";
import { SCREENS } from "../../constants";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import WrappedExpenseList from "../ExpenseList/WrappedExpenseList";

export default function CompletedExpenses({ route, navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.COMPLETED_EXPENSES}
      screenOptions={{
        header: ({ options, route }) => {
          return (
            <NavigationHeader options={options} route={route} addTopPadding />
          );
        },
      }}
    >
      <Stack.Screen
        name={SCREENS.COMPLETED_EXPENSES}
        component={WrappedExpenseList}
      />
      <Stack.Screen name={SCREENS.COMPLETED_EXPENSE} component={Expense} />
    </Stack.Navigator>
  );
}
