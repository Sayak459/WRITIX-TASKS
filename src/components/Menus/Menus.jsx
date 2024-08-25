import React from 'react'
import './Menus.css'
import { Link } from 'react-scroll';
import { FcAbout, FcVideoProjector } from "react-icons/fc"
const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (<>
                <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link">
                            <Link to='project'>
                                <FcVideoProjector />Projects</Link>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link">
                            <Link to='about'>
                                <FcAbout />About</Link>
                        </div>
                    </div>
                </div>
            </>) :
                (<>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcAbout title='About' />
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <FcVideoProjector title='Projects' />
                            </div>
                        </div>
                    </div>
                </>)}
        </>
    )
}

export default Menus