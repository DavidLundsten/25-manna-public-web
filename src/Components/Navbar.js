import React, { Component, useContext } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {ReactDOM} from 'react-dom';
import logo from '../Images/25mannalogo.png';
import { connect } from 'react-redux';
import {navbarActions, menusActions} from "../Actions";
import {Menu as MenuIcon} from 'grommet-icons';
import {Hidden, Menu} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import './Styles/Navbar.css';


class Navbar extends Component {
    
    state = {
        anchorEl: null,
    };

    componentDidMount() {
        this.props.dispatch(menusActions.getMenus());
        window.addEventListener('scroll', (e) => this.handleScroll(e));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event){
        const scrollposition = event.srcElement.scrollingElement.scrollTop;

        if(scrollposition > 60 && this.props.navbar.fullwidth ){
            this.props.dispatch(navbarActions.hideFullwidthBar())
        }
        else if (scrollposition < 60 && !this.props.navbar.fullwidth ){
            this.props.dispatch(navbarActions.showFullwidthBar())
        }
        else {
        }
    }

    handleClose = (e) => {
        this.props.dispatch(navbarActions.closeDropdownMenu())
    };

    render() {
        return (
            <React.Fragment>
                <Hidden xsDown>
                <nav className={this.props.navbar.fullwidth ? "navbar": "navbar navbar-hidden"}>
                    <img className={"logo"} src={logo} alt="25-manna logo" />
               
                    <Link className={"link"} to={"/om-oss"}> {`Current width: ${this.props.width}`} </Link>
                    <Link className={"link"} to={"/om-oss"}> Om oss </Link>
                    <Link className={"link"} to={"/om-oss"}> Om oss </Link>
                </nav>
                {console.log(this.props.navbar.fullwidth)}
                
                {!this.props.navbar.fullwidth  && 
                    <nav className={!this.props.navbar.fullwidth? "mobile-menu" : "mobile-menu-hidden"}>
                        <MenuIcon className={"icon"} color='white' size='large' aria-haspopup="true" onClick={()=> this.props.dispatch(navbarActions.openDropdownMenu())}  aria-owns={this.props.navbar.fullwidth ? 'simple-menu' : null}/>
                        <Menu
                            id="simple-menu"
                            open={this.props.dropdownMenu}

                            onClose={()=> this.props.dispatch(navbarActions.closeDropdownMenu())}
                            anchorReference="none"
                            PaperProps={{
                                style: {
                                    width: '30%',
                                    padding: 0,
                                    right: '1%',
                                    top:'3%',
                                    opacity: '0.9'
                                },
                            }}
                            MenuListProps={{
                                style: {
                                    padding: 0,
                                    backgroundColor:'transparent'
                                },
                            }}
                        >
                            <MenuItem className={"menu-item"} onClick={this.handleClose}>Tävlingar</MenuItem>
                            <MenuItem className={"menu-item"} onClick={this.handleClose}>Kalender</MenuItem>
                            <MenuItem className={"menu-item"} onClick={this.handleClose}>Om oss</MenuItem>
                        </Menu>
                    </nav>
                    }
                </Hidden>

                <Hidden smUp>
                    <nav className={"mobile-menu"}>
                        <MenuIcon className={"icon"} color='white' size='large' aria-haspopup="true" onClick={() => this.props.dispatch(navbarActions.openDropdownMenu())} aria-owns={this.props.navbar.fullwidth ? 'simple-menu' : null} />
                        <Menu

                            id="simple-menu"
                            open={this.props.dropdownMenu}

                            onClose={() => this.props.dispatch(navbarActions.closeDropdownMenu())}
                            anchorReference="none"
                            PaperProps={{
                                style: {
                                    width: '95%',
                                    padding: 0,
                                    right: '3%',
                                    top: '3%',
                                    opacity: '0.9'
                                },
                            }}
                            MenuListProps={{
                                style: {
                                    padding: 0,
                                    backgroundColor: 'transparent'
                                },
                            }}
                        >
                            <MenuItem onClick={this.handleClose}>Tävlingar</MenuItem>
                            <MenuItem onClick={this.handleClose}>Kalender</MenuItem>
                            <MenuItem onClick={this.handleClose}>Om oss</MenuItem>
                        </Menu>
                    </nav>
                </Hidden>


            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        navbar: state.navbar,
        dropdownMenu: state.navbar.dropdownMenu,
        theme: state.theme.themecolor,
        menus: state.menus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch

    }
}

const connectedApp =  connect(mapStateToProps, mapDispatchToProps)(Navbar);

export {connectedApp as Navbar};





