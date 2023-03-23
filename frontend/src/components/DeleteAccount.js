import React from 'react'
import { Link } from 'react-router-dom'

export default function DeleteAccount() {
    return (
        <div>
            <p>This is where you can delete account</p>
            <Link to ="/"><button>Delete account</button></Link>
        </div>
    )
}