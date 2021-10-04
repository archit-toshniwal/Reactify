import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "./Box";
import { useHistory } from "react-router";



const Feature = (props) => {

    const history = useHistory();
    const [fashion, setFashion] = useState([]);

    

    let sliced_arr = fashion.slice(0, 5);

    useEffect(() => {
        (async () => {

            try {
                const response = await axios.get(`http://localhost:4000/api/product/getCategory?category=${props.field}`, {
                    headers: {
                        Authorization: `bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response.data.data);
                setFashion(response.data.data);
            }
            catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const showAllItemsofCategory = (e) => {
        history.push(`/view/${props.field}`);
    }

    return (
        <div className="category cat">
            <div className="upper-section">
                <h1 className="title is-2">{props.title}</h1>
                <button onClick={(e) => showAllItemsofCategory(e)} className="button is-normal is-info">View All</button>
            </div>

            <hr />
            <div className="columns category">          
                {sliced_arr.map((item) => <Box key={item._id} pic={item.picture} pname={item.ProductName} price={item.Price} />)}
            </div>
        </div>
    )
}


export default Feature;