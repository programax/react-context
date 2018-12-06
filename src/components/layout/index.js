import React, { Fragment } from 'react';
import Navbar from '../navbar';
import Modal from '../modal';
import './style.scss';

function Layout(props) {
    const  {
        children,
    } = props;

    return (
        <Fragment>
            <Navbar />

            <div className="content">
                {children}
            </div>

            {/* <Modal /> */}
        </Fragment>
    );
}

export default Layout;
