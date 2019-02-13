import React, { component} from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from '../../../Firebase';

import LinearProgress from '@material-ui/core/LinearProgress';

const drawerWidth = 300;

const styles = {
  root: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  grow: {
    flexGrow: 1,
  },
  headerStyle: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  loader: {
    width: `calc(100%)`,
    height: '100vh',
  }
};

class ButtonAppBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      isLoading: '',
    }
  }

  onLogout = (e) => {
      setTimeout(function(){
            firebase.auth().signOut();
        }.bind(this),1200); 
      this.setState({isLoading:true});
  }



  render () {
    const { classes, match, location, history } = this.props;
    const headerTitle = () => {
        switch(location.pathname) {
          case '/' :
                  return 'Add Company';
          case "/select-company":
                  return "Select Company";
          
          case "/search-serial":
                  return "Search Serial";

          case "/add-invoice/(this.props.match.params.compkey)":
                  return "Add Invoice";

          default:
                  return "Warranty Verification"          
        }
    }

    if(this.state.isLoading){
    return(
       <div className={classes.loader}>
      <LinearProgress />
    </div>
        
      )
    }

    return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#2E3B55' }} className={classes.headerStyle} >
        <Toolbar>         
          <Typography variant="h6" color="inherit" className={classes.grow}>
          { headerTitle() }
          </Typography>
          <Button color="inherit" onClick={this.onLogout}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
  
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(ButtonAppBar));
