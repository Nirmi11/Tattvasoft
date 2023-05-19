import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../componenet/Header'
import Footer from '../componenet/Footer'

 function Login() {
  return (
    <div>Login
<Header/>
        <Link to="/register">Register</Link>
        <Footer/>
        </div>
  )
}
export default Login