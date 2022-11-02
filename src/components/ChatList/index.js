import DeleteIcon from "../../assets/svg/delete.svg";
import GroupDelete from "../../assets/svg/groupdelete.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setChatScreenData } from "../../store/features/chatScreenReducer";
import { addChaMessage } from "../../store/features/chatlistReducer";

export const ChatList = ({ data, setChatUser, isChatTab }) => {
    console.log(data);
    const dispatch = useDispatch()

    const removeuser = (empId)=>{
        axios.post(`http://44.203.55.138:2222/api/User/DeleteUser?empId={${empId}}`)
    }
    const getChat =(data)=>{
        axios.get(`http://44.203.55.138:2222/api/User/GetChat?empName={${data.receiver}}`)
        dispatch(setChatScreenData(data.receiver))
        dispatch(addChaMessage(data))
    }
    const deleteGroup =(data)=>{
        console.log(data,"Rydtfgjn");
        const value = {
            groupId:data.id,
            groupName: data.groupName,
            deletedBy: "arun01"
        }
        axios.post(`http://44.203.55.138:2222/api/User/DeleteGroup`,value)
    }

    return (
        <>
            {isChatTab &&
                <div className="chatList" onClick={()=>getChat(data)}>
                    <div className="profile"></div>
                    <div className="user">
                        <div className="userName">{data.receiver}</div>
                        <div className="lastMessage">{data.lastMessage}</div>
                    </div>
                    <img className="user-remove-icon" src={DeleteIcon} onClick={()=>removeuser(data.id)} />
                </div>

            }

            {!isChatTab &&
                <div className="chatList" onClick={() => dispatch(setChatScreenData(data.groupName))}>
                    <div className="profile"></div>
                    <div className="user">
                        <div className="userName">{data.groupName}</div>
                        <div className="lastMessage">{data.description}</div>
                        <img className="user-remove-icon" src={GroupDelete} onClick={()=>deleteGroup(data)} />
                    </div>
                </div>
            }
        </>

    )
}