const WhiteBox = (props) => {
    return (
        <div className="white-box">
            <div className="img">
                <img style={{ width: '100px', height: '100px' }} alt="img" 
                src={props.obj.Product.picture === null? "https://rukminim1.flixcart.com/image/312/312/knj7wcw0/short/l/t/b/m-cw6107-019-nike-original-imag26zw6ztyaqte.jpeg?q=70" : props.obj.Product.picture} />
            </div>
            <div className="detail">
                <p>{props.obj.Product.ProductName}</p>
            </div>
            <div className="icons">
                <button onClick={(e)=>{props.m1(props.obj._id)}}>
                    <i className="fas fa-trash"></i>
                </button>
                <button>
                    <i className="fas fa-shopping-cart" onClick={props.obj._id}></i>
                </button>
            </div>
        </div>
    )
}

export default WhiteBox;