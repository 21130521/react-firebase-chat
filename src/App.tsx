import List from "./components/list/List.js";
import Detail from "./components/detail/Detail.js";
import Chat from "./components/chat/Chat.js";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import {useEffect} from "react";

const App = () => {

  const user = true;

  useEffect(()=>{

  })

  return (
      <div className='container'>
        {
          user ? (
              <>
                <List/>
                <Chat/>
                <Detail/>
              </>
          ) : (
              <Login/>)
        }
        <Notification/>
      </div>
  )
}

export default App