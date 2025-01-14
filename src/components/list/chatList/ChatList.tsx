import "./chatList.css"
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import AddUser from "../../addUser/addUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
      <div className='chatList'>
        <div className="search">
          <div className="searchBar">
            <SearchIcon/>
            <input type='text' placeholder='Search...'/>
          </div>
          <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="addIcon"
               onClick={() => setAddMode((prev) => !prev)}
          />
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        <div className="item">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Hello</p>
          </div>
        </div>

        {addMode && <AddUser/>}

      </div>
  )
}
export default ChatList;