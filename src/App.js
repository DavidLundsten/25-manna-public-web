import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Store} from './Helpers';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home, About, Team, Leg} from './Pages';
import {Navbar, Footer, Websocket} from "./Components";


const app = {
    fontFamily: "font-family: 'Alegreya Sans', sans-serif",
    textAlign:'center',
}


class App extends Component {

    render() {
        return (
            <Provider store = {Store()}>
                <div style={app}>
                    <Router>
                        <div>
                            <Websocket/>
                            <Navbar/>
                            <Route exact path="/" component={Home} />
                            <Route path="/team/:id" component={Team} />
                            <Route path="/about" component={About} />
                            <Route path="/leg/:id" component={Leg} />
                            <Footer/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}


export default App;
