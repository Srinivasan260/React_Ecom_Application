import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkUser } from '../features/User/UserSlice'
import './Login.css'
const Loginpage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const message = useSelector((state)=> state.users.message)

    const [input,formdata] = useState({
        email : '',
        password :'',


    })  

    const HandleChange = (e) =>{
        const {name,value} = e.target
        formdata({
            ...input,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(checkUser(input,navigate))
        
     

      };



    return (
        <div>

            <br></br><br></br>

            <div className='Login-Container'>

                <h4 style={{ textAlign: 'center' }}> Login Page </h4>

                <br></br>

                <form>

                    <label  className="form-label">Email</label>
                    <input type="text" id="inputPassword5" className="form-control" name='email'  value={input.email} aria-describedby="passwordHelpBlock" placeholder='Enter Your Email' onChange={HandleChange} />
                          
                
                <br></br>


                    <label  className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control"  name='password'  value={input.password} aria-describedby="passwordHelpBlock" placeholder='Enter your Password' onChange={HandleChange} />
                    <br></br>
                    <br></br>

                    <button type='button' className='btn btn-success' style={{ width: '100%',height:'6vh' }} onClick={handleSubmit}>login </button>

                    <br></br>

                </form>



            </div>


        </div>
    )
}

export default Loginpage
