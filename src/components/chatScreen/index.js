import { useEffect, useRef, useState } from "react"
import { chatListData, groupMessage } from "../../utils/data"
import emoji from '../../assets/svg/emoji.svg'
import media from '../../assets/svg/media.svg'
import send from '../../assets/svg/send.svg'

export const ChatScreen = ({chatUser, chatType})=>{
    const[chatMessage,setChatMessage]= useState({})
    const [message,setMessage] = useState({})
    const [base64,setBase64] = useState("")

    useEffect(()=>{
        setMessage({...message, 'image':base64})
    },[base64])
    
    const chatBody = useRef(0)
    useEffect(()=>{
        if(chatType === 'chat'){
            const chat = chatListData.find((data)=>{
                return data.receiver === chatUser
            })
            console.log(chat, chatUser);
            setChatMessage(chat)
        }else if(chatType === "group"){
            const chat = groupMessage.find((data)=>{
                return data.id === 1
            })
            console.log(chat, chatUser);
            setChatMessage(chat)
        }
    },[chatUser])

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
            [val.type === 'text' ? "message" : "image"]: [val.type === 'text' ? val.value : base64],
            id: new Date(),
            type: val.type
         }
         console.log(msg);
         setMessage(msg)
        
    }

    const sendMessage = ()=>{
        
        // if(!message.message || !message.image) return
        console.log(message,"____________________");
        console.log(chatMessage,"CCCCCCCCCCCCCCCCCCCCCCcc");
        let newMessage = {...chatMessage}
        newMessage.messages.push(message)
         setChatMessage(newMessage)
         setMessage({...message, "message":""})
         chatBody.current.scrollTop = chatBody.current.scrollHeight
    }
    console.log(chatMessage);
    return (
      <div id="chatScreen">
        <div id="header">
          <div id="profile"></div>
          <div id="userName">
            {chatType === "chat" ? chatMessage.receiver : chatMessage.members}
          </div>
        </div>
        <div id="body" ref={chatBody}>
          {chatMessage.messages?.map((msg, i) => (
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
          <div class="dropZoneContainer">
            <input
              type="file"
              id="drop_zone"
              class="FileUpload"
              accept=".jpg,.png,.gif"
              onChange={handleChange}
            />
            <div class="dropZoneOverlay">
                <img src={media} height={"30px"} width={"30px"} alt="media" />
            </div>
          </div>
          <button onClick={sendMessage}>
            <img src={send} height={"30px"} width={"30px"} alt="send" />
          </button>
        </div>
      </div>
    );
}