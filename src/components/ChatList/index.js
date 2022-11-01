import DeleteIcon from "../../assets/svg/delete.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setChatScreenData } from "../../store/features/chatScreenReducer";

export const ChatList = ({ data, setChatUser, isChatTab }) => {
    console.log(data);
    const dispatch = useDispatch()

    const removeuser = ()=>{
        axios.get("http://localhost:4200/UserLogin")
    }

    return (
        <>
            {isChatTab &&
                <div className="chatList" onClick={() => dispatch(setChatScreenData(data.receiver))}>
                    <div className="profile"></div>
                    <div className="user">
                        <div className="userName">{data.receiver}</div>
                        <div className="lastMessage">{data.lastMessage}</div>
                    </div>
                    <img className="user-remove-icon" src={DeleteIcon} onClick={removeuser} />
                </div>

            }

            {!isChatTab &&
                <div className="chatList" onClick={() => dispatch(setChatScreenData(data.groupName))}>
                    <div className="profile"></div>
                    <div className="user">
                        <div className="userName">{data.groupName}</div>
                        <div className="lastMessage">{data.description}</div>
                    </div>
                </div>
            }
        </>

    )
}