import React from 'react';
import WhiteBox from '../../resusable/white-box.jsx';
import { Empty } from './Empty.jsx';
import Header from '../../shared/Header/Header';
import axios from "axios";


const Wish = () => {

    const [wish, setState] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:4000/api/add/wishList", {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            
            if(response.data.data)
            {
                setState(response.data.data);
            }
            else
            {
                console.log(response);
            }
           
        })();
    },[wish]);

    const M1 = async (Id) => {

      
           const response = await axios.delete(`http://localhost:4000/api/add/wishList?product=${Id}`,
            {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('token')}`
                }
            });

           console.log(response);
        
    }

    return (
        <>
            <Header />
            <div className="stack">
                <h1 className="title is-2">My WishList</h1>
                {wish.length === 0 ? <Empty /> : <>
                    {wish.map((ob) => <><WhiteBox obj={ob} m1={M1}/><hr/></>)}
                </>
                }

            </div>
        </>
    )
}

export default Wish;