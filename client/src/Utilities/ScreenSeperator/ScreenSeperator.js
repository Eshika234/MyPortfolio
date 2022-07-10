import React from 'react'
import './ScreenSeparator.css'

const ScreenSeparator = (props) => {
    return (
        <div className="seperator-container incline">
            <img src={require(`./../../Assets/Utilities/ScreenSeparator/${props.type}.svg`)} />
        </div>
    );
}

export default ScreenSeparator;
