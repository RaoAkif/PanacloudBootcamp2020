import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops'

export class Component2 extends Component {
  render() {
    return (
      <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 1000}}
    >
      {(props) => (
        <div style={props}>
          <div style={c2Style}>
            <h1>Component 2</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              possimus id, deserunt tempora harum excepturi minima quae, numquam
              placeat tempore ipsa iure exercitationem ut dolorum atque! Rerum
              dolores commodi aspernatur?
            </p>
          </div>
        </div>
      )}
    </Spring>
    )
  }
}

export default Component2

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem',
  height: 300
};
