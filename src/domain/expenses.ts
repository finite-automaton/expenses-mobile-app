export type Expense = {
  id: number;
  summary: string;
  submitter: User;
  purpose: string;
  status: EXPENSE_STATUS;
  imgUrl: string;
  priority: EXPENSE_PRIORITY;
  amount: number;
  currency: string;
  created: Date;
  lastAction: Date;
};

export type ExpenseListItemProps = {
  id: number;
  priority: EXPENSE_PRIORITY;
  summary: string;
  currency: string;
  amount: number;
  lastAction: Date;
  submitter: string;
  department: string;
};

export type User = {
  id: number;
  name: string;
  department: string;
  expenseLimit: number;
  managerId: number;
  managerName: string;
};

export enum EXPENSE_STATUS {
  PENDING = "pending",
  APPROVED = "approved",
  NEEDS_AMENDS = "needs_amends",
  REJECTED = "rejected",
}

export enum EXPENSE_PRIORITY {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}
