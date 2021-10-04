import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../resusable/Search';
import { toast } from 'react-toastify';



const Header = () => {

    const [gate,setGate] = React.useState(false);
    var role = "";
    if(localStorage.getItem('user'))
    {
        role = JSON.parse(localStorage.getItem('user')).role ;
    }
    else
    {
        role = "USER";
    }
   

    return (
        <>
            <div className="extra-round">
                <nav className="navbar is-primary extra-round-nav" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img alt="logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </Link>

                        <a onClick={(e)=>{setGate(!gate)}} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                        {console.log(window.innerHeight)}
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Search />
                        </div>

                        <div className="navbar-end">
                          {role === "USER" &&
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a href="#" className="navbar-link" style={{fontWeight:'bold'}}>
                                    More
                                </a>

                                <div className="navbar-dropdown" style={{ fontWeight:'bold'}}>
                                    <Link to="/order" className="navbar-item">Orders</Link>
                                    <Link to="/wishlist" className="navbar-item">WishList</Link>
                                    <a className="navbar-item" href="#" >Contact</a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item" href="#" >Report an issue</a>
                                </div>
                            </div> 
                            }


                            <div className="navbar-item">
                                <div className="buttons">
                                { !localStorage.getItem('token')?
                                    <Link to="/login" className="button is-light"><strong>Log in</strong></Link>:""
                                }
                                {localStorage.getItem('token')?
                                    <Link to="/" className="button is-light" onClick={(e)=> {
                                        toast.success('Log out Successfully!', {
                                            position: "top-right",
                                            autoClose: 1000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: false,
                                            draggable: false,
                                            progress: undefined,
                                         });
                                        localStorage.clear()
                                    }}>
                                        <strong>Log out</strong>
                                    </Link>:""
                                    }
                                    { role === 'ADMIN' &&
                                    <Link to="/admin" className="button is-light"><strong>Admin</strong></Link>
                                    }
                                    </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;