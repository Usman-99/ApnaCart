import { useState } from "react";
const AddItem = (props) => {
    const[productName,setProductName]=useState('');
    const[productPrice,setProductPrice]=useState(0);
  return (
    <form className="row ms-5 text-center px-0 mt-5 mb-5" onSubmit={(e)=>{
        e.preventDefault();
        props.addItem(productName,Number(productPrice));
    }}>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Product Name"
          aria-label="Name"
          name='productName'
          onChange={(e)=>{
            setProductName(e.target.value)
          }}
          value={productName}
        />
      </div>
      <div className="col-5">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          aria-label="Price"
          name='productPrice'
          onChange={(e)=>{
            setProductPrice(Number(e.target.value))
          }}
          value={productPrice}
        />
      </div>
      <div className="col-2">
        <button className="btn btn-danger px-3 mt-0 py-2" type="submit"><h4>Add to Cart</h4></button>
      </div>
    </form>
  );
};
export default AddItem;
