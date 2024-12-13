import React from 'react'
import Data from '../products.json'

const ShopCart = ({ filterItem, setItems, menuItems, setProducts, SelectedCategory }) => {
    return (
        <>
            <div className="widget-header">
                <h5 className='ms-2'>All Categories</h5>
            </div>
            <div>
                <button onClick={() => setProducts(Data)} className={`m-2 ms-2 d-block ${SelectedCategory === "All" ? "bg-danger" : ""}`}>All</button>
            </div>
            <div className=''>
            <span className='ms-2 m-2 btn btn-danger'>Tshirt</span>
            <span className='ms-0 m-2 btn btn-danger'>Shoes</span>
            <span className='ms-0 m-2 btn btn-danger'>Hoodie</span>
            <span className='ms-0 m-2 btn btn-danger'>Cap</span>
            <span className='ms-2 m-2 btn btn-danger'>Chain</span>
            <span className='ms-0 m-2 btn btn-danger'>Trouser</span>
            <span className='ms-0 m-2 btn btn-danger'>cloths</span>
            <span className='ms-0 m-2 btn btn-danger'>Bags</span>
            <span className='ms-2 m-2 btn btn-danger'>Wrist watch</span>
            <span className='ms-0 m-2 btn btn-danger'>Jackets</span>
            </div>     
        </>
    )
}

export default ShopCart