import React, { useState, createContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/Action/User";
import { TextField, makeStyles, Button } from "@material-ui/core";
import style from "./Home.module.css";

const Home = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    aadhar: "",
    address: "",
    city: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    const { startDate, endDate } = date[0];
    const days = new Date(endDate).getDate() - new Date(startDate).getDate();

    const data = {
      user,
      startTime: new Date(startDate).toLocaleString(),
      endTime: new Date(endDate).toLocaleString(),
      days,
    };

    if (
      user.name === "" ||
      user.email === "" ||
      user.contact === "" ||
      user.address === "" ||
      user.aadhar === "" ||
      user.city === "" ||
      data.days === "" ||
      endDate === null ||
      data.startTime === ""
    ) {
      return alert("Please fill all the details");
    }

    dispatch(addUser(data));

    setUser({
      name: "",
      email: "",
      contact: "",
      aadhar: "",
      address: "",
      date: "",
      city: "",
    });
  };

  return (
    <div className={style.container}>
      <Navbar></Navbar>
      <h1 className={style.title}>Home</h1>
      <form  autoComplete="on" className={style.form}>
        <h3>Enter user info</h3>

        <TextField
          required
          type="text"
          id="filled-required"
          label="Name"
          variant="filled"
          name="name"
          onChange={handleChange}
          value={user.name}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField
          required
          id="filled-required"
          label="Email"
          variant="filled"
          type="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField
          required
          id="filled-required"
          label="Contact No."
          variant="filled"
          type="number"
          name="contact"
          onChange={handleChange}
          value={user.contact}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField
          required
          id="filled-required"
          label="Aadhar Card No."
          variant="filled"
          type="number"
          name="aadhar"
          onChange={handleChange}
          value={user.aadhar}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField
          required
          id="filled-required"
          label="Address"
          variant="filled"
          type="address"
          name="address"
          onChange={handleChange}
          value={user.address}
          variant="outlined"
          color="primary"
        />
        <br />
        <TextField
          required
          id="filled-required"
          label="City"
          variant="filled"
          type="address"
          name="city"
          onChange={handleChange}
          value={user.city}
          variant="outlined"
          color="primary"
        />
        <br />
        <DateRange
          className={style.date}
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          value={user.date}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
        
      </form>
    </div>
  );
};

export default Home;
