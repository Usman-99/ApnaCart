const Footer=(props)=>{
return(
    <div className="row fixed-bottom">
        <button className="btn btn-success col-6" onClick={()=>{
            props.resetQuantity();
        }}>Reset</button>
        <div className="col-6 bg-dark text-center text-white">{`Total Amount : ${props.totalAmount}`}</div>
    </div>
)
};
export default Footer;
