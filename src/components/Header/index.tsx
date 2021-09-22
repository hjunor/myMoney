import logo from "../../Assets/logo.svg";
import { Container, Content } from "./styles";
//FIXME:

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
