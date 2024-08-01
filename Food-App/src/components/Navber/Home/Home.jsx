import { useContext } from "react";
import { userContext } from "../../../App";
import { useNavigate } from "react-router-dom";
function Home() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const finalOrder = (event)=>{
    event.preventDefault();
    const data = new FormData(event.target);
    const senddata = {
      userid: user.userid,
      cheesandcorn:data.get("cheesandcorn"),
      capsicum:data.get("capsicum"),
      margherita:data.get("margherita"),
      onion:data.get("onione"),
      address:user.address,
      totalAmount:data.get("cheesandcorn")*110+data.get("capsicum")*90+data.get("margherita")*120+data.get("onione")*300,
  
    };
    setUser(senddata)
    navigate("/Mycart")
  }
  if (user) {
    return (
      <>
        <h1>welcome:{user.userid}</h1>
        <h2>You have order from:{user.address}</h2>
        <h2>order id:{user.orderid}</h2>
        <form onSubmit={finalOrder}>
          <input type="number" name="cheesandcorn" min="0"defaultValue={0} />
          <input type="number" name="capsicum" min="0"defaultValue={0} />
          <input type="number" name="margherita" min="0"defaultValue={0} />
          <input type="number" name="onione" min="0"defaultValue={0} />
          <button type="submit">Add</button>
        </form>
      </>
    );
  } else {
    <h1>Your not loggined</h1>;
  }
}
export default Home;
