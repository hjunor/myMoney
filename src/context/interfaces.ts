export interface ITransaction {
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  category: string;
  id: number;
}

export interface ITransactionProvider {
  transactions: ITransaction[];
  setTransactions(transactions: ITransaction[]): void;
}
