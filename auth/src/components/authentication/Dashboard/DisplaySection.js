import React from 'react';
import "./Dashboard.css"
import Cards from './Cards';

function DisplaySection() {
    return (
        <div className="DisplayCards">
            <div className="top">
                <h1 className="title">Apprenticeship</h1>
                <div className="button">
                    {/* Create New Apprenticeship button icon goes here */}
                    <div className="text">
                        Create New Apprenticeship
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Cards/>
            </div>
        </div>
    )
}

export default DisplaySection
