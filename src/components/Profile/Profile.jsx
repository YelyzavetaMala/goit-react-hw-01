import css from "./Profile.module.css";


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardProfile}>
        <img className={css.cardImg}
          src={image}
          alt="User avatar"
        />
        <p className={css.cardName}>{name}</p>
        <p className={css.cardInfo}>@{tag}</p>
        <p className={css.cardInfo} >{location}</p>
      </div>

      <ul className={css.cardFollowers} >
        <li className={css.cardList} >
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.cardList}>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li className={css.cardList}>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile; 

