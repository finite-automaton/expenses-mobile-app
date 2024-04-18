import { FlashList } from "@shopify/flash-list";

import ExpenseListItem from "../../../components/ExpenseListItem/ExpenseListItem";
import { useExpenses } from "../../../contexts/Expenses";

export default function ExpenseList({ navigation }) {
  const expenses = useExpenses();
  function handlePress(id: number) {
    navigation.navigate("Expense", { id });
  }

  return (
    <FlashList
      data={expenses}
      renderItem={({ item }) => (
        <ExpenseListItem {...item} handlePress={() => handlePress(item.id)} />
      )}
      estimatedItemSize={200}
    />
  );
}
