
import heroImg from '../assets/hero.webp'

export default function Hero() {
  return (
    <section className="hero">
      <div className="row mono">
        <span>Welcome to my world</span>
        <span>Based in Tunis →</span>
      </div>
      <div className="tagwrap">
        <p className="tag">Turning data into insights.</p>
        <a className="lets" href="#contact">
          Let’s talk →
        </a>
      </div>
      <div className="stage">
        <div className="outline" aria-hidden="true">
          EYA
        </div>
        <img className="portrait" src={heroImg} alt="Eya Oueslati" width={820} height={1214} />
       
      <div className="stat glass availability-card">
        <div className="availability-top">
          <span className="availability-status">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h3>Open to Work</h3>
          <p>Data Analyst · Data Scientist</p>
        </div>

        <div className="availability-bottom">
          <span className="availability-icon">◎</span>

          <div>
            <strong>Remote · Hybrid · On-site</strong>
            <p>Open to new opportunities</p>
          </div>

          <span className="availability-arrow">↗</span>
        </div>
      </div>

        <span className="mono rose">Data into decisions</span>
      </div>
      <div className="copy">
        <span className="mono rose cl">Data into decisions</span>
        <h1>
          Data Analyst & Data Scientist turning <em>complex data into clarity.</em>
        </h1>
        <p>Python, SQL, Power BI and machine learning. From business intelligence to predictive analytics, I transform data into meaningful insights and actionable solutions.</p>
        <a className="btn" href="#work">
          Explore my work <span>⟶</span>
        </a>
        <div className="foot mono">
          <span>Eya Oueslati / Portfolio</span>
          <span>Scroll to discover ↓</span>
        </div>
      </div>
    </section>
  )
}
