import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';

const Root = (
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/reports" component={Reports} />
            <Redirect from="/" to="/dashboard" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));
