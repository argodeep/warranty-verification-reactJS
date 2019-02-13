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
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '50%',
  },
   wrapper: {
    width: '50%',
    margin: theme.spacing.unit,
    display: 'block',
  },

  progress: {
    color: blue[500],
    width: '50%',
    margin: theme.spacing.unit,
    display: 'block',
  },
 
   tablePaper: {
    margin: theme.spacing.unit,
    width: '50%',
    
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
  
});

class AddInvoice extends React.Component {
  
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("company").doc(this.props.match.params.compkey).collection("invoice");
    this.state = {
      company_name: '',
      isLoading: false,
      dialogShow: false,
      companies: {},
      key: ''
    };
  }

  componentDidMount() {
    document.title = 'Add Invoice';
    const fetch = firebase.firestore().collection("company").doc(this.props.match.params.compkey);
    fetch.get().then((doc) => {
      if (doc.exists) {
        const Companies = doc.data();
        this.setState({
          key: doc.id,
          company_name: Companies.company_name,
          isLoading: false
        });
      } else {
        alert("Error While Fetching Company");
      }
    });
  }

  handleChange = (event) => {
  const { target: { name, value } } = event;
  this.setState(() => ({ company_name: value }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.company_name == '')
    {
      alert("Please Add Invoice No");
    }
    else {
     this.setState({
      isLoading: true
      });
      this.ref.add({
        company_name: this.state.company_name
      }).then((docRef) => {
      this.setState({
        company_name: this.state.company_name,
        isLoading: false,
        dialogShow: true
      });
      this.handleOpen();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      this.setState({
        company_name: this.state.company_name,
        isLoading: false
      });
    });
  }
}

  handleOpen = (e) => {
    const [open, setOpen] = React.useState(false);
    setOpen(true);
  }
 

  handleClose = (e) => {
   this.setState({
        company_name: '',
        dialogShow: false
      });
    setOpen(false);
  }

  Transition = (props) => {
  return <Slide direction="up" {...props} />;
  }


  render() {
    const { classes } = this.props;
    const progress = this.state.isLoading;
    const popupDialog = this.state.dialogShow;

    return (
      <Fragment>
    
     <AppBar />
     <Drawer /> 

      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div>
            <form className={classes.container}>
      <TextField
        id="outlined-required"
        label="Enter Company Name"
        className={classes.textField}
        value={this.state.company_name}
        onChange={this.handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="true"
        required
      />
       {progress == true && <LinearProgress className={classes.progress} /> }
      

      
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.handleSubmit}
        >
          Add Company
        </Button>
      </div>
      </form>
 { popupDialog == true &&
        <Dialog
        open={open}
        TransitionComponent={this.Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
       
        
        <DialogTitle id="alert-dialog-slide-title">{"Company Succcesfully Added"}</DialogTitle>
        {dialogprogress == true ? <LinearProgress className={classes.dialogProgress} /> : <div>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
        <Table>
        <TableBody>
         {
            this.state.companies.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.company_name}</TableCell>
                <TableCell align="right"><Link to={`/add-invoice/${item.key}`}>Add Invoice</Link></TableCell>
              </TableRow>
          
          ))
          }
        </TableBody>
      </Table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="#ff0000">
            Close
          </Button>         
        </DialogActions>
        </div>
      }
      </Dialog>
}
          </div>

        </main>

      </div>
        </Fragment>
    );
  }
}

AddInvoice.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddInvoice);
