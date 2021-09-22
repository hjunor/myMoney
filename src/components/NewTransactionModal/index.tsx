import Modal from "react-modal";
import close from "../../Assets/close.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeImg from "../../Assets/up.svg";
import outcomeImg from "../../Assets/down.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { ITransactionAdd, NewTransactionModalProps } from "./interfaces";

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState<string>("deposit");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [value, setValue] = useState<Number>(0);
  const { fetchCreateNewTransaction } = useTransactions();

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    const newDate = new Date().toString();

    const data: ITransactionAdd = {
      title,
      type,
      category,
      amount: value,
      createdAt: newDate,
    };

    const response = await fetchCreateNewTransaction(data);

    if (response) {
      onRequestClose();
      setCategory("");
      setTitle("");
      setValue(0);
      setType("deposit");
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button">
        <img
          src={close}
          alt="close in modal"
          className="react-modal-close"
          onClick={onRequestClose}
        />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={Number(value)}
          onChange={({ target }) => setValue(Number(target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            onClick={() => {
              setType("deposit");
            }}
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={() => {
              setType("withdraw");
            }}
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
