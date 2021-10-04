
const Style = 
{
    fontWeight:'bold'
}


const Box = (props)=>
{
    return(
        <div className="column card-box">
            <div className="img-box">
                <img src={props.pic} alt={props.pic} />
            </div>
            <div className="text-box" style={Style}>
                <p>{props.pname}</p>
                <p>₹ {props.price}</p>
            </div>
        </div>
    )
}

export default Box;