import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export const Toggle = () => {
  const [isToggle, setToggle] = useState(false)
  const fade = useSpring({
    opacity: isToggle ? 1 : 0,
    // fontSize: isToggle ? '2rem' : '20rem',
    color: isToggle ? 'blue' : 'seagreen',
    transform: isToggle ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)'
  })
  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggle(!isToggle) }>Toggle</button>
    </div>
  )
}

