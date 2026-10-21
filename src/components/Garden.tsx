
import { lazy, useEffect, useState } from 'react'
import Defer from './Defer'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])

  return matches
}

const useIsMobile = () => useMediaQuery('(max-width: 768px)')
const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')

const GardenScene = lazy(() => import('./GardenScene'))

const stations = [
  {
    name: 'The Analytics Blossom',
    blurb: 'Where raw data blooms into meaningful insights, visualizations and smarter business decisions.',
    skills: ['Python', 'SQL', 'Power BI', 'Advanced Excel', 'Tableau'],
  },
  {
    name: 'The Intelligence Portal',
    blurb: 'A curious space where algorithms uncover patterns, predict outcomes and detect anomalies.',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Classification & Regression', 'Anomaly Detection'],
  },
  {
    name: 'The Data Explorer’s Garden',
    blurb: 'Exploring the tools and technologies behind data preparation, transformation and large-scale analytics.',
    skills: ['Apache Spark', 'Apache Kafka', 'Pandas', 'ETL Pipelines', 'PostgreSQL'],
  },
]

export default function Garden() {
  const [active, setActive] = useState<number | null>(null)
  const still = useReducedMotion()
  const mobile = useIsMobile()
  const s = active === null ? null : stations[active]
  return (
    <section id="garden" className="section garden" aria-labelledby="garden-title">
      <div className="section-head">
        <h2 id="garden-title">The Giant Flower Garden</h2>
        <p>Every flower is a family of skills. Tap or click one to make it bloom.</p>
      </div>
      <div className="garden-stage">
        <Defer label="Planting the garden…">
          <GardenScene active={active} onSelect={setActive} still={still} mobile={mobile} />
        </Defer>
      </div>
      <div className="garden-tabs" role="group" aria-label="Skill flowers">
        {stations.map((st, i) => (
          <button key={st.name} className={'tab' + (active === i ? ' on' : '')} aria-pressed={active === i} onClick={() => setActive(active === i ? null : i)}>
            {st.name}
          </button>
        ))}
      </div>
      <div className="garden-panel" aria-live="polite">
        {s ? (
          <>
            <h3>{s.name}</h3>
            <p>{s.blurb}</p>
            <ul className="chips">
              {s.skills.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </>
        ) : (
          <p className="muted">Pick a flower to discover its technologies.</p>
        )}
      </div>
    </section>
  )
}
