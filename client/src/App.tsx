import React from "react";

import FrontPage from "./views/frontPage/FrontPage";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App(props:Object) {

    return <>
        <Router>
            <Switch>
                <Route path="/">
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    </>;

}

export default App;