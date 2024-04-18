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

export enum EXPENSE_ACTION {
  APPROVE = "approve",
  REJECT = "reject",
  FLAG = "flag",
}

export type ExpenseAction = {
  type: EXPENSE_ACTION;
  id: number;
};
