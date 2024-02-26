import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-free/css/all.css';
import './nonMain.css';

const nonMain = () => {
    return (
        <div className='non_dashboard'>
            <div className='non_dashboard-app'>
                <header className='non_dashboard-toolbar'>
                    <div className="non_menubar-toggle">
                        <a href="/" className="non_menu-toggle"><i className="fas fa-bars"></i></a>
                    </div>
                    <div className="non_user-img">
                        <a href='/login'>
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                    </div>

                </header>
            </div>
        </div>
    );
}

export default nonMain;
