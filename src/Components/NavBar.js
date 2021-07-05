import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <nav className="navbar shadow .navbar-fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Contact Crud</Link>

                    <div>
                        <Link className="btn btn-light" to="/contacts/add">Create Contact</Link>
                    </div>
              </div>
            </nav>
            
        </div>
    )
}


export default NavBar
