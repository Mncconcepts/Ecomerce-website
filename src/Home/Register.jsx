import React from 'react'
import { Link } from 'react-router-dom';
const subTitle = "Save The Day";
const title = (
    <h3 className='title'>Join us now, send us messages for your orders and prefered products</h3>
)

const desc = "Limited Time Offer! Hurry now";
const Register = () => {
    return (
        <section className='register-section pading-tb pb-0'>
            <div className="container">
                <div className="row g-4 row-cols-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div data-aos='fade-right' className="section-header">
                            <span className='subtitle pt-5 align-item-center'>{subTitle}</span>
                            {title}
                            <p className=''>{desc}</p>
                            <Link to="/sign-up" className='lab-btn'><span className='text-white'>Join Us</span></Link>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div data-aos='fade-right' data-aos-duration='2000' className="section-wrapper">
                        <h2>Register Now</h2>
                        <form className='register-form'>
                            <input type="text" name='name' placeholder='Username' className=' reg-input' />
                            <input type="email" name='email' placeholder='email' className='reg-input' />
                            <input type="number" name='number' placeholder='phone' className='reg-input' />
                            <Link to="/contact" className='lab-btn'><span className='text-white'>Register</span></Link>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Register;