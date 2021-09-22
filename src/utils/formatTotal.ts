import { formatAmount } from "./formatAmount";
import { ITransaction } from "./interfaces";

export function formatTotal(transactions: ITransaction[]) {
  return formatAmount(
    transactions.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, 0)
  );
}
