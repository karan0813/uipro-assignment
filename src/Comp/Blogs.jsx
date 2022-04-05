import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

const Blogs = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center font-weight-bold mt-4">Blogs</h3>
            <h1 className="mt-4">Lorem ipsum dolor</h1>
            <div className="d-flex mt-3">
                <div className="d-flex justify-content-center ">
                    < PersonIcon fontSize='small' />
                    <p className="pl-2">Aman Verma</p>

                </div>
                <div className="d-flex ml-2 justify-content-center ">
                    <ForumRoundedIcon fontSize='small' />
                    <p className="pl-2">Aman Verma</p>

                </div>
            </div>
            <div className="bubbleblogspink"></div>
            <div className="bubbleblogsyellow"></div>

            <div className="container">
                <div className='row'>
                    <div className="row mt-2">
                        <div className="col-md-5">
                            <img src="Rectangle 2.png" className="w-100" alt="..." />

                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis elit eget aliquam laoreet vel, sagittis mattis enim. Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras. Malesuada quam cursus blandit amet. Odio nisi, commodo feugiat purus. In rhoncus, elementum donec neque. Feugiat ultrices duis mattis imperdiet hac facilisis turpis amet. Gravida egestas nec id euismod elit. Sit laoreet nunc, nec iaculis nisl. Convallis donec amet, id ullamcorper sapien justo, congue mauris.</p>

                            <p> Ut et, velit, euismod commodo, laoreet ullamcorper dignissim donec in. Pretium eget faucibus sagittis ultricies. Enim dictum tortor ut faucibus amet ac dui auctor ipsum. Massa sed mi lorem ut vel. Turpis sed nulla nam adipiscing praesent. Tortor posuere gravida in rhoncus, quis adipiscing aliquet leo orci. Duis ipsum, consequat ac commodo viverra.</p>

                        </div>
                        <div className="col-md-12 mt-5">
                            <p>Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras. Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor.
                                Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor.<br />
                                Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor.
                                Sed est id consectetur molestie cras.Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogs