import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useHistory } from 'react-router';




const Nav = () => { 
    const history = useHistory()
    const goBack = () => {
        history.goBack()

    } 

    return (
        <div className="nav">
            <ul>
            <div className='icon'>< IoArrowBackCircleSharp onClick={goBack}/></div>
                <li> <Link to ="/Home">Home</Link></li>
                <li> <Link to ="/About">About</Link></li>
                <li> <Link to ="/Contact">Contact</Link></li>
                <li> <Link to ="/Cards">Cards</Link></li>


            </ul>
        </div>
    )

}

export default Nav;