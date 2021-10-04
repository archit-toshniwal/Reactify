export const OrderBlock = (props) => {
    return (
        <div className="order-comp">
            <div className="order-img">
                <img src={props.obj.Product.picture === null? "https://rukminim1.flixcart.com/image/312/312/k7f34i80/smart-band-tag/k/h/v/xmsh07hm-mi-original-imafpnxz4vgnzabw.jpeg?q=70" : props.obj.Product.picture} style={{ width: '100px', height: '100px' }} alt="img" />
            </div>
            <div className="order-product">
                <h1 className="title is-4">{props.obj.Product.ProductName}</h1>
                <p className="title is-5" style={{textAlign:"center"}}>{props.obj.orderDate}</p>
            </div>
            <div className="order-price">
                <h1 className="title is-4">₹{props.obj.Product.Price}</h1>
            </div>
            
        </div>
    )
}


