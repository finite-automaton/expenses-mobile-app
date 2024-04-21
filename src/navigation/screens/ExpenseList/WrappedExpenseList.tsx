import { ExpensesProvider } from "../../../contexts/Expenses";
import ExpenseList from "./ExpenseList";

export default function WrappedExpenseList({ navigation, route }) {
  return (
    <ExpensesProvider>
      <ExpenseList navigation={navigation} route={route} />
    </ExpensesProvider>
  );
}
