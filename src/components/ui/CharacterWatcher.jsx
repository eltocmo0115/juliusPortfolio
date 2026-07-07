import { useEffect, useRef, useState } from 'react'
import characterImg from '@/assets/character-hd.jpg'

/**
 * CharacterWatcher
 *
 * Single HD image (1024×1024, dark navy bg matching sidebar).
 * Container is SQUARE (160×160) so object-fit:contain fills it exactly
 * — zero letterboxing, SVG and image coordinates align 1:1.
 *
 * Eye positions were re-measured directly from the source pixels (scanned
 * character-hd.jpg for the two small bright sclera blobs in the head
 * region — each one is ~35×14px). Real centers:
 *   Left eye  → x≈477px, y≈212px → 46.6%, 20.7%
 *   Right eye → x≈545px, y≈212px → 53.2%, 20.7%
 *
 * The old constants (44.4/56.2%, 26.9%) were spaced too far apart
 * horizontally and ~6% too low vertically, which put the animated pupils
 * down around the nose/mouth instead of on the eyes — that's the
 * "eyes outside the face" bug. The socket/iris/pupil sizes below are
 * also new: the real eyes are small and flat (~2.4:1), so they're drawn
 * as ellipses sized to actually fit inside them, instead of the old
 * circles that were bigger than the eyes themselves.
 */

const EYE_L = { x: 46.6, y: 20.7 }
const EYE_R = { x: 53.2, y: 20.7 }

// Socket = the clip region a pupil is allowed to render in. Kept a hair
// smaller than the measured eye-white so the iris/pupil can never paint
// outside the actual eye shape, no matter how far the cursor is.
const CLIP_RX = 1.5
const CLIP_RY = 0.6

const IRIS_RX = 1.15
const IRIS_RY = 0.45
const PUPIL_RX = 0.6
const PUPIL_RY = 0.24

const MAX_PX = 0.6
const MAX_PY = 0.25

function CharacterWatcher() {
  const ref = useRef(null)
  const [pupil, setPupil] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()

      // Midpoint between both eyes in screen space (container is square 160×160)
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
