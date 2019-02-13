import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import Typography from '@material-ui/core/Typography';




export const mainListItems = (
  <div>
     <ListSubheader>Warranty Verification Web V1.0</ListSubheader>
      <ListSubheader inset></ListSubheader>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
    <Link to="/search-serial" style={{ textDecoration: 'none' }}><ListItem button>
      <Avatar alt="Profile Picture" src={'/assets/1.png'} />
      <ListItemText primary="Search Product Serial" secondary="Get product serial, invoice, date & company details"/>
    </ListItem></Link>
    <Link to="/select-company" style={{ textDecoration: 'none' }}><ListItem button>
      <Avatar alt="Profile Picture" src={'/assets/2.png'} />
      <ListItemText primary="Add Serial & Invoice" secondary="Add new product serial & invoice for any company"/>
    </ListItem></Link>
    <Link to="/" style={{ textDecoration: 'none' }}><ListItem button>
      <Avatar alt="Profile Picture" src={'/assets/3.png'} />
      <ListItemText primary="Add New Company" secondary="Add new company to started with warranty management"/>
    </ListItem></Link>
  </div>
);


export const extraSecondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
     <Card style={{ marginRight: 10, marginLeft: 10 }}>
   <Typography style={{ fontWeight: 'bold', paddingTop: 10, paddingLeft: 15 }}>
            App Developer Info
          </Typography>

  <CardHeader style={{ fontWeight: 'bold' }}
        avatar={
          <Avatar alt="Icon" src={'https://scontent.fgau1-1.fna.fbcdn.net/v/t1.0-9/38491902_1790085461076915_1608236927595577344_n.jpg?_nc_cat=109&_nc_ht=scontent.fgau1-1.fna&oh=321ee32aa76c08b610ba36cc4527adba&oe=5CA8B248'} />
        }

        title="Arghyadeep Majumder"
        subheader="React Developer"
      />

 <CardActions disableActionSpacing>
        <Button size="small" color="primary">
         <a target="_blank" href="https://github.com/argodeep" style={{ textDecoration: 'none' }}>Github</a>
        </Button>

         <Button size="small" color="primary">
          <a target="_blank" href="https://www.linkedin.com/in/argodeep/" style={{ textDecoration: 'none' }}>Linkedin</a>
        </Button>

       
      

        
      </CardActions>

       <Typography style={{ fontWeight: 'bold', paddingBottom: 10, paddingLeft: 15 }}>
            Contact me at:
        
          </Typography>

      <Typography style={{ fontWeight: 'normal', paddingBottom: 10, paddingLeft: 15 }}>
           
        arghyadeep.official@gmail.com
          </Typography>
  </Card>
  </div>
);
