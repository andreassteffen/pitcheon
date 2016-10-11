import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal, Icon, Input, Row} from 'react-materialize';
import $ from 'jquery';
import {observer} from 'mobx-react';
import ideaStore from '../stores/IdeaStore';
import Idea from './Idea';

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



export default observer(React.createClass({
  getIdeasForLane(){
    return ideaStore.ideas.filter(idea => {
      return idea.status.get() === this.props.title
    });
  },
  submitIdea() {
    var title = ReactDOM.findDOMNode(this.refs.newtitle).value.trim();
    var description = ReactDOM.findDOMNode(this.refs.newdescription).value.trim();
    var customer = $('#newcustomer')[0].value;
    var status = 'ideate';
    ideaStore.addIdea(title, description, customer,status,);

    var title = ReactDOM.findDOMNode(this.refs.newtitle).value = '';
    var description = ReactDOM.findDOMNode(this.refs.newdescription).value = '';
    var customer = $('#newcustomer')[0].value = 'cipl';
    this.forceUpdate();
  },
  render() {
  	let lanebutton;
  	if (this.props.title === 'ideate') {
  		lanebutton = (
  			<Modal id='ideamodal'
    				header='submit an idea'
    				
    				trigger={
      				<a className="right black-text bold-text addidea waves-effect waves-light">+</a>
    				}
    				actions={
    					<div>
    						<ul>
    						<li><Button onClick={this.submitIdea} modal="close" flat={true} waves='light'>ok</Button></li>
    						<li><Button flat={true} modal="close" waves='light'>cancel</Button></li>
    						</ul>
      				</div>

    				}
    				>      
      <Row>
        <div className="input-field col m12">
          <input ref="newtitle" placeholder="" type="text" className="validate" />
          <label>idea</label>
        </div>
      <div className="input-field col s12">
          <textarea ref="newdescription" className="materialize-textarea" ></textarea>
          <label>description</label>
        </div>

  	</Row>
    <Row>
      <Input id="newcustomer" ref="newcustomer" s={12} type='select' label="customer">
        <option value='cipl'>CIPL</option>
        <option value='os'>ER OS</option>
        <option value='adc'>ER ADC/TTC</option>
        <option value='io'>ER IO</option>
        <option value='heart'>ER Heart</option>
        <option value='lung'>ER Lung</option>
        <option value='kidney'>ER Kidney</option>
        <option value='ac'>ER Acute Care</option>
        <option value='gt'>ER GT</option>
      </Input>
    </Row>    

  	</Modal>
  		
  			)
  	} else {
  		lanebutton = '';
  	}
  	return(
  	   	<div>
          <div className="lane-header" style={laneStyle} >{this.props.title}
  			   {lanebutton}
  		    </div>
          <div>

                  <ul className="idea-list">
        {this.getIdeasForLane().map(idea =>
          (<Idea
            key={idea.id}
            idea={idea}

          />)
        )}
      </ul>
          </div>
        </div>
  	)
  }
}));
