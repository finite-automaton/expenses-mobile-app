import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import ExpenseListItem from "../../../components/ExpenseListItem/ExpenseListItem";
import {
  ExpensesContext,
  ExpensesProvider,
  useExpenses,
} from "../../../contexts/Expenses";
import { SCREENS } from "../../constants";
import { EXPENSE_STATUS } from "../../../domain/expenses";
import { useTranslation } from "react-i18next";
import { useIsFocused } from "@react-navigation/native";
import { useContext } from "react";

export default function ExpenseList({ navigation, route }) {
  const expenses = useExpenses();
  function handlePress(id: number) {
    navigation.navigate(SCREENS.PENDING_EXPENSE, { id });
  }
  const { t } = useTranslation("expenses");

  const isPending = route.name === SCREENS.PENDING_EXPENSES;

  const isFocused = useIsFocused();

  const expensesList = isPending
    ? expenses.filter((expense) => expense.status === EXPENSE_STATUS.PENDING)
    : expenses.filter((expense) => expense.status !== EXPENSE_STATUS.PENDING);

  console.log(expenses);

  return (
    <>
      {expensesList.length > 0 ? (
        <FlashList
          data={expensesList}
          renderItem={({ item }) => (
            <ExpenseListItem
              {...item}
              handlePress={() => handlePress(item.id)}
            />
          )}
          estimatedItemSize={200}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {isPending
              ? `${t("emptyStatePending")} 🎉`
              : t("emptyStateCompleted")}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

// export default function ExpenseList({ route, navigation }) {
//   return (
//     <ExpensesProvider>
//       <ExpenseListChild navigation={navigation} route={route} />
//     </ExpensesProvider>
//   );
// }
