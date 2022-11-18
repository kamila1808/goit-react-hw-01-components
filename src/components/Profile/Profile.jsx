import PropTypes from 'prop-types';
import styles from "./Profile.module.css"

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
      <div className={styles.profile}>
        <div class={styles.description}>
          <img
            src={avatar}
            alt="User avatar"
            width="130" 
            height="130"
            class={styles.avatar}
          />
          <p class={styles.name}>{username}</p>
          <p class={styles.tag}>{tag}</p>
          <p class={styles.location}>{location}</p>
        </div>
  
        <ul class={styles.stats}>
          <li class={styles.statsItem}>
            <span class={styles.label}>Followers</span>
            <span class={styles.quantity}>{stats.followers}</span>
          </li>
          <li class={styles.statsItem}>
            <span class={styles.label}>Views</span>
            <span class="quantity">{stats.views}</span>
          </li>
          <li class={styles.statsItem}>
            <span class={styles.label}>Likes</span>
            <span class="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  }