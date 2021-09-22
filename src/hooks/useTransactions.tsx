import { useContext, useState } from "react";
import { TransactionsContext } from "../context/TransactionsContext";
import { ITransactionAdd } from "./interfaces";
import { api } from "../services/api";

export function useTransactions() {
  const { transactions, setTransactions } = useContext(TransactionsContext);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handelOpenNewTransactionModal(): void {
    setIsNewTransactionModalOpen(true);
  }
  function handelCloseNewTransactionModal(): void {
    setIsNewTransactionModalOpen(false);
  }
  async function fetchTransactions(): Promise<void> {
    const { data } = await api.get("/transactions");

    const { transactions } = await data;

    setTransactions(transactions);
  }

  async function fetchCreateNewTransaction(
    data: ITransactionAdd
  ): Promise<any> {
    const response = await api.post("/transactions", data);

    if (response) {
      fetchTransactions();
    }

    return response;
  }
  return {
    transactions,
    fetchTransactions,
    fetchCreateNewTransaction,
    handelOpenNewTransactionModal,
    handelCloseNewTransactionModal,
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen,
  };
}
