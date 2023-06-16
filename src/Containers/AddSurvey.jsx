import React, { useState, useEffect } from "react";
import "./Styles.css";
import { Navigate, useLocation, useNavigate } from "react-router";

function AddSurvey() {
  const [Name, setName] = useState();
  const [education, seteducation] = useState();
  const [skills, setskills] = useState([]);
  const [gender, setgender] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();

  const [UserData, setUserData] = useState([]);

  const navigate = useNavigate();

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const eduChange = (e) => {
    seteducation(e.target.value);
  };

  const skillChecked = (e) => {
    if (e.target.checked) {
      skills.push(e.target.value);
    }
  };

  const genderChange = (e) => {
    setgender(e.target.value);
  };

  const phoneChange = (e) => {
    setphone(e.target.value);
  };

  const emailChange = (e) => {
    setemail(e.target.value);
  };

  const submitData = () => {
    if (!Name) {
      alert("Name is Mandatory");
    } else if (!phone) {
      alert("Phone number is mandatory");
    } else {
      const userData = {
        name: Name,
        edu: education,
        skills: skills,
        gender: gender,
        phone: phone,
        email: email,
      };
      console.log("Userdata", userData);
      setUserData(userData);
      localStorage.setItem("items", JSON.stringify(userData));
      console.log("Localstorage", localStorage.getItem("items"));
      setTimeout(() => {
        alert("Submitted");
        navigate("/listsurvey");
      }, 1000);
    }
  };

  return (
    <div>
      <p className="heading">Add Survey</p>
      <div className="main">
        <div className="contentDiv">
          <label htmlFor="name">Enter Name</label>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={nameChange}
          />
        </div>
        <div className="contentDiv">
          <label htmlFor="edu">Select Education</label>
          <br />
          <select name="edu" className="eduselect" onChange={eduChange}>
            <option value=""></option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </div>
        <div className="contentDiv">
          <label>Choose Skills</label>
          <br />
          <span htmlFor="skill">Javascript</span>
          <input
            type="checkbox"
            name="skill"
            id="skill"
            value="Javascript"
            onChange={skillChecked}
          />
          <span htmlFor="skill">HTML, CSS</span>
          <input
            type="checkbox"
            name="skill"
            id="skill"
            value="HTMl,CSS"
            onChange={skillChecked}
          />
          <span htmlFor="skill">Python</span>
          <input
            type="checkbox"
            name="skill"
            id="skill"
            value="Python"
            onChange={skillChecked}
          />
        </div>
        <div className="contentDiv">
          <label>Select Gender</label>
          <br />
          <span htmlFor="gender">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={genderChange}
          />
          <span htmlFor="gender">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={genderChange}
          />
        </div>
        <div className="contentDiv">
          <label htmlFor="">Enter Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            onChange={phoneChange}
          />
        </div>
        <div className="contentDiv">
          <label htmlFor="">Enter Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={emailChange}
          />
        </div>
      </div>
      <button onClick={submitData}>SUBMIT</button>
    </div>
  );
}

export default AddSurvey;
