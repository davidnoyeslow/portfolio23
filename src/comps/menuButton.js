import React, {useState} from "react";

const MenuButton = ({ clicked, setClicked }) => {
    


   
    return (
        <div className={ clicked ? "nav-button open" : "nav-button"} onClick={() => clicked ? setClicked(false) : setClicked(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
          </div>
    );
}

export default MenuButton