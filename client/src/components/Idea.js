import React from 'react';
import {observer} from 'mobx-react';
import classnames from 'classnames';

var headerStyle = {
	lineHeight: 1,
 	fontSize: "16px",
 	fontWeight: "bold"
};
var badgeStyle = {
	marginTop: "-17px",
	marginRight: "-17px"
};

var socialInfoStyle = {
    paddingLeft: "5px",
    paddingRight: "5px",
    cursor: "pointer"
}

export default observer(React.createClass({
  likeIdea: function() {
  	console.log('crazy');
  	this.props.idea.addUserLike('ggayq'); 
  },

  togglePitchIdea: function(){
  	this.props.idea.togglePitch();
  	this.forceUpdate()
  },
  render: function() {
  	let colorClass;

  	switch (this.props.idea.status.value){
  		case "ideate":
  			colorClass = 'card pink darken-1';
  			break;
  		case "refine":
  			colorClass = 'card blue lighten-1';
  			break;
  		case "act":
  			colorClass = 'card green';
  			break;
  		default:
  			colorClass = 'card white';
  			break;
  	}
	let pitchClasses = classnames('material-icons tiny', {'yellow-text': this.props.idea.pitch.value,'white-text': !this.props.idea.pitch.value});
    return (
		<div className={colorClass}>
            <div className="card-content white-text">
              <div className="chip right" style = {badgeStyle}>{this.props.idea.customer.value}</div>
              <span className="card-title" style={headerStyle}>{this.props.idea.title.value}</span>
              <p>{this.props.idea.description.value}</p>
            </div>
            <div className="card-action">
              <span style={socialInfoStyle}><span className="white-text">{this.props.idea.likes.length}</span><i onClick={this.likeIdea} className="material-icons white-text tiny">thumb_up</i></span>
              <span style={socialInfoStyle}><span className="white-text">0</span><i className="material-icons white-text tiny">forum</i></span>
              <span style={socialInfoStyle}><span className="white-text">0</span><i className="material-icons white-text tiny">face</i></span>
              <div className="right">
                <span style={socialInfoStyle}><i onClick={this.togglePitchIdea} className={pitchClasses} >volume_up</i>{this.props.idea.pitch.get}</span>
                <span style={socialInfoStyle}><i className="material-icons white-text tiny">mode_edit</i></span>
              </div>
            </div>
          </div>

  	)
  },
  propTypes: {
		idea: React.PropTypes.object.isRequired,
	}
}));
