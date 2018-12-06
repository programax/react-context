import React from 'react';
import { withRouter }  from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.scss';

function Navbar(props) {
    const {
        match,
    } = props;

    return (
        <div className="navbar">
            <Link to="/dashboard" className={`item ${match.path === '/dashboard' ? 'active' : ''}`}>
                Dashboard
            </Link>

            <Link to="/reports" className={`item ${match.path === '/reports' ? 'active' : ''}`}>
                Reports
            </Link>

            <Link to="/modal" className={`item ${match.path === '/modal' ? 'active' : ''}`}>
                Modal
            </Link>
        </div>
    );
}

export default withRouter(Navbar);
