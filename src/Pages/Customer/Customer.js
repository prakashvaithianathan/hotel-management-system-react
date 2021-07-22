import React,{createContext} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import {useSelector,useDispatch} from 'react-redux'
import {deleteUser,editUser}  from '../../Store/Action/User'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@material-ui/core'
import {Edit,Delete } from "@material-ui/icons"
import style from './Customer.module.css'

const Customer = () => {

    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()

 
    return (

        <div>
            
         
           
            <Navbar></Navbar>
            <h1 className={style.title}>Customer</h1>


            <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                      <TableHead className={style.tableHeading}>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="center">Email</TableCell>
                          <TableCell align="center">Contact</TableCell>
                          <TableCell align="center">Aadhar no.</TableCell>
                          <TableCell align="center">Address</TableCell>
                          <TableCell align="center">City</TableCell>
                          <TableCell align="center">Start Time</TableCell>
                          <TableCell align="center">End Time</TableCell>
                          <TableCell align="center">Total Days</TableCell>
                          <TableCell align="center">Edit</TableCell>
                          <TableCell align="center">Action</TableCell>
                        </TableRow>
                      </TableHead>

            {users.map((user,index)=>{
                
                return(
         <TableBody>
                      
                          <TableRow key={index}>
                            <TableCell  scope="row">{user.user.name}</TableCell>
                            <TableCell align="right">{user.user.email}</TableCell>
                            <TableCell align="right">{user.user.contact}</TableCell>
                            <TableCell align="right">{user.user.aadhar}</TableCell>
                            <TableCell align="right">{user.user.address}</TableCell>
                            <TableCell align="right">{user.user.city}</TableCell>
                            <TableCell align="right">{user.startTime}</TableCell>
                            <TableCell align="right">{user.endTime}</TableCell>
                            <TableCell align="right">{user.days}</TableCell>
                           <TableCell><Edit onClick={()=>dispatch(editUser(index))}></Edit></TableCell> 
                          <TableCell><Delete onClick={()=>dispatch(deleteUser(index))}></Delete></TableCell>  
                          </TableRow>
                         
                      </TableBody>
                       )
                    })}
                    </Table>
                  </TableContainer>

               
        </div>
    )
}

export default Customer
