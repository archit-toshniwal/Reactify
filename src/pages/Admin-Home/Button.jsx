
const Button = (props)=>
{

    const fun = async (e)=>
    {
        setTimeout(()=>{
            props.method("modal");
        },2000)
        props.waitForwhile(e);
        props.Document();
             
    }

    return (
        <button className={props.clsname} onClick={(e)=>{fun(e)}}>
            {props.Name}
        </button>
    )
}

export default Button;