import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class=" container-fluid  ">
            <div class="row   ">
                <div className="col-md-12 background  ">
                    <div className="ml-5 mt-5 ">
                        <img src="million 1.png " className="w-25 ml-5  " alt="..." />

                    </div>
                    <div class=" background2 " id="navbarNav">
                        <ul class=" d-flex  p-5 justify-content-center align-items-center text-decoration-none ">
                            <li class=" list-unstyled  pr-3">
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    <h5 className="text-dark"> Service</h5>
                                </Link>
                            </li>
                            <li class=" list-unstyled pr-3">
                                <Link style={{ textDecoration: 'none' }} to="/about">
                                    <h5 className="text-dark">About</h5>
                                </Link>
                            </li>
                            <li class=" list-unstyled pr-3">
                                <Link style={{ textDecoration: 'none' }} to="/blogs">
                                    <h5 className="text-dark">Blogs</h5>
                                </Link>
                            </li>
                            <li class=" list-unstyled pr-3">
                                <Link style={{ textDecoration: 'none' }} to="/contect">
                                    <h5 className="text-dark">Contect Us</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar