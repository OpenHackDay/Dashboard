import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'relative',
    maxWidth: 300,
    fontSize: '30px',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1545911678-09d0843ccef1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


const SimpleList = (props) => {
  return (
    <div className={props.classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Configure" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Basic Settings" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Orders" />
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(SimpleList);