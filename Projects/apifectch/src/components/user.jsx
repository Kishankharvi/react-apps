import React, { useState, useEffect } from "react";
import axios from "axios";
function User() {
  const Endpoint = "https://jsonplaceholder.typicode.com/users";
  const [emailList, setEmailList] = useState([]);
  const getEmailList = async () => {
    try {
      const fetchData = await axios.get(Endpoint, {
        headers: {
          authorization: "Bearer JWT Token",
        },
      });
      setEmailList(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("load", getEmailList);
    return () => {
      window.removeEventListener("load", getEmailList);
    };
  }, [emailList]);
  return (
    <div className="container mt-5">
      <h2 className="mb-4">React Create Array State from REST API Examle</h2>
      {emailList.map((res) => {
        return (
          <li className="card p-3 mb-2" key={res.id}>
            <div className="card-body">
              <p className="card-text">{res.email.toLowerCase()}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
}
export default User;
