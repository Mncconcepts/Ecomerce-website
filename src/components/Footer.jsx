import React from 'react'
import { Link } from 'react-router-dom';

const title = "About Zenixstore";
const desc =
    "Zenix shop mall number one world class shop for clothing enthusiast.";
const ItemTitle = "Categories";
const quickTitle = "Top Wears";
const tweetTitle = "Recent Trends";

const addressList = [
   
    { iconName: "fa-brands fa-google", text: 'New York, USA.', },
    { iconName: 'fa-solid fa-phone', text: '+880 123 456 789', },
    { iconName: 'fa-solid fa-globe', text: 'info@zenixshop.com', },
];

const socialList = [
    { iconName: 'fa-facebook', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-twitter', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-linkedin', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-instagram', siteLink: '#', className: 'fa-brands', },
    { iconName: 'fa-pinterest', siteLink: '#', className: 'fa-brands', },
]; 

const ItemList = [
    { text: 'All Products', link: '/shop', },
    { text: 'Shop', link: '/shop', },
    { text: 'Blog', link: '/blog', },
    { text: 'About', link: '/about', },
    { text: 'Policy', link: '#', },
    { text: 'FAQs', link: '/about', }
];

const quickList = [
    { text: 'Summer Sessions', link: '#', },
    { text: 'Events', link: '#', },
    { text: 'Gallery', link: '#', },
    { text: 'Forums', link: '#', },
    { text: 'Privacy Policy', link: '#', },
    { text: 'Terms of Use', link: '#', },
];

const tweetList = [
    {
        iconName: 'fa-brands fa-x-twitter',
        desc: `Zenix Store Greetings! you'all, Grab your item, 50 % Big Sale Offer!!`,
    },
    {
        iconName: 'fa-brands fa-x-twitter',
        desc: '@Zenixstore Hey! fellas Grab your item, 50% Big Sale Offer !!',
    },
];

const footerbottomList = [
    { text: 'Faculty', link: '#', },
    { text: 'Staff', link: '#', }, { text: 'Students', link: '#', },
    { text: 'Alumni', link: '#', },
];


const Footer = () => {
    return <footer className='style-2'>
        <div className="footer-top dark-view padding-tb">
            <div className="container">
                <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{title}</h4>
                                    </div>
                                    <div className="content">
                                        <p>{desc}</p>
                                        <ul className='lab-ul office-address'>
                                            {
                                                addressList.map((val, i) => (
                                                    <li key={i}><i className={`icofont ${val.iconName}`}></i>
                                                        {val.text}</li>
                                                ))
                                            }

                                        </ul>

                                        <ul className='lab-ul social-icons'>
                                            {socialList.map((val, i) => (
                                                <li>
                                                    <a href="#" className={val.className}><i className={val.iconName}>{val.text}</i></a>
                                                </li>
                                            ))

                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{quickTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul className='lab-ul office-address'>
                                            {
                                                quickList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href="#">{val.text}</a>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{ItemTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul className='lab-ul office-address'>
                                            {
                                                ItemList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href="#">{val.text}</a>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{tweetTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul className='lab-ul office-address'>
                                            {
                                                tweetList.map((val, i) => (
                                                    <li key={i}>
                                                       <i className={val. iconName}></i>
                                                       {val.desc}
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        {/* footer bottom */}
        <div className="footer-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <p>copyright, 2024 <Link to="/">Zenixwebsite</Link>Designed by <a href="/" target='blank'>Mncconcepts</a></p>
                    <div className="footer-bottom-list">
                        {
                            footerbottomList.map((val, i) => (
                                <a href="#" key={i}>{val.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;