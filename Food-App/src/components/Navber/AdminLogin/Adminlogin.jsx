import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { useContext } from "react";
import { useState } from "react";
import Styles from "./AdminLogin.module.css";
function Adminlogin() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [k, kUpdate] = useState("");
  const getData = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const senddata = {
      userid: data.get("userid"),
      password: data.get("password"),
    };
    //Create code for calling Api and Api will return userId, useraddres
    fetch("http://localhost:4000/Adminlogin", {
      method: "post",
      body: JSON.stringify(senddata),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((d) => {
        if (d) {
          setUser(d);
          navigate("/Admin");
        } else {
          kUpdate("incorrect id or password");
          console.log(d);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.Adminlogin}>
      <div className={Styles.Adminpage}>
        <h1>Admin Login</h1>
        <hr></hr>
        <form onSubmit={getData}>
          <input type="text" name="userid" placeholder="UserName" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <h3>{k}</h3>
      </div>
    </div>
  );
}
export default Adminlogin;
