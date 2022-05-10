import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
            <nav class="navbar navbar-light bg-light sticky-top">
                <div class="container p-2">
                    <Link class="navbar-brand" to='/'>Hostel life 😎</Link>
                    <ul class="nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/secrets">Secrets</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register" >Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  )
}

export default Navbar