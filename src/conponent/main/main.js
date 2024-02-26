import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-free/css/all.css';
import './main.css';

const Main = () => {
    return (
        <div className='dashboard'>
            <div className="dashboard-nav">
                <header>
                    <a href="/login" className="menu-toggle">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                    <a href="#" className="brand-logo">
                        <img src='https://odl.ucsiuniversity.edu.my/shop/assets/images/UCSI_ODL_Logo.png' alt='logo'></img>
                    </a>
                </header>

                <nav className="dashboard-nav-list">
                    <a href="#" className="dashboard-nav-item"> Parameter </a>
                    <a href="#" className="dashboard-nav-item"> Products </a>
                    <a href="#" className="dashboard-nav-item"> Vendor </a>
                    <div className='dashboard-nav-dropdown'><a href="/slideMain" className="dashboard-nav-item ">
                        Slide
                    </a>
                    </div>
                    <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item ">
                        Orders
                    </a>
                    </div>
                    <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item e ">
                        Report
                    </a>
                    </div>
                    <a href="#" className="dashboard-nav-item"> Settings </a>
                    <a href="#" className="dashboard-nav-item"> User Access </a>

                </nav>
            </div>
            <div className='dashboard-app'>
                <header className='dashboard-toolbar'>
                    <div className="menubar-toggle">
                        <a href="l" className="menu-toggle"><i className="fas fa-bars"></i></a>
                    </div>
                    <div className="user-img">
                        <a href='/login'>
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                    </div>

                </header>

            </div>
        </div>
    );
}

export default Main;
