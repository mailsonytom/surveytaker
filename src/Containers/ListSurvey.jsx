import React, { useState, useEffect } from "react";
import "./Styles.css";
import { useNavigate } from "react-router";

function ListSurvey() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const items = JSON.parse(localStorage.getItem("items"));
  console.log("Items", items);
  if (items) {
    data.push(items);
  }

  const seeMore = (user) => {
    navigate("/onesurvey", { state: user });
  };

  return (
    <div className="main">
      {data && (
        <table style={{ width: "100% ", textAlign: "left" }}>
          <tr>
            <th>Name</th>
            <th>Education</th>
            <th>Skills</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          {data.map((user) => {
            return (
              <tr>
                <td>{user.name && user.name}</td>
                <td>{user.edu && user.edu}</td>
                <td>
                  {user.skills &&
                    user.skills.map((skill) => {
                      return <span>{skill} </span>;
                    })}
                </td>
                <td>{user.gender && user.gender}</td>
                <td>{user.phone && user.phone}</td>
                <td>{user.email && user.email}</td>
                <td>
                  <button onClick={() => seeMore(user)}>See more</button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
}

export default ListSurvey;
