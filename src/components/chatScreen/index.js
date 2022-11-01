import { useEffect, useRef, useState } from "react"
import { chatListData, groupMessage } from "../../utils/data"
import emoji from '../../assets/svg/emoji.svg'
import media from '../../assets/svg/media.svg'
import send from '../../assets/svg/send.svg'
import clearChat from '../../assets/svg/clearChat.svg'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { addChaMessage } from "../../store/features/chatlistReducer"



export const ChatScreen = ({chatType})=>{
    const {chatData} = useSelector((_state)=> _state.chatlist)
    const {chatName} = useSelector((_state)=> _state.chatScreen)
    console.log(chatData, "state",chatName);
    const[chatMessage,setChatMessage]= useState({
        messages:[]
    })
    const [message,setMessage] = useState({})
    const [base64,setBase64] = useState("")
    const {groupMessageData} = useSelector(state=> state.groupMessage)
    const dispatch = useDispatch()

    useEffect(()=>{
        setMessage({...message, 'image':base64})
    },[base64])
    console.log(chatMessage,"chatMESSAGE");
    const chatBody = useRef(0)
    useEffect(()=>{
        if(chatType === 'chat' && chatData.length){
            const chat = chatData?.find((data)=>{
                return data.receiver === chatName
            })
            console.log(chat, chatName);
            setChatMessage(chat)
        }else if(chatType === "group" && chatData.length){
            const chat = groupMessageData.find((data)=>{
                return data.groupName === chatName
            })
            console.log(chat, groupMessageData,"ervregrrgr");
            setChatMessage(chat)
        }
    },[chatName])

    const imagetoBase64 = (src)=>{
        const preview = document.querySelector('img');
        const file = src
        const reader = new FileReader();
      
        reader.addEventListener("load", () => {
          // convert image file to base64 string
          console.log(reader);
          setBase64(reader.result)
        }, false);
      
        if (file && file.type.match('image.*')) {
            console.log(file);
          reader.readAsDataURL(file);
        }
    }

    const handleChange = (e)=>{
        console.log(e);
        const val = e.target
        if(val.type === 'file')imagetoBase64(val.files[0])
           console.log(base64);
         const msg = {
            senderId: "arun01",
            [val.type === 'text' ? "message" : "image"]: val.type === 'text' ? val.value : base64,
            id: new Date(),
            type: val.type
         }
         console.log(msg);
         setMessage(msg)
        
    }

    const sendMessage = ()=>{
        
        // if(!message.message || !message.image) return
        console.log(message,"____________________");
        const newMessage = {...chatMessage}
        // newMessage["messages"].push(message)
        setChatMessage({...chatMessage, "messages":[...chatMessage['messages'], message]})
        setMessage({...message, "message":""})
        chatBody.current.scrollTop = chatBody.current.scrollHeight
    }
    console.log(chatMessage);
    const chatClear=()=>{
        axios.get("http://localhost:4200/UserLogin")

    }
    return (
      <div id="chatScreen">
        {
            chatName.length ?
        <>
        <div id="header">
          <div id="profile"></div>
          <div id="userName">
            {chatType === "chat" ? chatMessage?.receiver : chatMessage?.groupName}
          </div>
          <div className="clear-chat">
                    <img src={clearChat} onClick={chatClear}/>
            </div>
        </div>
        <div id="body" ref={chatBody}>
          {chatMessage?.messages?.map((msg, i) => (
            <div
              id="message"
              key={i}
              className={
                msg.senderId !== "arun01" ? "receiverMessage" : "senderMessage"
              }
            >
              {
              msg.message ? 
              msg.message :
              <img height={"100px"} width={"150px"} src={msg.image} alt="" srcset="" />
            }
            </div>
          ))}
        </div>
        <div id="footer">
          <div id="sendInput">
            <input
              type="text"
              value={message.message}
              onChange={handleChange}
              onSubmit={sendMessage}
              placeholder="Enter the message..."
            />
          </div>
          <div className="dropZoneContainer">
            <input
              type="file"
              id="drop_zone"
              className="FileUpload"
              accept=".jpg,.png,.gif"
              onChange={handleChange}
            />
            <div className="dropZoneOverlay">
                <img src={media} height={"30px"} width={"30px"} alt="media" />
            </div>
          </div>
          <button onClick={sendMessage}>
            <img src={send} height={"30px"} width={"30px"} alt="send" />
          </button>
        </div>     
        </>
        :
        <>
        </>         
                }
      </div>
    );
}