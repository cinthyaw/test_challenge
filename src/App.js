import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Selector from './views/Selector';
import Portfolio from './views/Portfolio';

const App = () => {

    return (
        <Router>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">


                <main>
                    <Switch>
                        <Route exact path="/">
                            <Selector />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>



    );
}

export default App;
