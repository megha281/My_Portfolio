import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches === false) return

    let ringX = 0, ringY = 0, targetX = 0, targetY = 0
    let raf

    const move = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${targetX}px`
        dotRef.current.style.top = `${targetY}px`
      }
    }

    const animate = () => {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(animate)
    }

    const grow = () => ringRef.current?.classList.add('cursor-hover')
    const shrink = () => ringRef.current?.classList.remove('cursor-hover')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches === false) {
    return null
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{ willChange: 'left, top' }}
      />
      <style>{`
        .cursor-ring.cursor-hover {
          width: 52px;
          height: 52px;
          border-color: rgba(167, 139, 250, 0.9);
          background: rgba(139, 92, 246, 0.08);
        }
      `}</style>
    </>
  )
}
