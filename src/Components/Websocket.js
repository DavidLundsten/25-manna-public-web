import React, { Component } from 'react';
import {connect} from 'react-redux';
import { websocketActions} from "../Actions";



const app = {
    fontFamily: "font-family: 'Alegreya Sans', sans-serif",
    textAlign:'center',
}


class Websocket extends Component {

    componentWillMount(){
        if(this.props.state.websocket.connection === null){this.props.dispatch(websocketActions.startConnection())}
    }

    render() {
        return (
            <React.Fragment/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Websocket);

export {connectedApp as Websocket};





