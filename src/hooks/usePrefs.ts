
import { useEffect, useState } from 'react'

export function useIsMobile() {
  const [mobile, setMobile] = useState(() =>
    window.matchMedia('(max-width: 767px)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')

    const update = () => setMobile(mq.matches)

    mq.addEventListener('change', update)

    return () => mq.removeEventListener('change', update)
  }, [])

  return mobile
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    const update = () => setReduced(mq.matches)

    mq.addEventListener('change', update)

    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}
