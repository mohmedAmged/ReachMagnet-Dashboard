import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Offcanvas, Button } from 'react-bootstrap';
import icon1 from '../../assets/sidebar-icons/key-square.svg'
import icon2 from '../../assets/sidebar-icons/3d-square 1.svg'
import icon3 from '../../assets/sidebar-icons/user-square 1.svg'
import icon4 from '../../assets/sidebar-icons/wallet-money 2.svg'
import icon5 from '../../assets/sidebar-icons/status-up.svg'
import icon6 from '../../assets/sidebar-icons/messages-3.svg'
import icon7 from '../../assets/sidebar-icons/notification.svg'
import icon8 from '../../assets/sidebar-icons/call-add.svg'
import icon9 from '../../assets/sidebar-icons/discount-shape 1.svg'
import icon10 from '../../assets/sidebar-icons/message-question 1.svg'
export default function SidebarDash({isSidebarExpanded, toggleSidebar}) {
    const location = useLocation();
    // const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const activePath = location.pathname;

    const sidebarItems = [
        {
            title: "Dashboard",
            link: "/",
            icon: icon1
        },
        {
            title: "Catalog",
            link: "/catalog",
            icon: icon2
        },
        {
            title: "Products",
            link: "/products",
            icon: icon3
        },
        {
            title: "Orders",
            link: "/orders",
            icon: icon4
        },
        {
            title: "Insigts",
            link: "/insights",
            icon: icon5
        },
        {
            title: "Messages",
            link: "/messages",
            icon: icon6
        },
        {
            title: "Notifications",
            link: "/notifications",
            icon: icon7
        },
        {
            title: "Requests",
            link: "/requests",
            icon: icon8
        },


    ]
    const sidebarItemsTwo = [
        {
            title: "Promote",
            link: "/promote",
            icon: icon9
        },
        {
            title: "Help",
            link: "/help",
            icon: icon10
        },
    ]

    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 

    return (
        <>

            <div className={`mySidebar__handler ${isSidebarExpanded ? 'expanded' : ''}`}>
                <div className={`container ${isSidebarExpanded ? 'expanded' : ''}`}>
                    <h1 className={`logo__text ${isSidebarExpanded ? 'expanded' : ''}`}>
                        <span>Reach</span>Magnet
                    </h1>
                    <ul>
                        <li className={`toggle__handler ${isSidebarExpanded ? 'expanded' : ''}`}>
                            <div className={`sidebar-toggle text-center fs-2 ${isSidebarExpanded ? 'expanded' : ''}`} onClick={toggleSidebar}>
                            {isSidebarExpanded ? '✕' : '☰'}
                            </div>
                        </li>
                        
                        {
                            sidebarItems?.map((el) => {
                                return (
                                    <li key={el.index} className={`d-flex justify-content-between align-items-center ${activePath === el.link ? 'active' : ''
                                        }`}>
                                        <Link to={el.link}>
                                            <img className={`${isSidebarExpanded ? 'expanded' : ''}`} src={el.icon} alt={el.title} />
                                            <span className={`${isSidebarExpanded ? 'expanded' : ''}`}>{el.title}</span>
                                        </Link>
                                        {<i className={`bi bi-chevron-right ${isSidebarExpanded ? 'expanded' : ''}`} ></i>}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='listItems__two'>
                        {
                            sidebarItemsTwo?.map((el) => {
                                return (
                                    <li key={el.index} className={`d-flex justify-content-between align-items-center ${activePath === el.link ? 'active' : ''
                                        }`}>
                                        <Link to={el.link}>
                                            <img src={el.icon} alt={el.title} />
                                            <span className={`${isSidebarExpanded ? 'expanded' : ''}`}>{el.title}</span>
                                        </Link>
                                        {<i className={`bi bi-chevron-right ${isSidebarExpanded ? 'expanded' : ''}`}></i>}
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className={`pro__banner__handler text-center ${isSidebarExpanded ? 'expanded' : ''}`}>
                        <div className="pro__banner__content">
                            <h3>
                                Upgrade to  PRO to get access all Features!
                            </h3>
                            <NavLink className='nav-link'>
                                Get Pro Now!
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {isSidebarExpanded && <div className="overlaySide" onClick={toggleSidebar}></div>}

    

        </>

    )
}
