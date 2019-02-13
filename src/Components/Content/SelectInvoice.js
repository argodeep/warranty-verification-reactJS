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
import ListItemTable from '../Otherlayout/ListItemTable';


const drawerWidth = 280;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    height: '100vh',
    overflow: 'auto',
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
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
          <div className={classes.appBarSpacer} />
          <Typography variant="h6" gutterBottom component="h6" style={{textAlign:'center'}}>
            Add Company
          </Typography>
          <div className={classes.tableContainer}>
            <ListItemTable />
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
