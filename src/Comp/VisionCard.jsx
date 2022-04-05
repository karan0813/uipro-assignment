import React from 'react'

const VisionCard = ({ tittle, Content, ImageUrl, order }) => {
    const carddata = [
        {
            order: false,
            tittle: "Vision",
            Content: "Million Careers will ensure that every unemployed and employable youth  gets the required opportunity, support and resources to find employment and prosperity. It's vision  is freeing the world from joblessness.",
            ImageUrl: "MERIDIAN - WEBSITE - about us 1.png"

        }, {
            order: true,
            tittle: "Mission",
            Content: "We are in the mission mode to guide & nurture around 10 lakh students and job aspirants to find their dream jobs or help them with their startups through our experts advice & monetary assistance.  We strive to keep pace with the new industrial trends, tools, and strategies as well as provide help in developing new (or improve existing) skills for the purpose of career advancement and professional growth.",
            ImageUrl: "mission 1.png"

        }
    ]
    return (

        <>

            {
                carddata.map((data, index) => (
                    <div className="container mt-5 ">
                        <div className="row">
                            <div className={` col-md-6  ${data.order ? "order-2" : "order-1"}`}>
                                <img className="w-75 h-75 ml-5 mt-4" src={data.ImageUrl} alt='...' />
                            </div>
                            <div className={` col-md-6 mt-4 ${data.order ? "order-1" : "order-2"}`}>
                                <h1 className="w-25">{data.tittle}</h1>
                                <p className={data.order ? "w-100" : "w-75"}>{data.Content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="bubblevisonpink"></div>
            <div className="bubblevisonyellow"></div>
            <div className="bubblevisonyellow14"></div>
            <div className="bubbleblogspink13"></div>


        </>



    )
}

export default VisionCard