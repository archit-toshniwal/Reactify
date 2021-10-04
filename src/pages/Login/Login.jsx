import React from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {

   const history = useHistory();
   const [flag, setFlag] = React.useState(true);
   const [creditials, setCreditials] = React.useState({
      email: '',
      password: ''
   })

   let arr = "";
   arr = flag ? "button is-fullwidth is-success" : "button is-fullwidth is-success is-loading";

   const updateLogin = (event) => {
      const { name, value } = event.target;
      setCreditials({ ...creditials, [name]: value });
   }

   const getlogin = async () => {
      try {
         setFlag(false);
         const response = await axios.post('http://localhost:4000/api/signin', creditials);
         setFlag(true);


         if (response.data.data !== null) {

            toast.success('Login Successfully!', {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: false,
               progress: undefined,
            });

            localStorage.setItem('user', JSON.stringify(response.data.data));
            localStorage.setItem('token', response.data.Token);

            if (response.data.data.role === 'ADMIN') {
               history.push('/admin');
            } else {
               history.push('/');
            }
         }
         else {
            toast.error(response.data.error, {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: false,
               progress: undefined,
            });
         }
      }
      catch (error) {
         console.log(error);
      }
   }

   return (
      <>
        <div className="login-container">
         <div className="login-image-container">
            <img className="" src="assests/images/key.png" />
         </div>  
         <div className="container is-fluid container-custom">
            <div className="field">
               <p className="control has-icons-left has-icons-right">
                  <input autocomplete="off" className="input" name="email" onChange={(e) => updateLogin(e)} type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                     <i className="fas fa-envelope"></i>
                  </span>
               </p>
            </div>
            <div className="field">
               <p className="control has-icons-left">
                  <input autocomplete="off" className="input" name="password" onChange={(e) => updateLogin(e)} type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                     <i className="fas fa-lock"></i>
                  </span>
               </p>
            </div>
            <div className="field">
               <p className="control">
                  <button name="btnlogin" onClick={(event) => {
                     getlogin()
                  }} className={arr}>Login</button>
               </p>
            </div>
            <div className="field" style={{fontWeight:"bold"}}>
               <p className="control">
                  New customer ? <span onClick={(e)=>history.push('/signup')} style={{color:'steelblue',cursor:'pointer'}}>Start here.</span>
               </p>
            </div>
         </div>
        </div> 
      </>
   )

}

export default Login;