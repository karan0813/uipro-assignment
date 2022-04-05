import React from 'react'

const Card = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5 d-flex flex-column justify-content-center align-items-center ">
                    <h1 className="w-100">What is Millon Careers?</h1>
                    <p className="w-100">Millioncareers is primarily a movement to ensure our country's youth
                        has a solid career, this organisation work towards helping them
                        through training and guidance with every step of their career.</p>
                </div>
                <div className="col-md-7 index">
                    <img className=" w-100  rounded-lg" src="unsplash_LskCjwwJBEQ.png" alt='' />
                </div>
            </div>

        </div>
    )
}

export default Card