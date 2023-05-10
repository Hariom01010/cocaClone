import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <p class="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

                <Link to="/" class="col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logo} alt="coca cola logo" className='logo'/>
                </Link>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                    <li class="nav-item"><Link to="/contact" class="nav-link px-2 text-muted">Contact</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">FAQs</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">About</Link></li>
                </ul>
            </footer>
        </div>
    </>
  )
}

export default Footer