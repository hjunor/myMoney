import { formatAmount } from "./formatAmount";
import { ITransaction } from "./interfaces";

export function formatWithdraw(transactions: ITransaction[]) {
  return formatAmount(
    transactions
      .filter((item) => item.type === "withdraw")
      .reduce((accumulator, item) => {
        return accumulator + item.amount;
      }, 0)
  );
}
