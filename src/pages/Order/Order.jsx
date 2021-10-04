import Search from '../../resusable/Search';
import { OrderBlock } from '../../resusable/Order-block';
import Header from '../../shared/Header/Header';
import axios from "axios";
import {Empty} from "../Wish/Empty";
import { useEffect, useState } from 'react';


const Order = () => {

   const [data, setData] = useState([

   ]);

   useEffect(() => {
      (async () => {
         const response = await axios.get("http://localhost:4000/api/place/order", {
            headers: {
               Authorization: `bearer ${localStorage.getItem('token')}`
            }
         });
         if(response.data.data)
         {
            console.log(response.data.data);
            setData(response.data.data);
         }
         else
         {
            console.log(response);
         }
         
      })();
   }, []);


   return (
      <>
         <Header />
         <div className="stack">
            <h1 className="title is-2">My Orders</h1>
            {data.length === 0 ? <Empty /> : <>
               <div className="bar">
                  <Search />
               </div>
               {data.map((obj) => <OrderBlock obj={obj} />)}
            </>
            }

         </div>
      </>)
}

export default Order;