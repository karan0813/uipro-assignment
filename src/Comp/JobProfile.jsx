import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const JobProfile = () => {
    return (
        <div className="primary mx-1">
            <div className="container   bg-transparent">
                <div className='row'>
                    <div className='col-md-12'>
                        <p className="text-center mt-4 text-white font-weight-bold">Our Latest Blog</p>
                        <h1 className="text-center mt-4 text-white">What job is BEST for you ?</h1>
                        <div className="container mt-4 pb-3">
                            <div className="row  align-content-center justify-content-center">
                                <div className="col-md-3 ml-lg-5  ">
                                    <img className="w-75 rounded-lg" src="unsplash_Fsgzm8N0hIY.png" alt="..." />
                                    <p className="mt-2 font-weight-bold text-white">The Great Resignation</p>
                                    <button className="bg-transparent  font-weight-bold h-6 text-white text-sm-left  border-bottom border-left-0 border-right-0 border-top-0 border-light">Read Now <ArrowForwardRoundedIcon fontSize='small' /></button>


                                </div>
                                <div className="col-md-3 ">
                                    <img className="w-75 rounded-lg" src="unsplash_uAFjFsMS3YY.png" alt="..." />
                                    <p className="mt-2 font-weight-bold text-white">The Great Resignation</p>
                                    <button className="bg-transparent  font-weight-bold h-6 text-white text-sm-left  border-bottom border-left-0 border-right-0 border-top-0 border-light">Read Now <ArrowForwardRoundedIcon fontSize='small' /></button>


                                </div>
                                <div className="col-md-3">
                                    <img className="w-75 rounded-lg" src="unsplash_NjirplnVra8.png" alt="..." />
                                    <p className="mt-2 font-weight-bold text-white">The Great Resignation</p>
                                    <button className="bg-transparent  font-weight-bold h-6 text-white text-sm-left  border-bottom border-left-0 border-right-0 border-top-0 border-light">Read Now <ArrowForwardRoundedIcon fontSize='small' /></button>



                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default JobProfile