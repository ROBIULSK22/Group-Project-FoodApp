import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";

function Login() {
  const navigate = useNavigate();
  const {user,setUser} = useContext(userContext)
  const getData = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const senddata = {
      userid: data.get("userid"),
      password: data.get("password"),
    };
    //Create code for calling Api and Api will return userId, useraddres
    const result = {
      userid: data.get("userid"),
      address: "mumbai",
      orderid: "No oder yet",
    };
    setUser(result);
    navigate("/Home");
  };
  return (
    <>
      <form onSubmit={getData}>
        <input type="text" name="userid" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <a href="/Adminlogin">Not a user?</a>
    </>
  );
}

export default Login;
