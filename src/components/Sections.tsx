
import creativeImg from '../assets/creative.jpg'

export function Why() {
  return (
    <section>
      <span className="mono rose">Why work with me</span>
      <h2 style={{ marginTop: 22 }}>
        You bring the challenge. <em>I find the insights.</em>
      </h2>
      <div className="why">
        <div className="wc glass">
          <span className="mono rose">Teams and organizations</span>
          <h3>
            For <em>decisions.</em>
          </h3>
          <p>A Data Analyst who transforms complex datasets into clear insights, actionable KPIs and interactive dashboards that support smarter business decisions.</p>
          <div className="pills">
            <span>SQL</span>
            <span>Power BI</span>
            <span>Python</span>
          </div>
          <a className="btn out" href="#contact">
            Hire me <span>→</span>
          </a>
        </div>
        <div className="wc glass">
          <span className="mono rose">Data-driven businesses</span>
          <h3>
            For <em>intelligence.</em>
          </h3>
          <p>From predictive modeling to anomaly detection, I develop analytical solutions that uncover patterns, identify risks and turn data into meaningful business value.</p>
          <div className="pills">
            <span>Machine Learning</span>
            <span>Scikit-learn</span>
            <span>Predictive Analytics</span>
          </div>
          <a className="btn out" href="#contact">
            Start a project <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}


export function Systems() {
  return (
    <section id="systems">
      <span className="mono rose">What I’ve built</span>
      <h2 style={{ marginTop: 22 }}>
        Beyond the <em>numbers.</em>
      </h2>
      <p style={{ color: 'var(--mute)' }}>The analytical thinking behind every insight.</p>
      <div className="sys">
        <div className="sc glass">
          <div>
            <span className="mono rose">SQL / Power BI / Excel</span>
            <h3>Analytics & Business Intelligence</h3>
            <p>Data exploration, KPI analysis and interactive dashboards that transform raw information into clear business insights.</p>
          </div>
          <b>Analytics</b>
        </div>
        <div className="sc glass">
          <div>
            <span className="mono rose">Python / Scikit-learn</span>
            <h3>Machine Learning</h3>
            <p>Classification, regression, clustering and anomaly detection models, from data preprocessing to training and evaluation.</p>
          </div>
          <b>AI & ML</b>
        </div>
        
        <div className="sc glass">
          <div>
            <span className="mono rose">
              Python / Pandas / SQL
            </span>
            <h3>Data Processing & Pipelines</h3>
            <p>
              Data cleaning, transformation, integration and ETL
              workflows to prepare reliable datasets for analytics
              and machine learning.
            </p>
          </div>
          <b>Data Preparation & ETL</b>
        </div>

      </div>
    </section>
  )
}
