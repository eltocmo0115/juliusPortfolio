import { useEffect, useRef, useState } from 'react'
import characterImg from '@/assets/character-hd.jpg'

/**
 * CharacterWatcher
 *
 * Single HD image (1024×1024, dark navy bg matching sidebar).
 * Container is SQUARE so object-fit:contain fills it exactly
 * — zero letterboxing, SVG and image coordinates align 1:1.
 *
 * Eye positions were re-measured directly from the source pixels:
 *   Left eye  → x≈477px, y≈212px → 46.6%, 20.7%
 *   Right eye → x≈545px, y≈212px → 53.2%, 20.7%
 *
 * @param {{ activeId: string, message: string }} props
 */

const EYE_L = { x: 46.6, y: 20.7 }
const EYE_R = { x: 53.2, y: 20.7 }

// Socket = the clip region a pupil is allowed to render in.
const CLIP_RX = 1.5
const CLIP_RY = 0.6

const IRIS_RX = 1.15
const IRIS_RY = 0.45
const PUPIL_RX = 0.6
const PUPIL_RY = 0.24

const MAX_PX = 0.6
const MAX_PY = 0.25

function CharacterWatcher({ activeId, message }) {
  const ref = useRef(null)
  const [pupil, setPupil] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()

      // Midpoint between both eyes in screen space
      const eyeSX = rect.left + rect.width * 0.499  // halfway between 46.6 & 53.2
      const eyeSY = rect.top + rect.height * 0.207  // 20.7%

      const dx = e.clientX - eyeSX
      const dy = e.clientY - eyeSY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 6) {
        setPupil({ x: 0, y: 0 })
        return
      }

      const t = Math.min(dist / 200, 1)
      setPupil({ x: (dx / dist) * MAX_PX * t, y: (dy / dist) * MAX_PY * t })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const { x: px, y: py } = pupil

  return (
    <div
      ref={ref}
      className="character-watcher"
      aria-hidden="true"
      title="He's watching you 👀"
    >
      {/* Speech bubble — key={activeId} causes React to remount the element
          on every section change, which automatically replays the pop-in CSS
          animation without any extra JS animation logic. */}
      {message && (
        <div key={activeId} className="character-bubble">
          {message}
          <span className="character-bubble__tail" />
        </div>
      )}

      {/* Body — square container means image fills without letterbox */}
      <img
        src={characterImg}
        className="character-body-img"
        alt=""
        draggable={false}
      />

      {/* SVG pupil overlay — only tiny iris dots, no white ellipses */}
      <svg
        className="character-eye-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="cw-clip-l">
            <ellipse cx={EYE_L.x} cy={EYE_L.y} rx={CLIP_RX} ry={CLIP_RY} />
          </clipPath>
          <clipPath id="cw-clip-r">
            <ellipse cx={EYE_R.x} cy={EYE_R.y} rx={CLIP_RX} ry={CLIP_RY} />
          </clipPath>
        </defs>

        {/* Left iris */}
        <g clipPath="url(#cw-clip-l)">
          <ellipse cx={EYE_L.x + px} cy={EYE_L.y + py} rx={IRIS_RX} ry={IRIS_RY} fill="#2c1205" opacity="0.92" />
          <ellipse cx={EYE_L.x + px} cy={EYE_L.y + py} rx={PUPIL_RX} ry={PUPIL_RY} fill="#080301" />
          <circle cx={EYE_L.x + px + 0.35} cy={EYE_L.y + py - 0.18} r="0.16" fill="white" opacity="0.8" />
        </g>

        {/* Right iris */}
        <g clipPath="url(#cw-clip-r)">
          <ellipse cx={EYE_R.x + px} cy={EYE_R.y + py} rx={IRIS_RX} ry={IRIS_RY} fill="#2c1205" opacity="0.92" />
          <ellipse cx={EYE_R.x + px} cy={EYE_R.y + py} rx={PUPIL_RX} ry={PUPIL_RY} fill="#080301" />
          <circle cx={EYE_R.x + px + 0.35} cy={EYE_R.y + py - 0.18} r="0.16" fill="white" opacity="0.8" />
        </g>
      </svg>
    </div>
  )
}

export default CharacterWatcher

