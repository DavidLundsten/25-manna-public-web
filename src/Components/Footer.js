import React, { Component } from 'react';
import {ReactDOM} from 'react-dom';
import {connect} from 'react-redux';
import {TextField, Button, InputAdornment, withStyles} from '@material-ui/core';
import {Send as NextIcon} from 'grommet-icons';

const styles = theme =>  ({
    section:{
        minHeight:'50vh',
        display:'flex',
        color:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
})



export class footer extends Component {

    handleChange = e => {
    };

    confirmNewsletter = () => {
    };


    render (){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.section}>
                    <h1 style={{fontWeight:'400', color:'#219DBE'}}>Prenumerera på vårt nyhetsbrev!</h1>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        style={{width:'18.75rem'}}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment
                                    position="end"
                                    style={{ order: "2", paddingRight:'0.5rem'}}
                                    onClick={this.confirmNewsletter}
                                >
                                    <Button>
                                        <NextIcon/>
                                    </Button>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
            </React.Fragment>
        )
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

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(footer);
const styledApp = withStyles(styles)(connectedApp);
export {styledApp as Footer};







