import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const SignUp = () => {

   const history = useHistory();
   const [userData, setUserData] = React.useState({
      username: "",
      email: "",
      password: "",
      contact: ""
   })

   const updateDetails = (event) => {
      const { name, value } = event.target;
      setUserData({ ...userData, [name]: value });
   }

   const getRegister = async () => {
      try {
         const response = await axios.post('http://localhost:4000/api/signup?isAdmin=false', userData);
         if (response.data.data !== null) {
            history.push('/');
         }
         else {
            alert(response.data.error);
         }
      } catch (error) {
         console.log(error);
      }


   }

   return (
      <>
         <div className="login-container">
            <div className="login-image-container">
               <img className="" src="assests/images/signUp.svg" />
            </div>
            <div className="container is-fluid container-custom">
               <div className="field">
                  <label className="label" style={{ textAlign: 'left' }}>Username</label>
                  <div className="control has-icons-left has-icons-right">
                     <input name="username" autocomplete="off" onChange={(event) => updateDetails(event)} className="input" type="text" placeholder="Text input" />
                     <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                     </span>
                  </div>
               </div>

               <div className="field">
                  <label className="label" style={{ textAlign: 'left' }}>Email</label>
                  <div className="control has-icons-left has-icons-right">
                     <input autocomplete="off" name="email" onChange={(event) => updateDetails(event)} className="input" type="email" placeholder="Email input" />
                     <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                     </span>
                  </div>
               </div>

               <div className="field">
                  <label className="label" style={{ textAlign: 'left' }}>Password</label>
                  <div className="control has-icons-left has-icons-right">
                     <input autocomplete="off" name="password" onChange={(event) => updateDetails(event)} className="input" type="password" placeholder="Password input" />
                     <span className="icon is-small is-left">
                        <i className="fas fa-key"></i>
                     </span>

                  </div>

               </div>

               <div className="field">
                  <label className="label" style={{ textAlign: 'left' }}>Contact No</label>
                  <div className="control has-icons-left has-icons-right">
                     <input autocomplete="off" name="contact" onChange={(event) => updateDetails(event)} className="input" type="text" placeholder="Phone no input" />
                     <span className="icon is-small is-left">
                        <i className="fas fa-phone"></i>
                     </span>
                     {/* <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                     </span> */}
                  </div>
                  {/* <p className="help is-danger">This email is invalid</p> */}
               </div>

               <div className="field">
                  <p className="control">
                     <button onClick={(event) => getRegister()} className="button is-fullwidth is-success">Sign up</button>
                  </p>
               </div>

               <div className="field" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                  <p className="control">
                     Already customer ? <span onClick={(e) => history.push('/login')} style={{ color: 'steelblue', cursor: 'pointer' }}>Login here.</span>
                  </p>
               </div>


            </div>
         </div>

      </>
   )
}

export default SignUp;