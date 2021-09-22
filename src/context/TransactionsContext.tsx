import { createContext, useState } from "react";
import { ITransaction, ITransactionProvider } from "./interfaces";

export const TransactionsContext = createContext<ITransactionProvider>(
  {} as ITransactionProvider
);

const { Provider } = TransactionsContext;

export default function TransactionsProvider({ children }: any) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  return (
    <Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </Provider>
  );
}
