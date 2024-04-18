import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpenseList from "../ExpenseList/ExpenseList";
import { ExpensesProvider } from "../../../contexts/Expenses";
import Expense from "../Expense/Expense";

export default function HomeScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <ExpensesProvider>
      <Stack.Navigator initialRouteName="Expenses List">
        <Stack.Screen name="Expenses List" component={ExpenseList} />
        <Stack.Screen name="Expense" component={Expense} />
      </Stack.Navigator>
    </ExpensesProvider>
  );
}
