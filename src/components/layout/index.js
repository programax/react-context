import React, { Fragment } from 'react';
import Navbar from '../navbar';
import Modal from '../modal';
import './style.scss';
import { AppContext } from '../../context/appContext';

class Layout extends React.Component {
    render() {
        const  {
            children,
        } = this.props;

        const {
            isModalOpen,
        } = this.context;

        return (
            <Fragment>
                <Navbar />

                <div className="content">
                    {children}
                </div>

                {isModalOpen && <Modal />}
            </Fragment>
        );
    }
}

Layout.contextType = AppContext;

export default Layout;
