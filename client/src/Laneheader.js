import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal, Icon, Input, Row} from 'react-materialize';

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
	let lanebutton;
	if (this.props.title === 'ideate') {
		lanebutton = (
			<Modal
  				header='submit an idea'
  				
  				trigger={
    				<a className="right black-text bold-text addidea waves-effect waves-light">+</a>
  				}
  				actions={
  					<div>
  						<ul>
  						<li><Button flat={true} waves='light'>ok</Button></li>
  						<li><Button flat={true} modal="close" waves='light'>cancel</Button></li>
  						</ul>
    				</div>

  				}
  				>      
    <Row>
    <Input placeholder="" m={12} label="title" />
	<Input type="textarea" label="description" m={12} length="400"/>
	</Row>
    <Row>
  <Input s={12} type='select' label="customer">
    <option value='1'>CIPL</option>
    <option value='2'>ER OS</option>
    <option value='3'>ER EADC/TTC</option>
    <option value='4'>ER IO</option>
    <option value='5'>ER Heart</option>
    <option value='6'>ER Lung</option>
    <option value='7'>ER Kidney</option>
    <option value='8'>ER Acute Care</option>
  </Input>
</Row>    

	</Modal>
		
			)
	} else {
		lanebutton = '';
	}
	return(
	   	<div className="lane-header" style={laneStyle} >{this.props.title}
			{lanebutton}
		</div>
	)
  }
});
