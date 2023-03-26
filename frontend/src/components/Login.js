import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div style={{ border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> 
            <h1>Climate app</h1>
            <p>This is the homepage of the page where you can log in </p>
            <Link to="defaultview"><button>Log in</button></Link>
            <Link to="register"><button>Register here</button></Link>     
        </div>
    )
}