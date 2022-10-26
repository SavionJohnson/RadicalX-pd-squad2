import React from 'react';
import "./Components_css/Sidebar.css";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { UserAuth } from '../../../context/AuthContext'


// let user = firebase.getAuth().getCurrentUser()

function Sidebar(props) {
    let { user } = UserAuth();
    return (
        <div className="complete">
            <div className="Sidebar">
                <div className="SidebarFrame">
                    <Link className="radicalx_logo" to='/'></Link>
                    <div className="SidebarList">
                        <ul>
                            {SidebarData.map((val, key) => {
                                return (
                                    <li key={key} className='row' id={window.location.pathname === val.link ? 'active' : null}>
                                        <div className="icon"><img src={window.location.pathname === val.link ? val.image2 : val.image} alt="icon" /></div>
                                        <Link className="text" to={val.link} style={window.location.pathname === val.link ? props.style : null}>{val.title}</Link>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                </div>
                <div className="SidebarProfile">
                    <div className="icon"></div>
                    <div>{user.email}</div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
