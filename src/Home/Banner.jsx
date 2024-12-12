import React, { useState } from 'react';
import productData from '../products.json';
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';


const title = <h2 className='text-center text-white'>WELCOME TO ZENIX<span> SHOP</span> MALL </h2>
const desc = "We Have The Largest Collection Of Products"
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];


const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);
  // console.log(productData)

  // search funtionality
  const handleSearch = e => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);


    //filtering products based on search
    const filtered = productData.filter((product) => product.name.toLowerCase()
      .includes(searchTerm.tolowerCase()));

    setFilteredProducts(filtered);
  }

  return <div className='banner-section style-4'>
    <div className='container'>
      <div data-aos='fade-left' className='banner-content'>
        {title}


        <form> 
          <SelectedCategory select={"all"}/>
          <input type="text" name='search' id='search' placeholder='Search Your Product Here'
            value={searchInput} onChange={handleSearch}/>
          <button type='submit'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <span className='text-center text-white pt-3 '>{desc}, Search your preffered products here, 
          We Deliver The Best Products, Our Services Are 100% Quality And Trustworth, 
          click on the explore button to discover new trends</span>
          <div>
          <Link to="/shop" data-aos='fade-left' data-aos-duration='1000' type='submit' className='lab-btn text-white text-center mt-3'>Explore</Link>
          </div>
          
        <ul className='lab-ul'>
          {
            searchInput && filteredProducts.map((product, i) => <li key={i}>
              <Link to={'/shop/${product.id}'}>{product.name}</Link>
            </li>)
          }
        </ul>

      </div>
    </div>
  </div>

};

export default Banner;