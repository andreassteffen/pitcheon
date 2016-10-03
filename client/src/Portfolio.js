import React from 'react';
import {Col, Row} from 'react-materialize';

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

const Portfolio = () => (
      <div className="row">
        <div className="col s12 m4">
            <div className="lane-header" style={laneStyle} >ideate
              <a className="right black-text bold-text waves-effect waves-light">+</a>
            </div>
        </div>

        <div className="col s12 m4">
            <div class="lane-header" style={laneStyle}>refine</div>
        </div>

        <div className="col s12 m4">
            <div className="lane-header" style={laneStyle}>act</div>
        </div>
        
      </div>
);

export default Portfolio;