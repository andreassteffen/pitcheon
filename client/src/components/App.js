import React from 'react';
import PitcheonNavbar from './PitcheonNavbar';
import Portfolio from './Portfolio';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

export default observer(React.createClass({
  render() {
    return (
      <div >
        <DevTools />
        <PitcheonNavbar />
          <div className="container">
            {this.props.children || <Portfolio />}
          </div>
      </div>

    )
  }
}));
