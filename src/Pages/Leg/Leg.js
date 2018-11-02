import React, { Component } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Button, Table, Paper, Typography, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List } from '../../Components/index';
import { isNil } from 'ramda';
import { connect } from 'react-redux';
import { find, propEq } from 'ramda';
import '../../App.css';
import './Leg.css';

class Leg extends Component {

   addTeam (){
       console.log('hej')
       this.props.dispatch()
  }
    render() {
        const match = this.props.match;
        const leg = this.props.legs[match.params.id - 1];
        console.log(leg)
        const results = leg.results;
        
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
                        <Button style={{ backgroundColor: 'pink', marginTop: '20px'}}onClick={this.addTeam}>ADD RANDOM TEAM</Button>
                        <Grid container>
                            <Grid className={"results-table"} item spacing={4} xs={12} sm={12}>
                                <Paper >
                                        <Table className={"table"} style={{}}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Pos</TableCell>
                                                <TableCell>Team</TableCell>
                                                <TableCell numeric>Time</TableCell>
                                                <TableCell>Behind</TableCell>
                                             
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {results.map(row => {
                                                return (
                                                    <TableRow className={row.newArrival && 'new-arrival'} key={row.id}>
                                                        <TableCell >
                                                            {!isNil(row.position)? row.position: '' }
                                                        </TableCell>
                                                        <TableCell padding='none' component="th" scope="row">
                                                            { !isNil(row.name)? row.name : ""}
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            { !isNil(row.time)? row.time : ""}
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            {!isNil(row.behind) ? row.behind : "" }
                                                        </TableCell>
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
        dispatch
    }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Leg);

export { connectedApp as Leg };


