export interface ITransaction {
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  category: string;
  id: number;
}
export interface ITransactionAdd {
  title: string;
  amount: Number;
  type: string;
  createdAt: string;
  category: string;
}
