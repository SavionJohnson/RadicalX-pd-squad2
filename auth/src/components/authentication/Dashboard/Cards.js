import React from 'react';
import "./Components_css/Cards.css"

function Cards(props) {
    const extendedRoleString = props.role.split(' ').slice(0,2).join(' ')+'...';
    return (
        <div className="card">
            <div className="topframe">
                <div className="top">
                    <div className="title">
                        <div className="text">
                            Mobile App Design
                        </div>
                    </div>
                    <div className="icons">

                    </div>
                </div>
                <div className="bottom">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua.
                </div>
            </div>
            <div className="bottomframe">
                <div className="role">
                    <div className="text">
                        {props.role.length >=17? extendedRoleString : props.role}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cards