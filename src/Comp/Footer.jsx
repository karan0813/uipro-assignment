import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ IStrue }) => {
    return (
        <div className={`container-fluid h-25 ${IStrue ? "mt-0" : "mt-5"} `}>
            <div className='row footer'>
                <div className="col-md-3 p-5  ">
                    <p className="font-weight-light border-bottom pb-3 border-dark">Millioncareers is primarily a movement to ensure our country's youth
                        has a solid career, this organisation work towards helping them
                        through training and guidance with every step of their career.</p>

                </div>
                <div className="col-md-5 p-5 text-center ">

                    <li className="list-unstyled pb-3 font-weight-bold"> <Link style={{ textDecoration: 'none', color: "white" }} to="/" >Home</Link></li>
                    <li className="list-unstyled pb-3 font-weight-bold"> <Link style={{ textDecoration: 'none', color: "white" }} to="/about" >About Us</Link></li>
                    <li className="list-unstyled pb-3 font-weight-bold"> <Link style={{ textDecoration: 'none', color: "white" }} to="/" >Our Service</Link></li>
                    <li className="list-unstyled pb-3 font-weight-bold"> <Link style={{ textDecoration: 'none', color: "white" }} to="/blogs" >Blogs</Link></li>
                    <li className="list-unstyled pb-3 font-weight-bold"> <Link style={{ textDecoration: 'none', color: "white" }} to="/" >Testimonial</Link></li>


                </div>

                <div className="col-md-3">
                    <p className="text-center pt-5 font-weight-bold">Follow Us On</p>
                    <div className="d-flex w-75 ml-5 p-2 h-25">
                        <img className="rounded-circle w-25 h-75  mr-4 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDNq9_o_mE36YJ2fuKw3yu93GbQ98Mo53WHi-4zDF1Q&s" alt=".." />
                        <img className="rounded-circle w-25 h-75  mr-4 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzMryeVMY8pZ5nn7NBBT27PZYPLjgoi8dPgDXDiyx9bYBt5UEeM0B6-BDSMP41uQbusM&usqp=CAU" alt=".." />
                        <img className="rounded-circle w-25 h-75  mr-4 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/1200px-YouTube_social_red_square_%282017%29.svg.png" alt=".." />
                        <img className="rounded-circle w-25 h-75  mr-4 " src="https://icones.pro/wp-content/uploads/2021/02/instagram-logo-icone4.png" alt=".." />

                    </div>
                    <p className="text-center pt-2  ml-5 font-weight-bold">Download Our Mobile App</p>


                </div>



            </div>
        </div>
    )
}

export default Footer