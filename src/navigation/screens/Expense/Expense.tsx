import { Text, View, StyleSheet } from "react-native";
import { useExpenses } from "../../../contexts/Expenses";

export default function Expense({route}) {
  const expenses = useExpenses();
  const expense = expenses.find((expense) => expense.id === route.params.id);
  return (
    <View style={styles.wrapper}>
      <Text>{expense.summary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
