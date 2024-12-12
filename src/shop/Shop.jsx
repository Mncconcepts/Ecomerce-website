import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";

const showResults = "Showing 01 - 12 of 139 results";
import Data from "../products.json";
import ProductCards from '../Home/ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCart from './ShopCart';
import PopularPost from './PopularPost';

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);
    // console.log(products)

    // //  pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage + productsPerPage;
    const indexOfFirstproduct = indexOfLastProduct + productsPerPage;
    const currentProducts = products.slice(indexOfFirstproduct, indexOfLastProduct);

    // function change current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //filter products based on category
    const [SelectedCategory, setSelectedCategory] = useState("All");
    const menuItem = [new Set(Data.map((val) => val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        })
        setSelectedCategory(curcat);
        setProducts(newItem);
    }


    return (
        <div>
            <PageHeader title="Our Shop Place" curPage="shop" />
            {/* shop main content */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>

                                {/* layout and title */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                        <i className="fa-solid fa-bars me-2"></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                        <i className="fa-solid fa-bars-staggered"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* products cards */}
                                <div>
                                    <ProductCards GridList={GridList} products={products} />
                                </div>

                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}  // current page number from useState hook
                                />

                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCart
                                filterItem={filterItem}
                                setItems={setProducts}
                                menuItems={menuItem}
                                setProducts={setProducts}
                                SelectedCategory={SelectedCategory}
                                />
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;

