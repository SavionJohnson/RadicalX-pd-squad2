import React from 'react';
import "./Components_css/Dashboard.css"
import Cards from './Cards';
import addButton from '../../../images/Add_button.png'
function Display(props) {
    return (
        <div className="DisplayCards">
            <div className="top">
                <h1 className="title">{props.heading}</h1>
                <div className="button">
                    <img src={addButton} alt="+" />
                    <button className="text">
                        Create New Apprenticeship
                    </button>
                </div>
            </div>
            <div className="bottom">
                <Cards role={'product developer & web developer'}/>
            </div>
        </div>
    )
}

export default Display
