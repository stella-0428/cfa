import React, { Component } from 'react'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { observer, inject } from 'mobx-react';

const IconAndTextColor = 'white';
const activeTextColor = '#0cb966';
const useStyles = theme => ({
    sideBarListRoot: {
        border: '0.2px solid #e0e0e021'
    },
    homeIcon: {
        minWidth: '45px',
        "& .MuiSvgIcon-root":{
            fontSize: '35px', 
            color: IconAndTextColor
        }
    },
    logoText: {
        color: IconAndTextColor,
        fontWeight: 100,
        textAlign: "center",
        "& span": {
            fontSize: "20px",
        }
    },
    logoDivider: {
        'backgroundColor': '#e0e0e021',
        'margin': '5% 10%'
    },
    sideBarListItem: {
        padding: '10px 15px',
        color: IconAndTextColor,
        borderRadius: '20px',
        margin: '10px 1px',
        width: '95%',
        "& .MuiListItemIcon-root": {
            // minWidth: '40px'
        },
        "& .MuiSvgIcon-root": {
            color: IconAndTextColor,
            fontSize: '1.6rem',
            marginLeft: '3px',
        },
        "&:hover": {
            border: '0.1px solid #0cb966'
        },
    },
    activeSideBarItem: {
        border: '0.1px solid #0cb966',
        color: activeTextColor,
        "& .MuiSvgIcon-root": {
            color: activeTextColor,
        },
    },
    sideBarListText: {
        "& span": {
            fontSize: '15px'
        }
    }
});

@inject("pageStore")
@observer
class SideBar extends Component {

    constructor(props) {
        super(props);
        this.pageStore = this.props.pageStore;
        console.log("this.pageStore.pageIndex");
        console.log(this.pageStore.pageIndex);
    }

    render() {
        const { classes } = this.props;
        return (
            // 
            // <Route path="/bcg/EvaluatorSelection" component={EvaluatorSelection} />
            // <Route path="/bcg/SubmittedFeedbacks" component={SubmittedFeedbacks} />
            // 
            <List component="nav" aria-labelledby="nested-list-subheader" className={classes.sideBarListRoot}>
                <Link underline='none' component={RouterLink} to='/bcg/EvaluatorSelection'>
                    <ListItem button className={this.pageStore.pageIndex == 0 ? `${classes.activeSideBarItem} ${classes.sideBarListItem}` : `${classes.sideBarListItem}`}>
                        <ListItemIcon><SpeakerNotesIcon /></ListItemIcon>
                        <ListItemText className={classes.sideBarListText} primary="Evaluator Selection" />
                    </ListItem>
                </Link>
                <Link underline='none' component={RouterLink} to='/bcg/SubmittedFeedbacks'>
                    <ListItem button className={this.pageStore.pageIndex == 1 ? `${classes.activeSideBarItem} ${classes.sideBarListItem}` : `${classes.sideBarListItem}`}>
                        <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
                        <ListItemText className={classes.sideBarListText} primary="Submitted Feedbacks" />
                    </ListItem>
                </Link>
                {/* <Link underline='none' component={RouterLink} to='/bcg/CorrectSKU'>
                    <ListItem button className={this.pageStore.pageIndex == 3 ? `${classes.activeSideBarItem} ${classes.sideBarListItem}` : `${classes.sideBarListItem}`}>
                        <ListItemIcon><BorderColorIcon /></ListItemIcon>
                        <ListItemText className={classes.sideBarListText} primary="Correct SKU" />
                    </ListItem>
                </Link>
                <Link underline='none' component={RouterLink} to='/bcg/ReadOut'>
                    <ListItem button className={this.pageStore.pageIndex == 4 ? `${classes.activeSideBarItem} ${classes.sideBarListItem}` : `${classes.sideBarListItem}`}>
                        <ListItemIcon><AspectRatioIcon /></ListItemIcon>
                        <ListItemText className={classes.sideBarListText} primary="Readout" />
                    </ListItem>
                </Link> */}
            </List>
        );
    }
}


export default withStyles(useStyles)(SideBar);
