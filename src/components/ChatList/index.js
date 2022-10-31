
export const ChatList =({data,setChatUser,isChatTab})=>{
    console.log(data);
    return(
        <>
            { isChatTab &&
                        <div className="chatList" onClick={()=>setChatUser(data.receiver)}>
                        <div className="profile"></div>
                        <div className="user">
                            <div className="userName">{data.receiver}</div>
                            <div className="lastMessage">{data.lastMessage}</div>
                        </div>
                    </div>
            }
            { !isChatTab &&
                        <div className="chatList" onClick={()=>setChatUser(data.groupName)}>
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