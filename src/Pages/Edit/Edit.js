import React,{useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {addUser} from '../../Store/Action/User'
import { TextField, makeStyles, Button } from "@material-ui/core";
import style from './Edit.module.css'



const Edit = () => {

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: "selection",
        },
      ]);
      const users = useSelector((state)=>state.edit)
// console.log(users[0].user.name);

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        aadhar: "",
        address: "",
        date: "",
      });



const dispatch = useDispatch()

const handleClick =(event)=>{
 event.preventDefault();
 const { startDate, endDate } = date[0];
    const days = new Date(endDate).getDate() - new Date(startDate).getDate()+1;

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
      data.days === "" ||
      endDate === null ||
      data.startTime === ""
    ) {
      return alert("Please fill all the details");
    }



    dispatch(addUser(data));

    setUser({
      name: '',
      email: "",
      contact: "",
      aadhar: "",
      address: "",
      date: "",
    });
}

const handleChange = (event) => {
    const { name, value } = event.target;
    
   
    setUser((prevUser) => {
   
      return {
        
        ...prevUser,
        [name]: value,
      };
    });
  };
 
 

  
  
  useEffect(() =>{
    if(!users){
      return (
        <div>
            <Navbar></Navbar>
              <h1 className={style.title}>Edit</h1>
        </div>
      )
    }
    
    setUser({
      name: users[0].user.name,
      email: users[0].user.email,
      contact: users[0].user.contact,
      aadhar: users[0].user.aadhar,
      address: users[0].user.address,
      city: users[0].user.city,
      date:{
        startDate:new Date(users[0].startTime),
        endDate:new Date(users[0].endTime)
      } 
    });

 console.log(user.date.startDate);
  
  },[])
  
  

  if(users){

    return (
        <div>
            <Navbar></Navbar>
            <h1 className={style.title}>Edit</h1>

        

            <form Validate autoComplete="on" className={style.form}>
        <h3>Enter user info</h3>

        <TextField
          required
          id="filled-required"
          label="Name"
          variant="filled"
          // type="text"
          name="name"
          onChange={handleChange}
          value={user.name}
          variant="outlined"
          color="secondary"
        />
        <br />
        <TextField
          required
          id="filled-required"
          label="Email"
          variant="filled"
          // type="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          variant="outlined"
          color="secondary"
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
          color="secondary"
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
          color="secondary"
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
          color="secondary"
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
          color="secondary"
        />
        <br />
        <DateRange
        className={style.date}
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          // value={user.date}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
        {/* <button onClick={handleClick}>Submit</button> */}
      </form>



        </div>
    )
}
else{
    return(
        <div>
            <Navbar></Navbar>
            <h1 className={style.title}>Edit</h1>
        </div>
    )
}
}

export default Edit
