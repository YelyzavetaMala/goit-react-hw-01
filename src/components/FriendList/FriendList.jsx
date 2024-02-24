
import friends from "./friends.json";
import FriendListItem from "./FriendListItem";
import css from "../FriendList/FriendList.module.css"


const FriendList = () => {
  return (
    <ul className={css.list}>
      {friends.map((item) => (
        <li className={css.item} key={item.id}>
            <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline ? "Online" : "Offline"} />
          </li>
      ))}
    </ul>
  );
};

export default FriendList;