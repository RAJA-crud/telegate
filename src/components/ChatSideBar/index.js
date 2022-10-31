import { ChatList } from "../ChatList"
import { chatListData } from "../../utils/data"
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Popup } from "../popup"

export const ChatSideBar =({setChatUser, setChatType})=>{
    const [modalShow, setModalShow] = useState(false);
    const [groupDetail, setGroupDetail] = useState({});
    const [groups,setGroups] = useState([])
    const [isChatTab,setIsChatTab] = useState(true)

    useEffect(()=>{
        if(Object.values(groupDetail).length){
            setGroups(oldArr=>[...oldArr, groupDetail])
        }
    },[groupDetail])
    useEffect(()=>{
        isChatTab ? setChatType("chat") : setChatType('group')
    },[isChatTab])
    console.log(groups);

    return(
        <div  id="sideBar">
            <div id="header">
                <div id="userDetail">
                    <Link to={'/login'}>
                        <div id="profile"></div>
                    </Link>
                    <div id="user">
                        <div id="userName">Arun kumar</div>
                        <div id="userRole">Admin</div>
                    </div>
                    <div id="button">
                        <Button variant="secondary" onClick={() => setModalShow(true)} >Create</Button>

                    </div>
                </div>
                {/* <div id="searchField"></div> */}
            </div>
            <div id="body">
                <div id="nav">
                    <div id="chats" onClick={()=>setIsChatTab(true)}>CHATS</div>
                    <div id="groups" onClick={()=>setIsChatTab(false)}>GROUPS</div>
                </div>
                <div id="bodyContent">
                    {isChatTab && chatListData?.map((data,i)=>(
                        <ChatList setChatUser={setChatUser} isChatTab={isChatTab} key={i} data={data} /> 
                    ))}
                    {!isChatTab && groups?.map((data,i)=>(
                        <ChatList setChatUser={setChatUser} isChatTab={isChatTab} key={i} data={data} /> 
                    ))}
                </div>
            </div>
            <div id="popup">
            <Popup show={modalShow} setGroupDetail={setGroupDetail} onHide={() => setModalShow(false)}/>
            </div>
        </div>
    )
}