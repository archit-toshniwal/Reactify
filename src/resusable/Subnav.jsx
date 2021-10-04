
const Subnav = (props)=>
{
    return(
        <div className="card-content">
            <div className="" style={{height: "64px", width: "64px", fontWeight:'bold'}}>
                <img className="card-image" alt="Top Offers" src={props.image}/>
                <div className="" style={{textAlign:'center'}}>
                    <p>{props.Pname}</p>
                </div>
            </div>  
        </div>
    )
    
}

export default Subnav;