import { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";

function Admin() {
  const { user, setUser } = useContext(userContext);
  const [data, setData] = useState([{ column1: "No Data", column2: "No Data" }]);

  function fetchData() {
    console.log("Fetching data");
    // Add logic to fetch data here
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (user) {
    return (
      <>
        <h1>Welcome: Shopkeeper</h1>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((obj, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(obj).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } else {
    return <h1>You are not logged in</h1>;
  }
}

export default Admin;
