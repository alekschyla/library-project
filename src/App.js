import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import EditBook from "./EditBook/EditBook";

const App = () => {
    return (
        <Router>
            <Route
                exact={true}
                path={"/"}
                component={Dashboard}
            />
            <Route
                exact={true}
                path={"/book/:id"}
                component={EditBook}
            />

        </Router>
    );
};

export default App;