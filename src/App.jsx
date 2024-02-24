import Profile from './components/Profile/Profile'
import './App.css'
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from "./userData.json";
import frends from "./components/FriendList/friends.json";



function App() {

  return (
    <>  
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
        avatar={frends.avatar}
        name={frends.name}
        isOnline={frends.isOnline}
      />
      <TransactionHistory />
    </>
  )
}

export default App;
