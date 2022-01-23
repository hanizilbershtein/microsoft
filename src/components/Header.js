import React from 'react'

const Header = ({header1,header2,image}) => {
    return (
        <header>
            <div id="h">
            <h1>{header1}</h1>
            <h3>{header2}</h3>
            <hr/>
            </div>
            <div id="img">
                <img src={image}></img>
            </div>
        </header>
    )
}



export default Header
