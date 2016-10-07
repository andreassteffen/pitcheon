import React from 'react';
import PitcheonNavbar from './PitcheonNavbar';
import Portfolio from './Portfolio';

export default React.createClass({
  render() {
    return (
      <div >
        <PitcheonNavbar />
          <div className="container">
            {this.props.children || <Portfolio/>}
          </div>
      </div>

    )
  }
});
