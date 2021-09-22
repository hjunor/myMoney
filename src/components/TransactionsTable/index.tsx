import { useEffect } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { formatAmount } from "../../utils/formatAmount";
import { formatDate } from "../../utils/formatDate";
import { Container } from "./styled";

export function TransactionsTable() {
  const { transactions, fetchTransactions } = useTransactions();

  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map(
              ({ title, amount, type, createdAt, category, id }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td className={type}>{formatAmount(amount)}</td>
                  <td>{category}</td>
                  <td>{formatDate(createdAt)}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </Container>
  );
}
