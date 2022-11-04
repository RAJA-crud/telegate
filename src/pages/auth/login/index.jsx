import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../../store/features/loginReducer";

export function Login() {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (e) => {
    const data = e.target;
    setUserData({ ...userData, [data.name]: data.value });
  };
  const userLogin = (e) => {
    e.preventDefault();
    loginData();
  };
  const loginData = async () => {
    try {
      const loginResponse = await axios.post(
        "http://44.203.55.138:2222/api/User/UserLogin",
        userData
      );
      const result = loginResponse.data;
      dispatch(setLoginData(result.Data));
      if (result.Message === "Login Sucess") {
        history("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form onSubmit={userLogin}>
        <p>
          <label>Username or email address</label>
          <br />
          <input type="text" onChange={handleChange} name="userName" required />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            required
          />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
