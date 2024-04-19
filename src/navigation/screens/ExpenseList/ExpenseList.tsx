import { FlashList } from "@shopify/flash-list";

import ExpenseListItem from "../../../components/ExpenseListItem/ExpenseListItem";
import { useExpenses } from "../../../contexts/Expenses";
import { useTranslation } from "react-i18next";
import { SCREENS } from "../../constants";

export default function ExpenseList({ navigation }) {
  const expenses = useExpenses();
  const { t } = useTranslation("Navigation");
  function handlePress(id: number) {
    navigation.navigate(SCREENS.EXPENSE, { id });
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
