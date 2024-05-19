import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SidebarDash() {
    const sidebarItems = [
        {
            title: "Dashboard",
            link: "/"
        },
        {
            title: "Qutations",
            link: "/qutations"
        },
        {
            title: "Products",
            link: "/products"
        },
        {
            title: "Orders",
            link: "/orders"
        },
        {
            title: "Insigts",
            link: "/insights"
        },
        {
            title: "Messages",
            link: "/messages"
        },
        {
            title: "Notifications",
            link: "/notifications"
        },
        {
            title: "Requests",
            link: "/requests"
        },


    ]
    const sidebarItemsTwo = [
        {
            title: "Promote",
            link: "/promote"
        },
        {
            title: "Help",
            link: "/help"
        },
    ]
    return (
        <div className="mySidebar__handler">
            <div className="container">
                <h1 className='logo__text'>
                    <span>Reach</span>Magnet
                </h1>
                <ul>
                    {
                        sidebarItems?.map((el) => {
                            return (
                                <li className='d-flex justify-content-between align-items-center'>
                                    <Link to={el.link}>{el.title}</Link>
                                    <i className="bi bi-chevron-right"></i>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='listItems__two'>
                    {
                        sidebarItemsTwo?.map((el) => {
                            return (
                                <li className='d-flex justify-content-between align-items-center'>
                                    <Link to={el.link}>{el.title}</Link>
                                    <i className="bi bi-chevron-right"></i>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="pro__banner__handler text-center">
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
    )
}
