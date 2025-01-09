import styles from './TransactionHistory.module.css';
import Container from '../Container/Container.jsx';

export default function TransactionHistory({ items }) {
  return (
    <section className={styles.TransactionHistory_section}>
      <Container className={styles.TransactionHistory_container}>
        <table className={styles.TransactionHistory_table}>
          <thead className={styles.TransactionHistory_tableHeader}>
            <tr>
              <th className={styles.TransactionHistory_tableHeaderCell}>
                Type
              </th>
              <th className={styles.TransactionHistory_tableHeaderCell}>
                Amount
              </th>
              <th className={styles.TransactionHistory_tableHeaderCell}>
                Currency
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className={styles.TransactionHistory_tableRow}>
                <td className={styles.TransactionHistory_tableCell}>
                  {item.type}
                </td>
                <td className={styles.TransactionHistory_tableCell}>
                  {item.amount}
                </td>
                <td className={styles.TransactionHistory_tableCell}>
                  {item.currency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}
