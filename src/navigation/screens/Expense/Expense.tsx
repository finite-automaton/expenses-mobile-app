import { Text, StyleSheet, Image, ScrollView, View } from "react-native";
import { DataTable } from "react-native-paper";
import { Button } from "react-native";

import { useExpensesDispatch, useExpenses } from "../../../contexts/Expenses";
import { useTranslation } from "react-i18next";
import { EXPENSE_ACTION, EXPENSE_STATUS } from "../../../domain/expenses";
import { SCREENS } from "../../constants";

export default function Expense({ route, navigation }) {
  const expenses = useExpenses();
  const dispatch = useExpensesDispatch();
  const expense = expenses.find((expense) => expense.id === route.params.id);
  const { t } = useTranslation("expenses");
  const handleApprovePress = () => {
    dispatch({ type: EXPENSE_ACTION.APPROVE, id: expense.id });
    navigation.navigate(SCREENS.PENDING_EXPENSES);
  };

  const handleRejectPress = () => {
    dispatch({ type: EXPENSE_ACTION.REJECT, id: expense.id });
    navigation.navigate(SCREENS.PENDING_EXPENSES);
  };
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.image}
          source={{ uri: expense.imgUrl }}
          height={512.1}
          width={384}
        />
        <DataTable style={styles.tableContainer}>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={styles.rowHeading}>{t("submittedBy")}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>
                {expense.submitter.name}, {expense.submitter.department}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={styles.rowHeading}>{t("submittedOn")}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>{expense.created.toLocaleDateString()}</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={styles.rowHeading}>{t("summary")}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>{expense.summary}</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={styles.rowHeading}>{t("amount")}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>
                {expense.currency === "£"
                  ? `${expense.currency}${expense.amount}`
                  : `${expense.amount} ${expense.currency}`}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
              <Text style={styles.rowHeading}>{t("priority")}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text>{t(expense.priority)}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
      {route.name === SCREENS.PENDING_EXPENSE && (
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title={t("reject")}
              color={"red"}
              onPress={handleRejectPress}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title={t("approve")}
              color={"green"}
              onPress={handleApprovePress}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
  text: {
    fontSize: 42,
  },
  image: {
    resizeMode: "contain",
  },
  tableContainer: {
    paddingTop: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  rowHeading: {
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderTopColor: "lightgrey",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
  },
  buttonWrapper: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: 180,
  },
});

//   return (
//     <ScrollView>
//       <View style={styles.wrapper}>
//         <Image
//           style={styles.image}
//           source={{ uri: expense.imgUrl }}
//           height={1707}
//           width={1280}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     height: "100%",
//     resizeMode: "contain",
//     // aspectRatio: 1707/1280
//   },
// });
