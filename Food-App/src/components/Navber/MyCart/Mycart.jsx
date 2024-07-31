import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { useContext } from "react";
function Mycart() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  function placeOrder(){
    // i will try to create api and send data to the database
    const result = {
      userid:user.userid,
      address:user.userAddress,
      orderid:"3934349",
    }
    setUser(result);
    navigate("/Home");
  }

  return (
    <>
      <h1>{console.log(user)}</h1>
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
            <td>{user.userAddress}</td>
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
