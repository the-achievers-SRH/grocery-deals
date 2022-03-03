import FilterPanel from "../FilterPanel/FilterPanel";
import ProductList from "./ProductList/ProductList";
import './Products.css'

const Products = () => {
    return (
        <div className="panelAndList">
            <div className="filterPanel">
                <FilterPanel/>
            </div>
            <div className="productList">
                <ProductList/>
            </div>
        </div>
    )
}

export default Products;