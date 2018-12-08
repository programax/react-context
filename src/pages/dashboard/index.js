import React from 'react';
import Layout from '../../components/layout';
import { AppContextProvider } from '../../context/appContext';

class Dashboard extends React.Component {
    render() {
        return (
            <AppContextProvider>
                <Layout>
                    <div>
                        dashboard
                    </div>
                </Layout>
            </AppContextProvider>
        );
    }
}

export default Dashboard;
