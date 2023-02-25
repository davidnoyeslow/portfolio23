import React, {useState} from "react";

const MenuButton = ({ parentCallback }) => {
    const [ clicked, setClicked ] = useState(false);


    const changeHandler = (e) => {
        clicked === true ? setClicked(false) : setClicked(true);
        return parentCallback(clicked);
    }

    return (
        <div className={ clicked ? "nav-button open" : "nav-button"} onClick={changeHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
          </div>
    );
}

export default MenuButton