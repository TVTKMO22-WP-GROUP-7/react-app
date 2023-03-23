import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <p>This is the page where you can register new user</p>
            <Link to="/"><button>Log in here</button></Link>
        </div>
    )
}