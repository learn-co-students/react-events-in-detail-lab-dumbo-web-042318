import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

const handleReceiveCoordinates = (x, y) => {
}

const handleDelayedClick = () => {
}

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={handleReceiveCoordinates} />
    <DelayedButton onDelayedClick={handleDelayedClick} delay='500' />
  </div>,
  document.getElementById('global')
);
