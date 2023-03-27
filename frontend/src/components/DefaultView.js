import React from 'react'
import { Link } from 'react-router-dom'

export default function DefaultView() {
    return (
        <div className="default">
            <div className="navbar">
                <div><Link to="/changepassword"><button>Change Password</button></Link></div>
                <div><Link to="/deleteaccount"><button>Delete Account</button></Link></div>
                <div><Link to="/"><button>Logout</button></Link></div>
            </div>
            <p>This is the default view user gets when logged in</p>
            <p>Tähän alle näkymät V1 ja V2 allekkain ??</p>
        </div>
    )
}