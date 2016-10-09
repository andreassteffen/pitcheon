import React from 'react';
import {observer} from 'mobx-react';


export default observer(React.createClass({
  render() {
  	console.log(this.props.idea.title.title)
    return (
		<div className="card pink darken-1">
            <div className="card-content white-text">
            	<span className="new badge" data-badge-caption="">{this.props.idea.customer.customer}</span>
              <span className="card-title">{this.props.idea.title.title}</span>
              <p>{this.props.idea.description.description}</p>
            </div>
            <div className="card-action">
              <span className="socialinfo like"><span className="white-text">0</span><i className="material-icons white-text tiny">thumb_up</i></span>
              <span className="socialinfo comment"><a href="#modal-add-comment" className="modal-trigger-add-comment"><span className="white-text">0</span><i className="material-icons white-text tiny">forum</i></a></span>
              <span className="socialinfo"><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Andreas Steffen<br>Daniel Freitag" data-tooltip-id="23d95f01-44d6-d9f7-b094-266f310966d2"><span className="white-text">1</span><i className="material-icons white-text tiny">face</i></a></span>
              <div className="right">
                <span className="socialinfo pitch"><i className="material-icons white-text tiny">volume_up</i></span>
                <span className="editidea"><i className="material-icons white-text tiny">mode_edit</i></span>
              </div>
            </div>
          </div>

  )
  },
  propTypes: {
	idea: React.PropTypes.object.isRequired,
	}
}));
