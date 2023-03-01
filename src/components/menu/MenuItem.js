import React, {useState} from 'react';
import classes from './MenuItem.module.css'
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";

function MenuItem(props) {

    const [modalIsOpen,setModalIsOpen]= useState(false);

    function handleClick() {
        props.onAddToCart(props);
        setModalIsOpen(true);

    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt="My Image" />
                </div>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                    <span>${props.price}</span>
                    <p className={classes.desc}>{props.category}</p>
                    <div className={classes.overlay}>
                        <button className={classes.btn} onClick={handleClick}>Add to Cart</button>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default MenuItem;