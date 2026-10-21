
import { useState } from 'react'

const quotes = [
  'There are only 10 kinds of people: those who read binary and those who don’t.',
  'In data we trust. Everyone else must bring evidence.',
  'A SQL query walks into a bar, sees two tables and asks: Can I join you?',
  'Behind every great insight is someone who cleaned the data first.',
  'git commit -m "finally cleaned the dataset (probably)"',
]

/** A tiny, slightly hidden star near the planet. Click or press Enter. */
export default function EasterEgg() {
  const [i, setI] = useState<number | null>(null)
  return (
    <div className="egg">
      <button
        className="egg-star"
        aria-label="A tiny star. Tap to see what it says."
        onClick={() => setI((p) => (p === null ? 0 : (p + 1) % quotes.length))}
      >
        ✦
      </button>
      {i !== null && (
        <div className="egg-bubble" role="status">
          <strong>Secret star:</strong> {quotes[i]}
          <button className="egg-close" onClick={() => setI(null)} aria-label="Close secret message">×</button>
        </div>
      )}
    </div>
  )
}
