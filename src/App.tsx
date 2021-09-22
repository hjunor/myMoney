import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import TransactionsProvider from "./context/TransactionsContext";
import { useTransactions } from "./hooks/useTransactions";

Modal.setAppElement("#root");
export function App() {
  const {
    handelCloseNewTransactionModal,
    isNewTransactionModalOpen,
    handelOpenNewTransactionModal,
  } = useTransactions();
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handelOpenNewTransactionModal} />
      <GlobalStyle />
      <DashBoard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
