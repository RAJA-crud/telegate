import { ChatList } from "../ChatList"
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Popup } from "../popup"
import { useDispatch, useSelector } from "react-redux"
import { setChatScreenData } from "../../store/features/chatScreenReducer"

export const ChatSideBar = ({ setChatUser, setChatType }) => {
    const [modalShow, setModalShow] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [groupDetail, setGroupDetail] = useState({});
    const [groups, setGroups] = useState([])
    const [isChatTab, setIsChatTab] = useState(true)
    const dispatch = useDispatch()
    const { groupMessageData } = useSelector(state => state.groupMessage)
    const { role, userName } = useSelector((_state) => _state.login.loginData)
    const arr = []

    useEffect(() => {
        role === "Admin" ? setIsAdmin(true) : setIsAdmin(false)
    }, [role])
    useEffect(() => {
        if (Object.values(groupDetail).length) {
            setGroups(oldArr => [...oldArr, groupDetail])
        }
    }, [groupDetail])
    useEffect(() => {
        isChatTab ? setChatType("chat") : setChatType('group')
    }, [isChatTab])
    const handleClick = (e) => {
        const event = e.target
        event.id === 'chats' ? setIsChatTab(true) : setIsChatTab(false)
        dispatch(setChatScreenData(""))
    }
    return (
        <div id="sideBar">
            <div id="header">
                <div id="userDetail">
                    <Link to={'/login'}>
                        <div id="profile"></div>
                    </Link>
                    <div id="user">
                        <div id="userName">{userName}</div>
                        <div id="userRole">{role}</div>
                    </div>
                    <div id="button">
                        {isAdmin && <Button variant="secondary" onClick={() => setModalShow(true)} >Create</Button>}
                    </div>
                </div>
            </div>
            <div id="body">
                <div id="nav">
                    <div id="chats" onClick={handleClick}>CHATS</div>
                    <div id="groups" onClick={handleClick}>GROUPS</div>
                </div>
                <div id="bodyContent">
                    {isChatTab && arr?.map((data, i) => (
                        <ChatList setChatUser={setChatUser} isChatTab={isChatTab} key={i} data={data} />
                    ))}

                    {!isChatTab && groupMessageData?.map((data, i) => (
                        <ChatList setChatUser={setChatUser} isChatTab={isChatTab} key={i} data={data} />
                    ))}

                </div>

            </div>
            <div id="popup">
                <Popup show={modalShow} setGroupDetail={setGroupDetail} onHide={() => setModalShow(false)} />
            </div>
        </div>
    )
}