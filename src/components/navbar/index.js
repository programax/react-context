import React from 'react';
import { withRouter }  from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.scss';
import { AppContext } from '../../context/appContext';

class Navbar extends React.Component {
    render() {
        const {
            match,
        } = this.props;

        const {
            toggleModal,
        } = this.context;

        return (
            <div className="navbar">
                <Link to="/dashboard" className={`item ${match.path === '/dashboard' ? 'active' : ''}`}>
                    Dashboard
                </Link>

                <Link to="/reports" className={`item ${match.path === '/reports' ? 'active' : ''}`}>
                    Reports
                </Link>

                <a
                    className={`item ${match.path === '/modal' ? 'active' : ''}`}
                    onClick={toggleModal}
                >
                    Modal
                </a>
            </div>
        );
    }
}

Navbar.contextType = AppContext;

export default withRouter(Navbar);
