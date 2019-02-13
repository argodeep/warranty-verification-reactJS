import React, { Fragment } from 'react';
import { AppBar, Drawer } from '../Header';
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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import firebase from '../../../Firebase';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
   wrapper: {
    margin: theme.spacing.unit,
    display: 'block',
  },
 
   tablePaper: {
    margin: theme.spacing.unit,    
  }
  
});

class CompanyAdded extends React.Component {
  
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("company").where("company_name", "==", "ABCD");
    this.unsubscribe = null;
    this.state = {
      company_name: '',
      companies: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
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
    this.setState({
      companies
   });
    this.unsubscribe();
  }

  AddInvoiceButton = (e) => {
      this.setState({
        company_name: this.state.company_name,
        dialogShow: false
      });
      this.props.history.push("/:compkey/add-invoice");
  }

  render() {
    const { classes } = this.props;

    

    return (
      <Fragment>
    
    <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {
            this.state.companies.map((item, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {item.company_name}
                </TableCell>
                <TableCell align="right" onClick={this.AddInvoiceButton}>{item.key}</TableCell>
              </TableRow>
          
          ))
          }
        </TableBody>
      </Table>
        </Fragment>
    );
  }
}

CompanyAdded.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyAdded);
