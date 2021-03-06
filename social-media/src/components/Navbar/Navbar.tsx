import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';
import {SideBar} from "../../state/state";

type NavType = {
    state: SideBar
}

const Navbar: React.FC<NavType> = ({state}) => {
    const friendsList = state.friends.map((fr) => {
        return fr.name + " "
    })
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news"
                         className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music"
                         className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
            </div>
            <br/>
            <div className={classes.item}>
                {"Friends: \n" +
                friendsList}
            </div>
        </nav>
    );
};

export default Navbar;