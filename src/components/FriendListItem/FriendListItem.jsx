import styles from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.FriendListItem_wrap}>
      <img
        className={styles.FriendListItem_avatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.FriendListItem_name}>{name}</p>
      <p
        className={clsx(styles.FriendListItem_status, {
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
