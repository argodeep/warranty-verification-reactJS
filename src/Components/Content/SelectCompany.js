import React, { Fragment } from 'react';
import { AppBar, Drawer } from '../Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import LinearProgress from '@material-ui/core/LinearProgress';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import firebase from '../../../Firebase';




const drawerWidth = 300;
const appHeight = 64;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginLeft: drawerWidth,
    marginTop: appHeight,
    marginBottom: 20,
    width: `calc(100% - ${drawerWidth}px)`,
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
   wrapper: {
    width: '50%',
    margin: theme.spacing.unit,
    display: 'block',
  },

  progress: {
    color: blue[500],
    margin: theme.spacing.unit,
    display: 'block',
  },
  
});

class AddCompany extends React.Component {
  
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("company");
    this.unsubscribe = null;
    this.state = {
      company_name: '',
      fetching: true,
      companies: []
    };
  }

  componentDidMount() {
    document.title = 'Select Company';
    this.fetch = firebase.firestore().collection("company").orderBy("company_name", "asc");
    this.unsubscribe = this.fetch.onSnapshot(this.onCollectionUpdate);
  }


   onCollectionUpdate = (querySnapshot) => {
    const companies = [];
    querySnapshot.forEach((doc) => {
      const { company_name } = doc.data();
      companies.push({
        key: doc.id,
        doc, // DocumentSnapshot
        company_name,
      });
    });
    if (querySnapshot.size == 0) {
    alert('No Company Found');
    } else {
    this.setState({
      companies,
      fetching: false
    });
    this.unsubscribe();
  }
  }

  



  render() {
    const { classes } = this.props;
    const progress = this.state.fetching;

    return (
      <Fragment>
     <AppBar />
     <Drawer /> 
    
     <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
       {progress == true ? <LinearProgress className={classes.progress} /> :  <div>
     <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: 'bold', color: 'black'}}>Existing Company Name (A - Z)</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {
            this.state.companies.map((item, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row" style={{ fontSize: 15}}>{item.company_name}</TableCell>
                <TableCell align="right" style={{color: 'blue'}}>Add Invoice</TableCell>
                <TableCell align="right" style={{color: 'red'}} onClick={() => this.dialog(item.key)}>Delete</TableCell>
               </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </Paper>
     </div>
}
        </main>

      </div>
    
    
     </Fragment>
    );
  }
}

AddCompany.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCompany);
