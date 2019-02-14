import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import Collapse from '@material-ui/core/Collapse';
import {Link} from 'react-router-dom'
import {NavToggleButton} from './style'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class NavDrawer extends Component {
    state = {
        nestedOpen: false,
        open: false,
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
            open: !prevState.open
            }
        }, function (){})
    }

    toggleNested = () => {
        this.setState((prevState) => {
            return {
            nestedOpen: !prevState.nestedOpen
            }
        }, function (){})
    }

    render() {
        return (
            <div>
            <NavToggleButton
                toggle={this.toggle}
                open={this.state.open}
            />
            <Drawer
                open={this.state.open}
            >
                <List>
                <MenuItem>
                    <NavToggleButton
                    toggle={this.toggle}
                    open={this.state.open}
                    disablePadding={true}
                    />
                </MenuItem>
                <Link
                to={'/'}
                style={{ textDecoration: 'none' }}
                >
                <MenuItem
                    onClick={this.toggle}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Home" />
                </MenuItem>
                </Link>
                <Link
                to={'/allwords'}
                style={{ textDecoration: 'none' }}
                >
                <MenuItem
                    onClick={this.toggle}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="All words" />
                </MenuItem>
                </Link>
                <Link
                to={'/insertword'}
                style={{ textDecoration: 'none' }}
                >
                <MenuItem
                    onClick={this.toggle}>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Add a new word" />
                </MenuItem>
                </Link>
                <ListItem button onClick={this.toggleNested}>
                    <ListItemText primary="Words by category" />
                    {this.state.nestedOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.nestedOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {this.props.categories.map((category, i) => 
                            <Link
                            key = {i}
                            to={'/'+category}
                            style={{ textDecoration: 'none' }}
                            >
                                <MenuItem
                                    onClick={this.toggle}>
                                    <ListItemText inset primary={category} />
                                </MenuItem>
                            </Link>
                        )}
                    </List>
                </Collapse>
            </List>
            </Drawer>
            </div>
      )
    }
}

export default NavDrawer
