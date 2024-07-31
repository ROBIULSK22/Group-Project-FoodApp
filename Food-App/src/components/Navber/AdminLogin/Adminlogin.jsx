import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { useContext } from "react";
function Adminlogin() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const getData = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const senddata = {
      userid: data.get("userid"),
      password: data.get("password"),
    };
    //Create code for calling Api and Api will return userId, useraddres
    const result = True;
    setUser(result);
    navigate("/Admin");
  };

  return(
    <>
    <h1>This is admin login page

    </h1>
      <form onSubmit={getData}>
        <input type="text" name="userid" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Adminlogin;
