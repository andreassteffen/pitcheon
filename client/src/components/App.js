import React from 'react';
import PitcheonNavbar from './PitcheonNavbar';
import Portfolio from './Portfolio';
import {observer} from 'mobx-react';

export default observer(React.createClass({
  render() {
    return (
      <div >
        <PitcheonNavbar />
          <div className="container">
            {this.props.children || <Portfolio />}
          </div>
      </div>

    )
  }
}));
