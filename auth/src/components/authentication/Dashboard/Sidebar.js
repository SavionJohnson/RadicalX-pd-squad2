import React from 'react';
import "./Dashboard.css"
import {SidebarData} from "./SidebarData"

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="frame">
                <div className="logo"></div>
                <div className="list">
                    <ul>
                        {SidebarData.map((val, key) => {
                            return (
                                <li 
                                    key={key}
                                    className="row"
                                    id={window.location.pathname === val.link ? "active" : ""}
                                    onClick={() => window.location.pathname=val.link}
                                >
                                    {" "} 
                                    <div className="icon">{val.icon}</div>
                                    <div className="text">{val.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="profile">
                <div className="icon"></div>
                <div>Adam Scott</div>
            </div>
            
        </div>
    )
}

export default Sidebar
