import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Styles.css"

function OneSurvey() {
//   const [state, setstate] = useState();

  const { state } = useLocation();

//   useEffect(() => {
//     setstate(state);
//   }, [state]);

  return (
    <div>
        <p className="heading">USER DETAILS</p>
      <p>Name: {state.name && state.name}</p>
      <p>Education: {state.edu && state.edu}</p>
      <p>
        Skills:{" "}
        {state.skills &&
          state.skills.map((skill) => {
            return <span>{skill}</span>;
          })}
      </p>
      <p>Gender: {state.gender && state.gender}</p>
      <p>Phone: {state.phone && state.phone}</p>
      <p>Email: {state.email && state.email}</p>
    </div>
  );
}

export default OneSurvey;
