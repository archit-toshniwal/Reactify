import React from "react";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";

const Modal = (props) => {

    const items = ["Select", "clothing", "bags & Backpacks", "gadgets", "footwear", "personal Care and Grooming", "watches"]

    const [flag, setFlag] = React.useState(true);

    let arr = "";
    arr = flag ? "button is-fullwidth is-success" : "button is-fullwidth is-success is-loading";
    
    function waitForwhile(event) {
        setTimeout(() => {
            setFlag(true);
        }, 4000)
        setFlag(false);
    }

    const InsertDocument = async () => {

        const response = await axios.post(`http://localhost:4000/api/product`,
            {
                "ProductName": props.productData.pname,
                "Price": props.productData.pprice,
                "Description": props.productData.pdesc,
                "quantity":props.productData.pquantity,
	            "category":props.productData.pcategory,
	            "picture":props.productData.pimage
            },
            {
                headers: {
                    'Authorization': `bearer ${localStorage.getItem('token')}`
                }
            });
        console.log(response.data);
    }

    const UpdateDocument = async () => {

        const response = await axios.patch(`http://localhost:4000/api/product?productid=${props.productData.pid}`,
            {
                "ProductName": props.productData.pname,
                "Price": props.productData.pprice,
                "Description": props.productData.pdesc,
                "quantity":props.productData.pquantity,
	            "category":props.productData.pcategory,
	            "picture":props.productData.pimage
            },
            {
                headers: {
                    'Authorization': `bearer ${localStorage.getItem('token')}`
                }
            });
        console.log(response.data);
    }

    return (
        <div className={props.status}>
            <div className="modal-background">
            </div>
            <div className="modal-card mystyle">
                <header className="modal-card-head">
                    <p className="modal-card-title">Product</p>
                    <button className="delete" onClick={(event) => props.method("modal")} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div className="field">
                        <div className="control" style={{ visibility: "hidden" }}>
                            <input name="pid" onChange={(event) => props.stateProduct(event)} className="input" type="text" value={props.productData.pid} placeholder="Name" />
                        </div>
                    </div>

                   
                    <Input Name={"pname"} Value={props.productData.pname} stateProduct={props.stateProduct} Type={"text"} Placeholder={"Name"}/>
                    <Input Name={"pprice"} Value={props.productData.pprice} stateProduct={props.stateProduct} Type={"text"} Placeholder={"Price"}/>
                    <Input Name={"pquantity"} Value={props.productData.pquantity} stateProduct={props.stateProduct} Type={"text"} Placeholder={"Quantity"}/>
                    <Input Name={"pimage"} Value={props.productData.pimage} stateProduct={props.stateProduct} Type={"text"} Placeholder={"Image"}/>
                    <Input Name={"pdesc"} Value={props.productData.pdesc} stateProduct={props.stateProduct} Type={"text"} Placeholder={"Description"}/>
                    
                    <div className="field">
                        <div className="control">
                            <div className="select myselect">
                                <select name="pcategory" value={props.productData.pcategory} onChange={(event) => props.stateProduct(event)}>
                                    {items.map((ind) => <option>{ind}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    {props.buttonValue === "Add Product" ?
                        <Button Name={props.buttonValue} waitForwhile={waitForwhile} Document={InsertDocument} clsname={arr} click={props.click} method={props.method} /> :
                        <Button Name={props.buttonValue} waitForwhile={waitForwhile} Document={UpdateDocument} clsname={arr} click={props.click} method={props.method} />}
                </footer>
            </div>
        </div>
    )
}

export default Modal;