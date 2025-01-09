import styles from './Profile.module.css';
import Container from '../Container/Container.jsx';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <section className={styles.profile_section}>
      <Container className={styles.profile_container}>
        <div className={styles.profile_wrap}>
          <div className={styles.profile_avatar_wrap}>
            <img
              className={styles.profile_avatar}
              src={avatar}
              alt="User avatar"
            />
            <p className={styles.profile_name}>{username}</p>
            <p className={styles.profile_tag}>{tag}</p>
            <p className={styles.profile_location}>{location}</p>
          </div>

          <ul className={styles.profile_list}>
            <li className={styles.profile_item}>
              <span className={styles.profile_statistics_value}>Followers</span>
              <span className={styles.profile_statistics_quantity}>
                {stats.followers}
              </span>
            </li>
            <li className={styles.profile_item}>
              <span className={styles.profile_statistics_value}>Views</span>
              <span className={styles.profile_statistics_quantity}>
                {stats.views}
              </span>
            </li>
            <li className={styles.profile_item}>
              <span className={styles.profile_statistics_value}>Likes</span>
              <span className={styles.profile_statistics_quantity}>
                {stats.likes}
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
