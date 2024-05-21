import List from "./components/list/List.js";
import Detail from "./components/detail/Detail.js";
import Chat from "./components/chat/Chat.js";

const App = () => {
    return (
        <div className='container'>
            <List/>
            <Chat/>
            <Detail/>
        </div>
    )
}

export default App