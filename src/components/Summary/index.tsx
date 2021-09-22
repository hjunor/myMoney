import { Container } from "./styles";
import incomeImg from "../../Assets/up.svg";
import outcomeImg from "../../Assets/down.svg";
import totalImg from "../../Assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { formatDeposit } from "../../utils/formatDeposit";
import { formatWithdraw } from "../../utils/formatWithdraw";
import { formatTotal } from "../../utils/formatTotal";
export function Summary() {
  const { transactions } = useTransactions();
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatDeposit(transactions)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {formatWithdraw(transactions)}</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> {formatTotal(transactions)}</strong>
      </div>
    </Container>
  );
}
