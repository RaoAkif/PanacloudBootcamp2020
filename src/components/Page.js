import React from 'react'
import { Spring, useSpring, animated } from 'react-spring/renderprops';

export const page = () => {
  return (
    <div>
      const props = useSpring({
        from: { opacity: 0 },
        to: {opacity: 1},
      });
      return <animated.h1 style={props}>hello</animated.h1>;
    </div>
  )
}


