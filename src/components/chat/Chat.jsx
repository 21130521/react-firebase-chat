import "./chat.css"
import {EmojiEmotions, Image, Info, Phone} from "@mui/icons-material";
import VideocamIcon from "@mui/icons-material/Videocam";
import MicIcon from '@mui/icons-material/Mic';
import EmojiPicker from "emoji-picker-react";
import {useEffect, useRef, useState} from "react";

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"});
  }, []);
  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
      <div className='chat'>
        <div className='top'>
          <div className='user'>
            <img src='./avatar.png' alt=''/>
            <div className='texts'>
              <span>Jane Doe</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. \</p>
            </div>
          </div>

          <div className='icons'>
            <Phone className='imageIcons'/>
            <VideocamIcon className='imageIcons'/>
            <Info className='imageIcons'/>
          </div>
        </div>

        <div className='center'>
          <div className='message'>
            <img src="./avatar.png" alt=""/>
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies magna at condimentum accumsan.
                Aliquam eget metus rhoncus ipsum aliquet fermentum rhoncus at metus. Morbi elit nisi, sagittis ut varius
                ultrices, feugiat in lacus. Cras rhoncus felis sed mauris mollis posuere. Quisque consectetur urna id
                elit sagittis, in auctor nibh mattis.</p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className='message own'>
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies magna at condimentum accumsan.
                Aliquam eget metus rhoncus ipsum aliquet fermentum rhoncus at metus. Morbi elit nisi, sagittis ut varius
                ultrices, feugiat in lacus. Cras rhoncus felis sed mauris mollis posuere. Quisque consectetur urna id
                elit sagittis, in auctor nibh mattis.</p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className='message'>
            <img src="./avatar.png" alt=""/>
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies magna at condimentum accumsan.
                Aliquam eget metus rhoncus ipsum aliquet fermentum rhoncus at metus. Morbi elit nisi, sagittis ut varius
                ultrices, feugiat in lacus. Cras rhoncus felis sed mauris mollis posuere. Quisque consectetur urna id
                elit sagittis, in auctor nibh mattis.</p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className='message own'>
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies magna at condimentum accumsan.
                Aliquam eget metus rhoncus ipsum aliquet fermentum rhoncus at metus. Morbi elit nisi, sagittis ut varius
                ultrices, feugiat in lacus. Cras rhoncus felis sed mauris mollis posuere. Quisque consectetur urna id
                elit sagittis, in auctor nibh mattis.</p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className='message'>
            <img src="./avatar.png" alt=""/>
            <div className="texts">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies magna at condimentum accumsan.
                Aliquam eget metus rhoncus ipsum aliquet fermentum rhoncus at metus. Morbi elit nisi, sagittis ut varius
                ultrices, feugiat in lacus. Cras rhoncus felis sed mauris mollis posuere. Quisque consectetur urna id
                elit sagittis, in auctor nibh mattis.</p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className='message own'>
            <div className="texts">
              <img src="./avatar.png" alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies magna at condimentum accumsan.
                Aliquam eget metus rhoncus ipsum aliquet fermentum rhoncus at metus. Morbi elit nisi, sagittis ut varius
                ultrices, feugiat in lacus. Cras rhoncus felis sed mauris mollis posuere. Quisque consectetur urna id
                elit sagittis, in auctor nibh mattis.</p>
              <span>1 min ago</span>
            </div>
          </div>

          <div ref={endRef}></div>

        </div>

        <div className='bottom'>
          <div className='icons'>
            <Image/>
            <VideocamIcon/>
            <MicIcon/>
          </div>
          <input type='text' placeholder='Type a message...'
                 value={text}
                 onChange={e => setText(e.target.value)}/>
          <div className='emoji'>
            <EmojiEmotions onClick={() => setOpen((prev) => !prev)}/>
            <div className='emojiPicker'>
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton">Send</button>
        </div>
      </div>
  )
}
export default Chat;