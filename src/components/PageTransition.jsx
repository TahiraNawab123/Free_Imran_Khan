import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function PageTransition({ children }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionState, setTransitionState] = useState('enter')

  useEffect(() => {
    // Start exit animation
    setTransitionState('exit')
    
    // Wait for exit animation to complete
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setTransitionState('enter')
    }, 300)

    return () => clearTimeout(timer)
  }, [location.pathname, children])

  return (
    <div 
      className={`transition-all duration-300 ${
        transitionState === 'enter' 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      {displayChildren}
    </div>
  )
}

export default PageTransition

