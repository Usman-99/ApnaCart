import Product from "./Product"
const ProductList=(props)=>{
    return(
        props.productList.length>0 ?
        props.productList.map((product,i)=>{
            return <Product product={product} key={i} index={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>
        }):
        <h1>No Products Are Added In Cart</h1>
    )
}
export default ProductList;