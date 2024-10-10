import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Itinerary from './components/Itinerary';
import GlobalStyle from './styles/GlobalStyle'; // Global styles

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <div>
                <Switch>
                    <Route path="/" exact component={Auth} />
                    <Route path="/itinerary" component={Itinerary} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
