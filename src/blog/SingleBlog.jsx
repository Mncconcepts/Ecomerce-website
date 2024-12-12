import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';


const socialList = [
    { link: "#", iconName: "fa-facebook", className: "fa-brands", },
    { link: "#", iconName: "fa-twitter", className: "fa-brands", },
    { link: "#", iconName: "fa-linkedin", className: "fa-brands", },
    { link: "#", iconName: "fa-instagram", className: "fa-brands", },
    { link: "#", iconName: "fa-pinterest", className: "fa-brands", },];


const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()
    // console.log(id)
    const results = blog.filter((b) => b.id === Number(id));
    console.log(results[0]);
    return (
        <div>
            <PageHeader title={"Single Blog page"} curPage={"blog / Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        results.map((item) => (
                                                            <div key={item.id}>
                                                                <div data-aos='zoom-in' className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>

                                                                <div className="post-content">
                                                                    <h4>{item.title}</h4>
                                                                    <div className="meta-post">
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}>{val.text}</i></li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <span>Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. In aspernatur labore quia tempora qui earum,
                                                                        repellat quod nesciunt aut reiciendis.</span>
                                                                    <blockquote>
                                                                        <span>
                                                                            Lorem ipsum dolor sit amet consectetur
                                                                            adipisicing elit. In aspernatur labore quia tempora qui earum,
                                                                            repellat quod nesciunt aut reiciendis.
                                                                        </span>
                                                                        <cite>
                                                                            <a href="#">...Allexa</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <span>
                                                                        Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. In aspernatur labore quia tempora qui earum,
                                                                        repellat quod nesciunt aut reiciendis.
                                                                    </span>
                                                                    <img data-aos='zoom-in' src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                    <span>Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. In aspernatur labore quia tempora qui earum,
                                                                        repellat quod nesciunt aut reiciendis.
                                                                    </span>

                                                                    <div className="video-thumb mb-4">
                                                                        <img data-aos='fade-left' src="src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/BOdUFo1JRLs" className='video-button popup'
                                                                            target='_blank'>
                                                                            <i className="fa-solid fa-play"></i>
                                                                        </a>
                                                                    </div>

                                                                    <span>
                                                                        Lorem ipsum dolor sit amet consectetur
                                                                        adipisicing elit. In aspernatur labore quia tempora qui earum,
                                                                        repellat quod nesciunt aut reiciendis.
                                                                    </span>

                                                                    <div className="tags-section">
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>

                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            <div className='Navigations-part pt-5 pb-5'>
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                    <i className="fa-solid fa-quote-left me-2"></i>Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>Lorem, ipsum dolor sit amet consectetur adipiipsum dolor sit amet
                                                        consectetur adipiipsum dolor sit amet consectetur adipiipsum dolor sit amet consectetur
                                                        
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        {/* popular tags section */}

                        <div className="col-lg-4 col-12">
                            <div className="row">
                                <div className="popular-tags">
                                    <div className="container">
                                        <h3>Most Popular Tags</h3>
                                        <span className='btn btn-outline-light text-black'>Trends</span>
                                        <span className='btn btn-outline-light text-black'>Show</span>
                                        <span className='btn btn-outline-light text-black'>Entertainment</span>
                                        <span className='btn btn-outline-light text-black'>Politics</span>
                                        <span className='btn btn-outline-light text-black'>Games</span>
                                        <span className='btn btn-outline-light text-black'>Studies</span>
                                        <span className='btn btn-outline-light text-black'>Market</span>
                                        <span className='btn btn-outline-light text-black'>Community</span>
                                        <span className='btn btn-outline-light text-black'>Highlights</span>
                                    </div>
                                    <button className='lab-btn mt-3 text-white ms-2'>See More</button>
                                </div>
                            </div>

                            {/* popular trends section */}

                            <div className="container">
                                <div className="row">
                                    <div className="card mt-5">
                                        <div className="card-title">
                                            <div className="card-text">
                                                <h3 className='ms-3 mt-5'>Most Popular Trends</h3>
                                                <div className="col-12">
                                                    <img data-aos='fade-right' src="/src/assets/images/blog/single/02.jpg" className=' ms-3 w-50 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Lorem ipsum, dolor </p>
                                                </div>

                                                <div className="col-12">
                                                    <img data-aos='fade-right' src="/src/assets/images/blog/single/01.jpg" className=' ms-3 w-50 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Lorem ipsum, dolor </p>
                                                </div>

                                                <div className="col-12">
                                                    <img data-aos='fade-right' src="/src/assets/images/blog/single/03.jpg" className=' ms-3 w-50 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Lorem ipsum, dolor </p>
                                                </div>

                                                <div className="col-12">
                                                    <img data-aos='fade-right' src="/src/assets/images/blog/01.jpg" className=' ms-3 w-50 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Lorem ipsum, dolor </p>
                                                </div>

                                                <div className="col-12">
                                                    <img data-aos='fade-right' src="/src/assets/images/blog/02.jpg" className=' ms-3 w-50 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Lorem ipsum, dolor </p>
                                                </div>

                                                <div className="col-12">
                                                    <img data-aos='fade-right' src="/src/assets/images/blog/03.jpg" className=' ms-3 w-50 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Lorem ipsum, dolor </p>
                                                </div>

                                                <div className="col-12">
                                                    <img data-aos='fade-right' src="/src/assets/images/blog/04.jpg" className=' ms-3 w-50 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Lorem ipsum, dolor </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* newseller section */}
                            <div className="col">
                                <div className="section-wrapper">
                                    <h3 className='mt-5'>Subscribe To Our Newsletter</h3>
                                    <form className='register-form'>
                                        <input type="email" name='email' placeholder='email' className='reg-input' />
                                        <button type='submit' className='mt-2 text-white lab-btn'>
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;