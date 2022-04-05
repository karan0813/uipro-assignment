import React from 'react'

const Contect = () => {
    return (
        <>
            <div className="container  mt-5 ">
                <h1 className="text-center mt-5">Contect  Us</h1>

            </div>
            <div className="container  mt-5">
                <p className="font-weight-bold">please fill in the details below, Our representative will call you shortly.</p>
                <div className="row ">
                    <div className="col-md-9" >
                        <label className="mt-3 font-weight-bold ">Name*</label>
                        <input className="w-100 Inputcolor border px-3 py-1" type="text" />
                        <div className="row ">
                            <div className="d-flex flex-column col-md-6">
                                <label className="mt-3 font-weight-bold ">Email*</label>
                                <input className="w-100 Inputcolor border px-3 py-1" type="text" />
                            </div>
                            <div className="d-flex flex-column col-md-6">
                                <label className="mt-3 font-weight-bold ">Mobile Number*</label>
                                <input className="w-100 Inputcolor border px-3 py-1" type="text" />
                            </div>
                        </div>
                        <label className="mt-3 font-weight-bold ">Subject*</label>
                        <input className="w-100 Inputcolor border px-3 py-1" type="text" />
                        <label className="mt-3 font-weight-bold ">Message*</label>
                        <textarea className="w-100 Inputcolor border px-3 py-1" rows="5" cols="10" type="text" />
                        <div className="mt-3 w-100 text-center ">
                            <button className="px-5 py-1 border testmonilvieo w-25">Send</button>
                        </div>


                    </div>
                    <div className="col-md-2 ml-3">
                        <div className="mt-5">
                            <span className="font-weight-bold">Address</span>
                            <p>201, Hem Plaza, Fraser Rd, Opposite Jagat Trade Centre, Patna, Bihar</p>
                        </div>
                        <div className="">
                            <p><span className="font-weight-bold">Phone</span><br />
                                95465 20899
                                85218 78717</p>
                        </div>
                        <div className="">
                            <p><span className="font-weight-bold">Email</span><br />
                                itswaiz852@gmail.com
                                abbhyudayasvatsa@gmail.com
                                millioncareersofficial@gmail.com</p>

                        </div>


                    </div>
                </div>
                {/* bubble */}
                <div className="bubblecontect">

                </div>

            </div>
        </>
    )
}

export default Contect