import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../features/User/UserSlice'
import './Login.css'


const Signup = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()
   

    const [input, formdata] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        Address: '',
        city: ''
    })


    const HandleChange = (e) => {
        const { name, value } = e.target
        formdata({
            ...input,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        dispatch(addUser(input))
        navigate('/login')
       



    }

    return (
        <div>

            <br></br>


            <div className='Signup-Container'>



                <h4 style={{textAlign:'center'}}> Signup </h4>

                <br></br>

                <form>

                   
                    <input type="text" id="inputPassword5" className="form-control" name='username' value={input.username} placeholder='Enter Username' onChange={HandleChange} />
                    <br></br>


                   
                    <input type="email" id="inputPassword5" className="form-control" name='email' value={input.email} placeholder='Enter Your Email' onChange={HandleChange} />


                    <br></br>


                    <input type="password" id="inputPassword5" className="form-control" name='password' value={input.password} placeholder='Enter your Password' onChange={HandleChange} />
                    <br></br>

                   
                    <input type="text" id="inputPassword5" className="form-control" name='phoneNumber' value={input.phoneNumber} placeholder='Enter Your Phone number' onChange={HandleChange} />




                    <br></br>

                  
                    <input type="textarea" id="inputPassword5" className="form-control" name='Address' value={input.Address} placeholder='Enter your Address' onChange={HandleChange} />
                    <br></br>

                   
                    <input type="text" id="inputPassword5" className="form-control" name='city' value={input.city} placeholder='Enter your City' onChange={HandleChange} />
                    <br></br>

                    <button type='button' className='btn btn-success' style={{ width: '100%' }} onClick={handleSubmit}> Submit </button>



                </form>

            </div>

            <br></br>




        </div>
    )
}

export default Signup
