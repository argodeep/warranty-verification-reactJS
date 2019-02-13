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
import Paper from '@material-ui/core/Paper';


import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';


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
    margin: theme.spacing.unit,
    position: 'relative',
  },
 
   tablePaper: {
    margin: theme.spacing.unit,
    width: '50%',
    
  },
  
});

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Fragment>
    
     <AppBar />
     <Drawer /> 
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div>
     <Typography variant="h4" gutterBottom component="h4" className={classes.textField}>
            Company Name
          </Typography>

    <Typography variant="h6" gutterBottom component="h6" className={classes.textField}>
            Invoice: 
    </Typography>
            
     <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Enter Serial"
        className={classes.textField}
       
        margin="normal"
        variant="outlined"
      />

       <TextField
        id="outlined-name"
        label="Enter Model No"
        className={classes.textField}
       
        margin="normal"
        variant="outlined"
      />

       <TextField
        id="date"
        label="Birthday"
        type="date"
        margin="normal"
        variant="outlined"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </form>

      
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          
        >
          Add Serial
        </Button>
        
      </div>

  <Paper className={classes.tablePaper}>
   <Table>
  <TableBody>
         
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                  ok
                </TableCell>
                <TableCell align="right">Add Invoice</TableCell>
              </TableRow>
            );
      
        </TableBody>
        </Table>
    </Paper>

          </div>
        </main>
      </div>
             </Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
