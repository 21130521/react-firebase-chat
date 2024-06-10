import "./userInfo.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideocamIcon from '@mui/icons-material/Videocam';
import EditIcon from '@mui/icons-material/Edit';
import {useUserStore} from "../../../lib/userStore.js";

const UserInfo = () => {
    const {currentUser} = useUserStore();

    return (
        <div className='userInfo'>
            <div className="user">
                <img src={currentUser.avatar || "./avatar.png"} alt=""/>
                <h2>{currentUser.username}</h2>
            </div>
            <div className="icons">
                <MoreHorizIcon/>
                <VideocamIcon/>
                <EditIcon/>
            </div>
        </div>
    )
}
export default UserInfo;