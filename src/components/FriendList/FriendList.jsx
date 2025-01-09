import styles from './FriendList.module.css';
import Container from '../Container/Container.jsx';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList(data) {
  return (
    <section className={styles.friendList_section}>
      <Container className={styles.friendList_container}>
        <ul className={styles.friendList_list}>
          {data.friends.map((elem) => (
            <FriendListItem {...elem} key={elem.id} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
