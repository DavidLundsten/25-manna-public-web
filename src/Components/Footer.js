import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { Send as NextIcon } from 'grommet-icons';
import './Styles/Footer.css';
import Grid from '@material-ui/core/Grid';


export default props => {
    const [long, setLong] = useState('0');
    const [lat, setLat] = useState('0');
    const initialTheme = useContext(ThemeContext);

    useEffect(() => {
        document.title = long + " " + lat;
    })

    useEffect(() => {
        var startPos;
        var geoSuccess = function (position) {
            startPos = position;
            setLong(startPos.coords.longitude);
            setLat(startPos.coords.latitude);
        };
        navigator.geolocation.getCurrentPosition(geoSuccess);
    })

    return (
        <div className={initialTheme.userTheme + "-theme"}>
            <Grid container spacing={16}>
                <Grid item sm={4} xs={12}>{long}</Grid>
                <Grid item sm={4} xs={12}></Grid>
                <Grid item sm={4} xs={12}> {lat}</Grid>
            </Grid>
                    
                    <br>
                    </br>
                   
                </div>  
  
    );
}
    

