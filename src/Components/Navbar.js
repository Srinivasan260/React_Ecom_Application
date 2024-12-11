import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {

  var islogin = sessionStorage.getItem('login') 
  console.log(islogin)
  


 

  const location = useLocation();
  const navigate = useNavigate() 

  const handlelogout = ()=>{
    alert('Logged out')
    sessionStorage.removeItem('login')
    navigate('/login')
    
  


  }
  return (
    <div>

      <nav className="navbar bg-primary border-bottom border-body" data-bs-theme="dark"  style={{position:'sticky',top:'1px'}} >

        <div style={{ display: 'flex', flexDirection: 'row', color: 'white', padding: '10px', alignItems: 'center', width: '100%', justifyContent: 'space-around', }}>
          
          <div style={{ display: 'flex', gap: '20px' }}>
          <img src="https://img.freepik.com/free-vector/indian-digital-currency-einr-erupi-symbol-contactless-payments-vector_1017-46604.jpg?t=st=1733925032~exp=1733928632~hmac=1009b96e405f9b27d66a6f586ad6118255a8570dfdf1395ff4823155d3a86191&w=740"   style={{width:'50px',height:'40px',borderRadius:'20px'}}/>
          <h3> Quitz  </h3>

          </div>
        


          <div style={{ display: 'flex', gap: '20px' }} >

            <Link to="/"  style={{color:'white',textDecoration:'none', textDecoration: location.pathname === '/' ? 'underline' : 'none'}}> <h5> Home  </h5>  </Link>
            <Link to="/cart" style={{color:'white',textDecoration:'none', textDecoration: location.pathname === '/cart' ? 'underline' : 'none'}}> <h5> Cart </h5> </Link>
            <Link to="/orders" style={{color:'white',textDecoration:'none', textDecoration: location.pathname === '/orders' ? 'underline' : 'none'}}> <h5> Order </h5> </Link>

          </div>



          <div style={{ display: 'flex', gap: '30px', marginRight:'3px',alignItems:'flex-end' }} >
            {
              islogin ?  <>
              <Link to="/Signup" >  <button className='btn btn-light' onClick={handlelogout}> Logout  </button></Link>  <h5><i class="bi bi-person-fill"></i> {islogin}</h5>
              
              </> :
              <>
              <Link to="/login" >  <button className='btn btn-light'> Login  </button></Link>
              <Link to="/Signup" >  <button className='btn btn-light'>  Signup   </button></Link>

              </>  
            }

          

          </div>


        </div>







      </nav>

    </div>
  )
}

export default Navbar
