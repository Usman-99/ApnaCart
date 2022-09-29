const Product = (props) => {
  return (
    <div className="row mt-5">
      <div className="col-3">
        <h2>
          {props.product.name}{" "}
          <span className="badge text-bg-info">Rs {props.product.price}</span><br/>
        </h2>
      </div>
      <div className="col-3 mx-auto">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
        </div>
      </div>
      <div className="col-3 badge text-bg-danger mb-3 py-3">
        <h4>{`Bill : ${props.product.price * props.product.quantity}`}</h4>
      </div>
      <button className="btn btn-secondary col-2 ms-2 mb-3 py-3" onClick={()=>{
        props.removeItem(props.index);
      }}>
        <h4>Remove</h4>
      </button>
    </div>
  );
};
export default Product;
