import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../shared/Header/Header";
import View from "../../resusable/View"
import Loader from "../../resusable/Loader";


const ViewAll = () => {

    const [catergoryData, updateData] = useState([]);
    const { category } = useParams();
    const [value,setValue] = useState(true);


    useEffect(() => {
        (async () => {

            try {
                const response = await axios.get(`http://localhost:4000/api/product/getCategory?category=${category}`, {
                    headers: {
                        Authorization: `bearer ${localStorage.getItem('token')}`
                    }
                });
                // console.log(response.data.data);
                setValue(false);
                updateData(response.data.data);
            }
            catch (err) {
                console.log(err);
            }
        })();
    }, []);

    let Css = {
        textAlign: 'center',
        padding: "20px",
        textTransform:'uppercase'
    }

    const Style =
    {
        fontWeight: 'bold'
    }

    return (
        <>
            <Header />
            <div className="full-width">
                <div>
                    <h1 className="title is-2" style={Css}>{category}</h1>
                </div>
                <hr />
                {value? <Loader value={value}/> :
                <div className="product-div" style={Style}>
                    {catergoryData.map((obj) => <View key={obj._id} obj={obj} />)}
                </div>
                }
            </div>
        </>
    )
}


export default ViewAll;