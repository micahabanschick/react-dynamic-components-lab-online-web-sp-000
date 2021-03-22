import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {/* your conditional code here! */
          this.props.opacity < .2 ? null : <ColorBox opacity={(this.props.opacity * 10 - 1) / 10} />
        }
      </div>
    )
  }

}

