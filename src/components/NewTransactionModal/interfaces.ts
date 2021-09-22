export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export interface ITransactionAdd {
  title: string;
  amount: Number;
  type: string;
  createdAt: string;
  category: string;
}
