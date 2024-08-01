import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import Styles from "./Loginpage.module.css";
function Login() {
  const navigate = useNavigate();
  const [k,kUpdate] = useState("")
  const { user, setUser } = useContext(userContext);
  const getData = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const senddata = {
      userid: data.get("userid"),
      password: data.get("password"),
    };
    //Create code for calling Api and Api will return userId, useraddres
    fetch("http://localhost:3000/checklogin",{
      method:"post",body: JSON.stringify(senddata),headers:{"Content-type":"application/json"}
    }).then((res)=>res.json()).then((d)=>{
      if(d){
        const result = {
          userid: d.userid,
          address: d.address,
          orderid: "No oder yet",
        };
        setUser(result);
        navigate("/Home");

      }else{
        kUpdate("incorrect id or password")
      }
    }).catch((err)=>console.log(err));


  };
  return (
    <div className={Styles.loginwrapper}>
      <div className={Styles.pageContent}>
        <h1>Login</h1>
        <div className={Styles.line}></div>
        <div className={Styles.formContent}>
          <form onSubmit={getData}>
            <br />
            <input type="text" name="userid" placeholder="Username" required />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <button type="submit">Login</button>
          </form>
          <h3>{k}</h3>
        </div>
        <a href="CreateAccount">Don't have an account? </a>
        <a href="/Adminlogin">Not a user?</a>
      </div>
    </div>
  );
}

export default Login;
