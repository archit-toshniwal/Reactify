import axios from "axios";
import { useHistory } from "react-router";
import Modal from 'react-modal';
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

Modal.setAppElement('#root');



const View = (props) => {

    const history = useHistory();
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const AddToOrder = async (id) => {
        try {
            const response = await axios.post('http://localhost:4000/api/place/order',
                {
                    product_id: id,
                    orderDate: Date.now(),
                    Transcation_id: uuidv4()
                }, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.data.code === 400) {
                history.push('/login');
            }
            else if (response.data.code === 422) {
                toast.warn(response.data.error, {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }

            else {

                toast.success('added to Orderlist', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        catch (Error) {
            alert(Error.message);
        }

    }


    const AddToWish = async (id) => {
        try {
            const response = await axios.post('http://localhost:4000/api/add/wishList', {
                product_id: id,
            }, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.data.status === true) {
                toast.success('added to wishlist', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else if (response.data.code === 422) {
                toast.warn(response.data.error, {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }
            else {
                history.push('/login');
            }

        }
        catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="Box myhover">
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <div className="modal-box-body">
                    <div className="modal-box-close-btn">
                        <span onClick={(e) => closeModal()}><i class="fas fa-times"></i></span>
                    </div>
                    <div className="modal-box-body-lower">
                        <div className="modal-box-body-first">
                            <img src={props.obj.picture} alt={props.obj._id} />
                        </div>
                        <div className="modal-box-body-second">
                            <p>{props.obj.ProductName}</p>
                            <p>{props.obj.Description}</p>
                            <p>Rs {props.obj.Price}</p>
                            <p style={{ color: 'powderblue', fontFamily: 'sans-serif' }}>{props.obj.quantity} Units Left</p>
                            <div className="product-btns">
                                <button onClick={(e) => { AddToOrder(props.obj._id) }} className="button is-fullwidth is-success">Order Now <span className="icon-dis"><i class="fas fa-shopping-cart"></i></span> </button>
                                <button onClick={(e) => { AddToWish(props.obj._id) }} className="button is-fullwidth is-danger">Add to wishlist<span className="icon-dis"><i class="far fa-heart"></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="img-box">
                <img className="img-style" onClick={(e) => openModal()} src={props.obj.picture} alt={props.obj._id} />
            </div>
            <span onClick={(e) => AddToWish(props.obj._id)} className="icon-wish"><i className="fas fa-heart"></i></span>
            <div className="content">
                <p>{props.obj.ProductName}</p>
                <p>₹{props.obj.Price}</p>
            </div>
           
        </div>
     
    )
}

export default View;