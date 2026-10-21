
import { tools } from '../data'

export default function Marquee() {
  return (
    <div className="logos">
      <span className="mono">Tools & Technologies I Work With</span>
      <div className="track">
        {[...tools, ...tools].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
