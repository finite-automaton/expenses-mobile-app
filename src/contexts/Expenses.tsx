import { createContext, useContext, useReducer, useState } from "react";
import {
  EXPENSE_ACTION,
  EXPENSE_PRIORITY,
  EXPENSE_STATUS,
  Expense,
  ExpenseAction,
} from "../domain/expenses";

const MOCK_EXPENSES: Expense[] = [
  {
    id: 1,
    summary: "Food for executive meeting",
    submitter: {
      id: 1,
      name: "Tim Franks",
      department: "Administration",
      expenseLimit: 250,
      managerId: 91,
      managerName: "Sara Bellingham",
    },
    purpose: "food",
    status: EXPENSE_STATUS.PENDING,
    imgUrl: "",
    priority: EXPENSE_PRIORITY.HIGH,
    amount: 50,
    currency: "£",
    created: new Date("04-01-2024"),
    lastAction: new Date("04-01-2024"),
  },
  {
    id: 2,
    summary: "Plants for board room",
    submitter: {
      id: 2,
      name: "Anika Weiss",
      department: "People",
      expenseLimit: 200,
      managerId: 91,
      managerName: "Sara Bellingham",
    },
    purpose: "food",
    status: EXPENSE_STATUS.PENDING,
    imgUrl: "",
    priority: EXPENSE_PRIORITY.MEDIUM,
    amount: 200,
    currency: "£",
    created: new Date("11-03-2024"),
    lastAction: new Date("11-03-2024"),
  },
  {
    id: 3,
    summary: "Developer IDE",
    submitter: {
      id: 3,
      name: "Iam Coding",
      department: "Engineering",
      expenseLimit: 200,
      managerId: 92,
      managerName: "Ross Müller",
    },
    purpose: "tooling",
    status: EXPENSE_STATUS.PENDING,
    imgUrl: "",
    priority: EXPENSE_PRIORITY.LOW,
    amount: 34,
    currency: "£",
    lastAction: new Date("11-03-2024"),
    created: new Date("11-03-2024"),
  },
];

export const ExpensesContext = createContext(MOCK_EXPENSES);

export const ExpensesDispatchContext = createContext(null);

export function useExpenses() {
  return useContext(ExpensesContext) as Expense[];
}

export function useExpenesDispatch() {
  return useContext(ExpensesDispatchContext);
}

export function ExpensesProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, MOCK_EXPENSES);

  return (
    <ExpensesContext.Provider value={expenses}>
      <ExpensesDispatchContext.Provider value={dispatch}>
        {children}
      </ExpensesDispatchContext.Provider>
    </ExpensesContext.Provider>
  );
}

function expensesReducer(expenses: Expense[], action: ExpenseAction) {
  switch (action.type) {
    case EXPENSE_ACTION.APPROVE: {
      return expenses.map((expense) =>
        expense.id === action.id
          ? { ...expense, status: EXPENSE_STATUS.APPROVED }
          : expense
      );
    }
    case EXPENSE_ACTION.REJECT: {
      return expenses.map((expense) =>
        expense.id === action.id
          ? { ...expense, status: EXPENSE_STATUS.REJECTED }
          : expense
      );
    }
    case EXPENSE_ACTION.FLAG: {
      return expenses.map((expense) =>
        expense.id === action.id
          ? { ...expense, status: EXPENSE_STATUS.NEEDS_AMENDS }
          : expense
      );
    }
  }
}
