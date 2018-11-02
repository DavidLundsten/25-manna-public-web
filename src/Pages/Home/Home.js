import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import {mockedData} from '../../Helpers';
import {Link} from 'react-router-dom';
import {List} from '../../Components';
import {connect} from 'react-redux';
import {websocketActions} from "../../Actions";

const style = {
    textbox:{
        backgroundColor:'white',
        opacity:'0.6',
        height:'100%',
    },
    section:{
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
};

class Home extends Component {

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <div style={{...style.section, backgroundColor:'#03293C'}}>
                    <Grid container style = {{maxWidth:'900px'}}>
                        <Grid item xs={12}>
                            <h1 style={{color:'white'}}>Sträcka:</h1>
                            {this.props.legs.map((leg) =>
                                <Link
                                    to={`/leg/${leg.id}`}
                                >
                                <div style={{ color: 'white' }}>{leg.number}</div></Link>)}
                        </Grid>
                        <br/>

                    </Grid>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        legs: state.legs.legs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        serverCall: ()=>{ dispatch(websocketActions.serverCall())}
    }
}

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Home);

export {connectedApp as Home};




