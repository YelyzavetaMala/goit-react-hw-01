import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
          <p className={clsx(css.status, isOnline === "Online" && css.statusonline)}>{isOnline}
          
          </p>
    </div>
  );
};

export default FriendListItem;