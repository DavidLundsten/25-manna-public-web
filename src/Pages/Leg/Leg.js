import React, { Component } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Table, Paper, Typography, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List } from '../../Components/index';
import { isNil } from 'ramda';
import { connect } from 'react-redux';
import { find, propEq } from 'ramda';
import '../../App.css';
import './Leg.css';

class Leg extends Component {
    render() {
        const match = this.props.match;
        const leg = this.props.legs[match.params.id - 1];

        return (
            <div>
                <div>

                    <div className={"App-header"}>
                        <h1 style={{ color: 'white' }}>Sträcka: {!isNil(match) && match.params.id}</h1>
                    </div>
                    <div className={"App-section"}>

                        <Grid item xs={12}>
                            <ExpansionPanel className={"expansion-panel"}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Grid item xs={12}>
                                        <p>Detaljer</p>
                                    </Grid>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container>
                                        <Grid item sm={4} xs={12}>
                                            ID:
                                            {leg.id}
                                        </Grid>
                                        <Grid item sm={4} xs={12}>
                                            Distans: {leg.distance} km
                                            </Grid>
                                        <Grid item sm={4} xs={12}>
                                            Antal löpare: {leg.runners}
                                        </Grid>
                                    </Grid>

                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                        <Grid container>
                            <Grid className={"results-table"} item spacing={4} xs={12} sm={6}>
                                <Paper >
                                    <Table className={"table"}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Dessert (100g serving)</TableCell>
                                                <TableCell numeric>Calories</TableCell>
                                                <TableCell numeric>Fat (g)</TableCell>
                                                
                                                
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[1,2,3].map(row => {
                                                return (
                                                    <TableRow key={row.id}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell numeric>{row.calories}</TableCell>
                                                        <TableCell numeric>{row.calories}</TableCell>
                                                        
                                                        
                                                        
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Grid>
                            <Grid className={"results-table"} item xs={12} sm={6}>
                                <Paper>
                                    <Table className={"table"}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Dessert (100g serving)</TableCell>
                                                <TableCell numeric>Calories</TableCell>
                                                <TableCell numeric>Fat (g)</TableCell>
                                                
                                               
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[1,2,3].map(row => {
                                                return (
                                                    <TableRow key={row.id}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell numeric>{row.calories}</TableCell>
                                                        <TableCell numeric>{row.fat}</TableCell>
                                                        
                                                      
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Grid>
                        </Grid>

                    </div>
                </div>
            </div>



        )
    }
}


const mapStateToProps = (state) => {
    return {
        legs: state.legs.legs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Leg);

export { connectedApp as Leg };


