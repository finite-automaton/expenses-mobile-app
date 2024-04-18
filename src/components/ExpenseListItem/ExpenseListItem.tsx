import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { EXPENSE_PRIORITY, Expense } from "../../domain/expenses";

export default function ExpenseListItem({
  id,
  priority,
  summary,
  currency,
  amount,
  submitter,
  handlePress,
}: Partial<Expense> & { handlePress: () => void }) {
  const iconName = (() => {
    switch (priority) {
      case EXPENSE_PRIORITY.HIGH:
        return "caret-up-circle-outline";
      case EXPENSE_PRIORITY.MEDIUM:
        return "ellipse-outline";
      case EXPENSE_PRIORITY.LOW:
        return "caret-down-circle-outline";
    }
  })();

  return (
    <TouchableHighlight
      key={id}
      underlayColor="lightgrey"
      onPress={() => handlePress()}
    >
      <View style={styles.wrapper}>
        <Ionicons size={24} name={iconName} style={styles.priority} />
        <View style={styles.expenseDetail}>
          <Text>{summary}</Text>
          <Text>
            {`${currency}${amount}`}{" "}
            {`${submitter.name}, ${submitter.department} dpt.`}
          </Text>
        </View>
        <View style={styles.chevronWrapper}>
          <Ionicons size={24} name="chevron-forward" style={styles.chevron} />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  expenseDetail: {
    gap: 4,
    flex: 5,
  },
  priority: {
    flex: 1,
    paddingLeft: 16,
  },
  chevron: {
    paddingRight: 16,
  },
  chevronWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
