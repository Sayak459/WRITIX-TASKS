import React, { useState } from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { IoMenuSharp } from "react-icons/io5";
import './Layout.css'
import Menus from '../Menus/Menus'

const Layout = () => {

    const [toggle, setToggle] = useState(true);

    //change toggle
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-toggle-icons">
                        <p onClick={handleToggle}>
                            {
                                toggle ? (<AiOutlineDoubleLeft  size={30} />) : (<IoMenuSharp size={30} />)
                            }
                        </p>
                    </div>
                    <Menus toggle={toggle} />
                </div>
            </div>
        </>
    )
}

export default Layout