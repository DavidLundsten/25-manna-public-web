import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import {List} from '../../Components';
import {isNil} from 'ramda';

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

export const  Team = ({match}) => {
        return (
            <div>
                <div style={{...style.section, backgroundColor:'#03293C'}}>
                    <h1 style={{color:'white'}}>Id: { !isNil(match) && match.params.id}</h1>
                    <Grid container style = {{maxWidth:'900px'}}>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
}
