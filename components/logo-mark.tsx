import { LOGO } from '@/lib/logo-path'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${LOGO.w} ${LOGO.h}`}
      aria-hidden="true"
      className={`shrink-0 ${className ?? ''}`}
    >
      <circle cx={LOGO.circle.cx} cy={LOGO.circle.cy} r={LOGO.circle.r} className="fill-clay-light" />
      <path d={LOGO.d} fillRule="evenodd" className="fill-charcoal" />
    </svg>
  )
}
