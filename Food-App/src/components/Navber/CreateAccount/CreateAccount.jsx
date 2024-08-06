import { useState } from "react";

function CreateAccount() {
  const [data, updateData] = useState("");
  function Register(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const senddata = {
      userid: data.get("userid"),
      password: data.get("password"),
      address: data.get("address"),
    };
    //create code for calling Api and api will return register successfull
    fetch("http://localhost:4000/createAccount",{
      method:"post",body: JSON.stringify(senddata),headers:{"Content-type":"application/json"}
    }).then((res)=>res.json()).then((d)=>updateData(d)).catch((err)=>console.log(err));
    
  }
  return (
    <>
      <h1>This is create Account page</h1>
      <form onSubmit={Register}>
        <input type="text" name="userid" />
        <input type="password" name="password" />
        <input type="text" name="address" />
        <button type="submit">Register</button>
      </form>
      <h2>{data.mesg}</h2>
      <a href="/Home">Go to Home</a>
    </>
  );
}
export default CreateAccount;
