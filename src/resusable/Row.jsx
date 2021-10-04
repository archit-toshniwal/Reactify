
import axios from 'axios';



const Row = (props) => {

    const deleteDocument = async (id) => {
       
        const response = await axios.delete(`http://localhost:4000/api/product?productid=${id}`,
            {
                headers: {
                    'Authorization': `bearer ${localStorage.getItem('token')}`
                }
            });
        console.log(response.data);
    }

    const edit = ()=>
    {
        // console.log(props.obj);
        props.buttonValueSet("Update Product")
        props.buttonMethod("");
        props.set_Product({
            pname:props.obj.ProductName,
            pprice:props.obj.Price,
            pquantity:props.obj.quantity,
            pcategory:props.obj.category,
            pimage:(props.obj.picture === null)? "":props.obj.picture,
            pdesc:props.obj.Description,
            pid:props.obj._id
        });
    }

    return (
        <tr>
            <td>{props.obj._id}</td>
            <td>{props.obj.ProductName}</td>
            <td>{props.obj.Price}</td>
            <td>
                <button onClick={(e) => { deleteDocument(props.obj._id) }}>
                    <i className="fas fa-trash"></i>
                </button>
            </td>
            <td>
                <button onClick={(e)=>{edit()}}>
                    <i className="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    )
}

export default Row;