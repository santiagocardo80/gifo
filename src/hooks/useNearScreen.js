import { useEffect, useRef, useState } from 'react'

const useNearScreen = ({ distance = '100px' } = {}) => {
  const fromRef = useRef()
  const [isNearScreen, setIsNearScreen] = useState(false)

  useEffect(() => {
    let observer
    
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}

export default useNearScreen
