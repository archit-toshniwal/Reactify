import Header from "../../shared/Header/Header";
import Row from "../../resusable/Row";
import Modal from "./Modal";
import React from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

let table = {
    width: "94%",
    marginLeft: "50%",
    transform: "translate(-50%)"
}

const Admin = () => {

    let [records, setRecord] = React.useState([]);
    const history = useHistory();
    React.useEffect(() => {

        (async () => {

            try {
                const response = await axios.get('http://localhost:4000/api/product',
                    {
                        headers: {
                            'Authorization': `bearer ${localStorage.getItem('token')}`
                        }
                    }
                );
                if (response.data.error) {
                    history.push('/login');
                    // alert(response.data.error);
                    setRecord([]);
                } else {
                    // console.log(response.data.data);
                    setRecord(response.data.data);
                }

            } catch (error) {
                console.log(error);
            }

        })();

    })

    let [flag, setFlag] = React.useState("modal");

    let [buttonValue, setButtonValue] = React.useState("Add Product");

    const [productData, setProduct] = React.useState({
        pid: "",
        pname: "",
        pprice: "",
        pquantity: "",
        pcategory: "",
        pimage: "",
        pdesc: ""
    });


    const updateProduct = (event) => {

        const { name, value } = event.target;
        setProduct({ ...productData, [name]: value });
    }

    const addProduct = (e) => {
        console.log(productData);
    }

    const updateFlag = (value) => {
        setFlag(value)
    }


    return (
        <>
            {
            JSON.parse(localStorage.getItem('user'))?.role==="ADMIN"? 
            <>
            <Header />
            <div className="admin-container">
                <div className="columns admin-add">
                    <div className="column">
                        <button className="button" onClick={(event) => {
                            updateFlag("");
                            setButtonValue("Add Product")
                            setProduct({
                                pid: "",
                                pname: "",
                                pprice: "",
                                pquantity: "",
                                pcategory: "",
                                pdesc: "",
                                pimage: ""
                            })
                        }}>
                            <span className="icon">
                                <i className="fas fa-plus"></i>
                            </span>
                            <span>Add Product</span>
                        </button>
                    </div>
                </div>
                <div>
                    <table className="table-1">
                        <thead>
                            <tr>
                                <td>Product Image</td>
                                <td>Product Name</td>
                                <td>Product Price</td>
                                <td>Remove</td>
                                <td>Edit</td>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((index,ind) => <Row key={ind} buttonValueSet={setButtonValue} obj={index} set_Product={setProduct} buttonMethod={updateFlag} />)}
                        </tbody>
                    </table>

                </div>
                <Modal  status={flag} click={addProduct} productData={productData} method={updateFlag} stateProduct={updateProduct} buttonValue={buttonValue} buttonMethod={setButtonValue} />
            </div>
        </>:
        <div className="modal-restricted">
                <img src="https://img-premium.flaticon.com/png/512/2763/premium/2763247.png?token=exp=1633366222~hmac=18c71fb4787ed5593f177f9439dfe134" className="img-restricted"/>
        </div>
    }
        </>
    )
}

export default Admin;