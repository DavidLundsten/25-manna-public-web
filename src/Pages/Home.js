import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import {mockedData} from '../Helpers';
import {Link} from 'react-router-dom';

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

export class Home extends Component {
    render() {
        console.log(mockedData)
        return (
            <div>
                <div style={{...style.section, backgroundColor:'#03293C'}}>
                    <Grid container style = {{maxWidth:'900px'}}>
                        <Grid item xs={12}>
                            <h1 style={{color:'white'}}>It's here.</h1>
                            <p style={{color:'white'}}>Get the story</p>
                            {mockedData.map((item)=><Link to={`/team/${item.id}`}><div style={{color:'white'}}>{item.name}</div></Link>)}
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
