import { ChatScreen } from '../../components/chatScreen'
import { ChatSideBar } from '../../components/ChatSideBar'
import { useState,useEffect } from 'react'
import './chat.scss'
import axios from 'axios';
// import {chatData} from '../../store/features'

import { useDispatch, useSelector } from 'react-redux'
import { setChatData } from '../../store/features/chatlistReducer';
import { setGroupData } from '../../store/features/groupListReducer';

import { useNavigate } from 'react-router-dom'

export const Chat = ()=>{
    const dispatch = useDispatch()
    const [chatUser,setChatUser] = useState("Raja")
    const [chatType, setChatType] = useState('chat')
    const {role} = useSelector(state=> state.login.loginData)
    const navigate = useNavigate()
    useEffect(()=>{
        // console.log("type of role", typeof role, !role );
        !role ? navigate('/login') : navigate("/")
      axios.get("http://localhost:4000/chatListData")
      .then(response=>
      dispatch(setChatData(response.data)))
      axios.get("http://localhost:4000/groupMessage")
      .then(response=>
      dispatch(setGroupData(response.data)))

    },[])


    return(
        <div id="chat">
            <ChatSideBar setChatType={setChatType} setChatUser={setChatUser}/>
            <ChatScreen chatType={chatType} chatUser={chatUser}/>
        </div>
    )
}