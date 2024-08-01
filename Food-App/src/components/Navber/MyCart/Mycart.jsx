import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { useContext } from "react";
function Mycart() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  function placeOrder() {
    // i will try to create api and send data to the database
    fetch("http://localhost:3000/placeorder", {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const result = {
          userid: user.userid,
          address: user.address,
          orderid: data.orderid,
        };
        setUser(result);
        navigate("/Home");
      })
      .catch((err) => console.log(err));    
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>User Id:</td>
            <td>{user.userid}</td>
          </tr>
          <tr>
            <td>Chess and Corn</td>
            <td>{user.cheesandcorn}</td>
          </tr>
          <tr>
            <td>capsicum:</td>
            <td>{user.capsicum}</td>
          </tr>
          <tr>
            <td>margherita:</td>
            <td>{user.margherita}</td>
          </tr>
          <tr>
            <td>onion:</td>
            <td>{user.onion}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{user.address}</td>
          </tr>
          <tr>
            <td>TotalAmount:</td>
            <td>{user.totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={placeOrder}>Order</button>
    </>
  );
}
export default Mycart;
