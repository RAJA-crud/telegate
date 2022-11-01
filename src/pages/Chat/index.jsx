import { ChatScreen } from '../../components/chatScreen'
import { ChatSideBar } from '../../components/ChatSideBar'
import { useState,useEffect } from 'react'
import './chat.scss'
import axios from 'axios';
// import {chatData} from '../../store/features'

import { useDispatch, useSelector } from 'react-redux'
import { chatlistreducer } from '../../store/features/chatlist';
import { groupMessagereducer } from '../../store/features/groupMessage';

export const Chat = ()=>{
    const dispatch = useDispatch()
    const [chatUser,setChatUser] = useState("Raja")
    const [chatType, setChatType] = useState('chat')
    useEffect(()=>{
      axios.get("http://localhost:4000/chatListData")
      .then(response=>
      dispatch(chatlistreducer(response.data)))
      axios.get("http://localhost:4000/groupMessage")
      .then(response=>
      dispatch(groupMessagereducer(response.data)))

    },[])


    return(
        <div id="chat">
            <ChatSideBar setChatType={setChatType} setChatUser={setChatUser}/>
            <ChatScreen chatType={chatType} chatUser={chatUser}/>
        </div>
    )
}