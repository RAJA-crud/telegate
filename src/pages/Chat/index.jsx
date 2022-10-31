import { ChatScreen } from '../../components/chatScreen'
import { ChatSideBar } from '../../components/ChatSideBar'
import { useState } from 'react'
import './chat.scss'
export const Chat = ()=>{
    const [chatUser,setChatUser] = useState("Raja")
    const [chatType, setChatType] = useState('chat')
    return(
        <div id="chat">
            <ChatSideBar setChatType={setChatType} setChatUser={setChatUser}/>
            <ChatScreen chatType={chatType} chatUser={chatUser}/>
        </div>
    )
}