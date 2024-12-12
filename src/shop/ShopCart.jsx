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
        </>
    )
}

export default ShopCart