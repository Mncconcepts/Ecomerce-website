import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from './components/PageHeader';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ProductDisplay from './ProductDisplay';
import Review from './Review';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch("./src/products.json").then(res => res.json()).then(data => setProduct(data))
    }, [])

    const result = product.filter((p) => p.id === id);
    // console.log(result)


    return (
        <div>
            <PageHeader title={"Order Place"} curPage={"Shop/Single Product"} />
            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            {/* images section for single products */}
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={"true"}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false
                                                        }}

                                                        className="mySwiper">
                                                        {
                                                            result.map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className='single-thumb'>
                                                                        <img src={item.img} alt="" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                    <div className="pro-single-next">
                                                        <i className="fa-solid fa-chevron-left"></i>
                                                    </div>
                                                    <div className="pro-single-prev">
                                                        <i class="fa-solid fa-chevron-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* details section */}
                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                <div>
                                                    {
                                                        result.map(item => <ProductDisplay key={item.id} item={item} />)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* reviews */}
                                <div className="reviews">
                                    <Review />
                                </div>
                            </article>
                        </div>

                        {/* right side */}
                        <div className='col-lg-4 col-12'>
                            <div className="container">
                                <div className="row">
                                    <div className="card">
                                        <div className="card-title">
                                            <div className="card-text">
                                                <h3 className='ms-3 mt-2 mb-4'>Most Popular Item</h3>
                                                <div className="col-12">
                                                    <img src="./src/assets/images/carttwo/01(9).png" className=' ms-3 w-25 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Essential Striping  Belt</p>
                                                </div>

                                                <div className="col-12">
                                                    <img src="./src/assets/images/carttwo/01(2).png" className=' ms-3 w-25 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Essential Men's Shoe </p>
                                                </div>

                                                <div className="col-12">
                                                    <img src="./src/assets/images/carttwo/01(1).png" className=' ms-3 w-25 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Essential Men's Shoe</p>
                                                </div>
                                                <div className="col-12">
                                                    <img src="./src/assets/images/carttwo/01(5).png" className=' ms-3 w-25 ' alt="" />
                                                    <small className='ms-3'>Lorem ipsum, dolor </small>
                                                    <p className="mt-2 ms-3 text-danger ">Explicite Wrist Watch</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* news Channel */}
                            <div className="col">
                                <div className="section-wrapper pt-2">
                                    <h3 className='mt-5'>Subscribe To Our Newsletter</h3>
                                    <form className='register-form'>
                                        <input type="email" name='email' placeholder='Input Yor Email' className='reg-input' />
                                        <button type='submit' className='mt-2 text-white lab-btn'>
                                            subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct