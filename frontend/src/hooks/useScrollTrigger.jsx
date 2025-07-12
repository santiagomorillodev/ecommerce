import { useEffect, useState } from 'react'

export function useScrollTrigger(ref, threshold = 0.4) {
  const [isTriggered, setIsTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const triggerPoint = window.innerHeight * threshold

      if (rect.top < triggerPoint && rect.bottom > 0) {
        setIsTriggered(true)
      } else {
        setIsTriggered(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, threshold])

  return isTriggered
}