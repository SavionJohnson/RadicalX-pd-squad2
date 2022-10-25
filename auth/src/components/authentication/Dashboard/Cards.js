import React from 'react';
import "./Components_css/Cards.css"
import copy_icon from '../../../images/Card_icons/copy.png'
import edit_icon from '../../../images/Card_icons/edit.png'
import trash_icon from '../../../images/Card_icons/trash.png'

function Cards(props) {
    const extendedRoleString = props.role.split(' ').slice(0, 2).join(' ') + '...';
    return (
        <div className="card">
            <div className="topframe">
                <div className="top">
                    <div className="title">
                        <div className="text">
                            Mobile App Design
                        </div>
                        <div className="icons">
                            <button><img src={edit_icon} alt="edit" /></button>
                            <button><img src={copy_icon} alt="edit" /></button>
                            <button><img src={trash_icon} alt="edit" /></button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.
                </div>
            </div>
            <div className="bottomframe">
                <div className="role">
                    <div className="text">
                        {props.role.length >= 17 ? extendedRoleString : props.role}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards