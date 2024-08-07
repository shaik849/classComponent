import React, { Component } from 'react'

const root = document.getElementById('app');

class ClassComp extends Component {
  render() {
    return (
      <div>ClassComp</div>
    )
  }
}

root.render(React.createElement(ClassComp));