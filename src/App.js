import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Store} from './Helpers';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home, About, Team, Leg} from './Pages';
import { Navbar, Websocket } from "./Components";
import Footer from "./Components/Footer";
import { ThemeContext } from './Contexts/ThemeContext';
import userConfig from './Helpers/config';


const app = {  
    fontFamily: "font-family: 'Alegreya Sans', sans-serif",
    textAlign:'center',
}

class App extends Component {
    render() {
        return (
            <Provider store={Store()}>
                <ThemeContext.Provider value={userConfig}>
                <div style={app}>
                    <Router>
                        <div>
                            <Websocket/>
                            <Navbar/>
                            <Route exact path="/" component={Home} />
                            <Route path="/team/:id" component={Team} />
                            <Route path="/om-oss" component={About} />
                            <Route path="/leg/:id" component={Leg} />
                            <Footer />
                        </div>
                    </Router>
                    </div>
                </ThemeContext.Provider>
            </Provider>
        );
    }
}


export default App;
