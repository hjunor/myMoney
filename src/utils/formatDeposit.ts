import { formatAmount } from "./formatAmount";
import { ITransaction } from "./interfaces";

export function formatDeposit(transactions: ITransaction[]) {
  return formatAmount(
    transactions
      .filter((item) => item.type === "deposit")
      .reduce((accumulator, item) => {
        return accumulator + item.amount;
      }, 0)
  );
}
