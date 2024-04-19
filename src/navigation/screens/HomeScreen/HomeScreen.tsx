import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpenseList from "../ExpenseList/ExpenseList";
import { ExpensesProvider } from "../../../contexts/Expenses";
import Expense from "../Expense/Expense";
import { useTranslation } from "react-i18next";
import { SCREENS } from "../../constants";

export default function HomeScreen() {
  const Stack = createNativeStackNavigator();
  const { t } = useTranslation("navigation");
  return (
    <ExpensesProvider>
      <Stack.Navigator initialRouteName={SCREENS.EXPENSES}>
        <Stack.Screen name={SCREENS.EXPENSES} component={ExpenseList} />
        <Stack.Screen name={SCREENS.EXPENSE} component={Expense} />
      </Stack.Navigator>
    </ExpensesProvider>
  );
}
