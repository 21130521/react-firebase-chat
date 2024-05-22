import List from "./components/list/List.js";
import Detail from "./components/detail/Detail.js";
import Chat from "./components/chat/Chat.js";
import Login from "./components/login/Login";

const App = () => {

  const user = false;

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
      </div>
  )
}

export default App