import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Store} from './Helpers';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home, About, Team} from './Pages';
import {Navbar, Footer} from "./Components";


const app = {
    fontFamily: "font-family: 'Alegreya Sans', sans-serif;",
    textAlign:'center',
}

class App extends Component {
    render() {
        return (
            <Provider store = {Store()}>
                <div style={app}>
                    <Router>
                        <div>
                            <Navbar/>
                            <Route exact path="/" component={Home} />
                            <Route path="/team/:id" component={Team} />
                            <Route path="/about" component={About} />
                            <Footer/>
                        </div>

                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
