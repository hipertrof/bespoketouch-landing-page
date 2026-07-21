// Stylized front-view body silhouette with intake zone markers.
// Purely presentational — a tasteful mockup of the kiosk body map.

type Marker = {
  cx: number
  cy: number
  state: 'priority' | 'blocked'
}

const markers: Marker[] = [
  { cx: 100, cy: 96, state: 'priority' }, // nape / shoulders
  { cx: 72, cy: 104, state: 'priority' }, // left shoulder
  { cx: 128, cy: 104, state: 'priority' }, // right shoulder
  { cx: 100, cy: 150, state: 'blocked' }, // lower back / abdomen
]

export function BodyMap() {
  return (
    <svg
      viewBox="0 0 200 320"
      role="img"
      aria-label="Sylwetka ciała z zaznaczonymi strefami: kark i barki jako priorytet, brzuch jako strefa wykluczona"
      className="h-full w-full"
    >
      {/* Figure */}
      <g fill="var(--color-sand)" stroke="var(--color-sand-dark)" strokeWidth="1.5">
        {/* head */}
        <ellipse cx="100" cy="42" rx="20" ry="24" />
        {/* neck */}
        <rect x="92" y="62" width="16" height="14" rx="6" />
        {/* torso */}
        <path d="M70 82 Q100 74 130 82 L124 172 Q100 182 76 172 Z" />
        {/* left arm */}
        <path d="M70 86 Q54 92 50 132 Q49 156 56 176 L64 174 Q60 150 62 130 Q66 100 74 94 Z" />
        {/* right arm */}
        <path d="M130 86 Q146 92 150 132 Q151 156 144 176 L136 174 Q140 150 138 130 Q134 100 126 94 Z" />
        {/* left leg */}
        <path d="M78 172 Q88 178 98 174 L96 300 Q90 306 82 300 Z" />
        {/* right leg */}
        <path d="M122 172 Q112 178 102 174 L104 300 Q110 306 118 300 Z" />
      </g>

      {/* Zone markers */}
      {markers.map((m, i) => {
        const color =
          m.state === 'priority' ? 'var(--color-clay-dark)' : 'var(--color-rose)'
        return (
          <g key={i}>
            <circle
              cx={m.cx}
              cy={m.cy}
              r="13"
              fill={color}
              opacity="0.16"
            />
            <circle cx={m.cx} cy={m.cy} r="6" fill={color} />
            {m.state === 'blocked' && (
              <line
                x1={m.cx - 3}
                y1={m.cy - 3}
                x2={m.cx + 3}
                y2={m.cy + 3}
                stroke="var(--color-cream)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}
