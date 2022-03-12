import React from "react";
import {Autocomplete } from '@react-google-maps/api';

import {AppBar,Toolbar,Typograpy,Inputbase,Box} from '@matarial-ui/core';
const Header = ()=>{
    return(
       <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Typograpy variant = "h5" className{classes.title}>
            Travel Advisor
        </Typograpy>
        </Toolbar>

       </AppBar>
    );
}

export default Header;