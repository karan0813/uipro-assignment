import React from 'react'

const Careercard = () => {
    const Assessment = [
        {
            order: false,
            tittle: "Career Assessment",
            Content: "Develop a deeper understanding of yourself to avail suitable career recommendations. Our career assessment is based on the analysis of interest, emotional quotient, aptitude, personality tests & knowledge. We follow a multidimensional assessment that provides encyclopaedic & exact analysis.",
            ImageUrl: "undraw_Career_development_re_sv91 1.png"
        },
        {
            order: true,
            tittle: "Interactive Streem",
            Content: "Suit yourself with the perfect fit of careers by matching insights about your schedule, work style, motivators, & more with the help of interactive activities.",
            ImageUrl: "undraw_breaking_barriers_vnf3 1.png"

        },
        {
            order: false,
            tittle: "One-on-One Intreactive Sessions",
            Content: "Decide your career through personalised expert guidance offered by our career coaches with mentoring experience for over a million youth.",
            ImageUrl: "undraw_Public_discussion_re_w9up 1.png"

        },
        {
            order: true,
            tittle: "Training (students/Aspirants/youth)",
            Content: "Through appropriate career counselling, training and Skills Development Support (ITIs, NSDC), Spoken English, Personal Development, Conversational Preparation, Eligibility Preparation (English, Mathematics, DI, LR, GK, GS, Current News).",
            ImageUrl: "undraw_Add_tasks_re_s5yj 1.png"

        },
        {
            order: false,
            tittle: "Financial assistance & start-up envisage",
            Content: "Get advised with your tuition fees, grants & scholarships, work study & loans with the help of our experienced guides. We also provide envisage for start-up by helping them with micro loans & financial aid, along with Techno-economic support.",
            ImageUrl: "undraw_Vault_re_s4my (1) 1.png"


        }
    ]
    return (
        <>
            {Assessment.map((data, index) => (
                <div key={index} className=" container  mt-5">
                    <div className="row   ">
                        <div className={`col-md-8 ${data.order && "order-2"}`}>
                            <h1 className=" py-2">{data.tittle}</h1>
                            <p className='linespace'>{data.Content}</p>

                        </div>
                        <div className={`col-md-4 ${data.order && "order-1"} mt-4 p-2`}>
                            <img className="w-100  " src={data.ImageUrl} alt="..." />
                        </div>

                    </div>


                </div>
            ))}
        </>
    )
}

export default Careercard