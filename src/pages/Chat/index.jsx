import { ChatScreen } from "../../components/chatScreen";
import { ChatSideBar } from "../../components/ChatSideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setChatData } from "../../store/features/chatlistReducer";
import { setGroupData } from "../../store/features/groupListReducer";
import { setEmployee } from "../../store/features/employeeReducer";
import { useNavigate } from "react-router-dom";
import "./chat.scss";

export const Chat = () => {
  const dispatch = useDispatch();
  const [chatUser, setChatUser] = useState("Raja");
  const [chatType, setChatType] = useState("chat");
  const { role } = useSelector((state) => state.login.loginData);
  const navigate = useNavigate();
  useEffect(() => {
    !role && navigate("/login");
    if (role === "Admin") {
      getEmployeeList();
    }
  }, []);
  const getEmployeeList = async () => {
    try {
      const employeelistResponse = await axios.get(
        `http://44.203.55.138:2222/api/User/GetEmployeeListForAdmin`
      );
      const result = employeelistResponse.data.Data;
      dispatch(setEmployee(result));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="chat">
      <ChatSideBar setChatType={setChatType} setChatUser={setChatUser} />
      <ChatScreen chatType={chatType} chatUser={chatUser} />
    </div>
  );
};
