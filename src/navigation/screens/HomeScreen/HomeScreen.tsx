import ExpenseList from "../../../components/ExpenseList/ExpenseList";
import {
  EXPENSE_PRIORITY,
  ExpenseListItemProps,
} from "../../../domain/expenses";

const DATA: ExpenseListItemProps[] = [
  {
    id: 1,
    priority: EXPENSE_PRIORITY.HIGH,
    summary: "Food for executive meeting",
    currency: "£",
    amount: 50,
    lastAction: new Date("04-01-2024"),
    submitter: "Tim Franks",
    department: "Administration"
  },
  {
    id: 2,
    priority: EXPENSE_PRIORITY.MEDIUM,
    summary: "Plants for board room",
    currency: "£",
    amount: 200,
    lastAction: new Date("11-03-2024"),
    submitter: "Anika Weiss",
    department: "People"
  },
  {
    id: 3,
    priority: EXPENSE_PRIORITY.LOW,
    summary: "Shiny IDE",
    currency: "£",
    amount: 34,
    lastAction: new Date("11-03-2024"),
    submitter: "Anna Conda",
    department: "Engineering"
  },
];

export default function HomeScreen({ navigation }) {
  return <ExpenseList data={DATA} />;
}
