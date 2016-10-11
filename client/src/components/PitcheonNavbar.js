import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Row} from 'react-materialize';
import {Link} from 'react-router';

var navStyle = {
	borderTop:0,
	borderLeft:0,
	borderRight:0,
	borderBottom:4,
	borderColor:'black',
	borderStyle:'solid'
};


const PitcheonNavbar = () => (
	  <nav className="white"  style={navStyle}>
	    <div className="nav-wrapper white container">
	      <Link className="brand-logo  black-text left">pitcheon </Link>
	      <ul className="right hide-on-med-and-down">
	        <li><Link className="black-text" to="/portfolio"><Icon>lightbulb_outline</Icon></Link></li>
	        <li><Link className="black-text" to="/agenda"><Icon>volume_up</Icon></Link></li>
	        <li><Link className="black-text" to="/archive"><Icon>archive</Icon></Link></li>
	        <li><Link className="black-text" to="/notification"><Icon>notifications_active</Icon></Link></li>
	      	<li><Link className="black-text" to="/notification"><Icon>assessment</Icon></Link></li>
	      	<li><Link className="black-text" to="/login"><Icon>perm_identity</Icon></Link></li>
	      </ul>
	    </div>
	  </nav> 
);

export default PitcheonNavbar;