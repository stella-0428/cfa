import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SideBar from "./_shared/components/sidebar/sidebar";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import EvaluateSales from './pages/evaluate_sales/evaluate_sales';
import SubmittedSales from './pages/submitted_sales/submitted_sales';


const drawerWidth = 240;
const themeBaseHeadColor = 'black';
const useStyles = theme => ({
    applicationRootGrid: {
        // background: 'rgb(82,70,107)',
        // background: 'linear-gradient(90deg, rgba(82,70,107,1) 0%, rgba(49,58,90,1) 40%, rgba(41,53,82,1) 89%)',
        background: '#1f1f1f'
    },
    root: {
        display: "flex"
    },
    appLogoText: {
        width: "100%",
        textAlign: "left",
        color: "#0bb866",
        fontWeight: "bold",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    appBar: {
        backgroundColor: themeBaseHeadColor,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        background: themeBaseHeadColor
    },
    drawerOpen: {
        width: drawerWidth,
        background: themeBaseHeadColor,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        background: themeBaseHeadColor,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        background: "#161b21",
        height: '100vh',
        overflowY: "auto"
    }
});

class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };


    handleDrawerClose = () => {
        this.setState({ open: false });
    };


    getAllRoutes = () => {
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact component={EvaluateSales} />
                    <Route path="/bcg/EvaluateSales" component={EvaluateSales} />
                    <Route path="/bcg/SubmittedSales" component={SubmittedSales} />
                </Switch>
            </div>
        )
    }

    render() {
        const { classes, theme } = this.props;
        console.log(this.props.location.pathname);
        const curRoute = this.props.location.pathname;
        if (curRoute && curRoute.replaceAll("/", '') === "bcg") {
            return (
                <Grid className={classes.applicationRootGrid} container justify="center" align="center">
                    <Grid item xs={12}>
                        {this.getAllRoutes()}
                    </Grid>
                </Grid >
            );
        }
        else {
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: this.state.open })} >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: this.state.open
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.appLogoText} noWrap>BCG Sales Tool</Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: this.state.open,
                                [classes.drawerClose]: !this.state.open
                            })
                        }}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === "rtl" ? (
                                    <ChevronRightIcon style={{ color: 'white' }} />
                                ) : (
                                        <ChevronLeftIcon style={{ color: 'white' }} />
                                    )}
                            </IconButton>
                        </div>
                        <SideBar />
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {this.getAllRoutes()}
                    </main>
                </div>
            );
        }
    }
}

export default withRouter(withStyles(useStyles, { withTheme: true })(AppRouter));
