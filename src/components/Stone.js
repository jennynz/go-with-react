import React from 'react';

class Stone extends React.Component {
  if (this.props.isBlack) {
    let stoneClass = "Stone-black";
  } else {
    let stoneClass = "Stone-white"
  }
  render() {
    return (
      <div className=`Stone ${stoneClass}`><div>
    );
  }
}

export default Stone;
