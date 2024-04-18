import { FlashList } from "@shopify/flash-list";

import ExpenseListItem from "../ExpenseListItem/ExpenseListItem";
import { ExpenseListItemProps } from "../../domain/expenses";

type Props = {
  data: ExpenseListItemProps[];
};

export default function ExpenseList({ data }: Props) {
  return (
    <FlashList
      data={data}
      renderItem={({ item }) => <ExpenseListItem {...item} />}
      estimatedItemSize={200}
    />
  );
}
