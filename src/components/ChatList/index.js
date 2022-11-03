import DeleteIcon from "../../assets/svg/delete.svg";
import GroupDelete from "../../assets/svg/groupdelete.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setChatScreenData } from "../../store/features/chatScreenReducer";
import { addChaMessage } from "../../store/features/chatlistReducer";
import { useEffect, useState } from "react";

export const ChatList = ({ data, setChatUser, isChatTab }) => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(true);
  const { role, userName } = useSelector((state) => state.login.loginData);
  useEffect(() => {
    role === "Admin" ? setIsAdmin(true) : setIsAdmin(false);
  }, [role]);
  const removeuser = async (empId) => {
    try {
      const userResponse = await axios.post(
        `http://44.203.55.138:2222/api/User/DeleteUser?empId=${empId}`
      );
      console.log(userResponse);
    } catch (error) {
      console.log(error);
    }
  };
  const getChat = async (data) => {
    try {
      const res = await axios.get(
        `http://44.203.55.138:2222/api/User/GetChat?empName={${data.receiver}}`
      );
      console.log(res, "responsedatatata");
      dispatch(setChatScreenData(data.receiver));
      dispatch(addChaMessage(data));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteGroup = async (data) => {
    try {
      const value = {
        groupId: data.id,
        groupName: data.groupName,
        deletedBy: "arun01",
      };
      await axios.post(`http://44.203.55.138:2222/api/User/DeleteGroup`, value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isChatTab ? (
        <div className="chatList" onClick={() => getChat(data)}>
          <div className="profile"></div>
          <div className="user">
            <div className="userName">{data.receiver}</div>
            <div className="lastMessage">{data.lastMessage}</div>
          </div>
          {isAdmin && (
            <img
              className="user-remove-icon"
              src={DeleteIcon}
              onClick={() => removeuser(data.id)}
            />
          )}
        </div>
      ) : (
        <div
          className="chatList"
          onClick={() => dispatch(setChatScreenData(data.groupName))}
        >
          <div className="profile"></div>
          <div className="user">
            <div className="userName">{data.groupName}</div>
            <div className="lastMessage">{data.description}</div>
            {isAdmin && (
              <img
                className="user-remove-icon"
                src={GroupDelete}
                onClick={() => deleteGroup(data)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
