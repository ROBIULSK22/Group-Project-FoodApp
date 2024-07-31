import { useContext, useEffect } from "react";
import { userContext } from "../../../App";

function Admin() {
    const {user,setUser} = useContext(userContext);
    function fetchData(){
        console.log("Fecting data");
    }

    useEffect(()=>{
        fetchData()
    },[]);
      if (user) {
    return (
      <>
        <h1>welcome:Shop kepper</h1>
       
      </>
    );
  } else {
    <h1>Your not loggined</h1>;
  }
}
export default Admin;