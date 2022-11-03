import { ChatScreen } from '../../components/chatScreen'
import { ChatSideBar } from '../../components/ChatSideBar'
import { useState, useEffect } from 'react'
import './chat.scss'
import axios from 'axios';
// import {chatData} from '../../store/features'

import { useDispatch, useSelector } from 'react-redux'
import { setChatData } from '../../store/features/chatlistReducer';
import { setGroupData } from '../../store/features/groupListReducer';

import { useNavigate } from 'react-router-dom'

export const Chat = () => {
    const dispatch = useDispatch()
    const [chatUser, setChatUser] = useState("Raja")
    const [chatType, setChatType] = useState('chat')
    const { role } = useSelector(state => state.login.loginData)
    const navigate = useNavigate()
    useEffect(() => {
        !role ? navigate('/login') : navigate("/")
    }, [])
    const getCandidteList = async () => {
        try {
            const candidateResponse = await axios.get("http://44.203.55.138:2222/api/User/GetCandidteListForAdmin")
            const result = candidateResponse.data
            dispatch(setChatData(result))
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div id="chat">
            <ChatSideBar setChatType={setChatType} setChatUser={setChatUser} />
            <ChatScreen chatType={chatType} chatUser={chatUser} />
        </div>
    )
}