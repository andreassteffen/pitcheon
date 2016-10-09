import React from 'react';
import {Col, Row} from 'react-materialize';
import Laneheader from './Laneheader';

var laneStyle = {
	paddingTop:'1em',
 	borderTop:0,
 	borderLeft:0,
 	borderRight:0,
 	borderBottom:2,
 	borderColor:'black',
 	borderStyle:'solid',
 	fontSize:'1.5em'
};

export default React.createClass({
  render() {
  	return(
		<div className="row">
			<div className="col s12 m4">
				<Laneheader title="ideate" />
			</div>
			<div className="col s12 m4">
				<Laneheader title="refine" />
			</div>
			<div className="col s12 m4">
				<Laneheader title="act" />
			</div>
		</div>
	)
	}
});
