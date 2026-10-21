
import { useState } from 'react'
import cardImg from '../assets/card.png'

export default function About() {
  const [on, setOn] = useState(false)
  return (
    <section className="about" id="about">
      <span className="mono rose">About Eya</span>
      <h2 style={{ marginTop: 22 }}>
        Turning data into <em>insights.</em>
      </h2>
      <div className="about3">
        <div>
          <h3>Hi, I’m Eya.</h3>
          <p>I’m a Data Analyst & Data Scientist with a background in Business Intelligence and Big Data Analytics. I specialize in transforming complex datasets into meaningful insights through analytics, visualization and machine learning.</p>
          <p>My experience includes financial fraud-risk analytics at EY, where I explored 50+ risk scenarios and developed unsupervised machine learning models.</p>
          <p>I enjoy connecting technical analysis with real business challenges, from preparing and exploring data to building predictive models and interactive dashboards that support better decisions.</p>
          <a className="btn out" href="https://github.com/eyaoueslati06">
            GitHub <span>↗</span>
          </a>
        </div>
        <div className="idwrap">
          <button className={'flip' + (on ? ' on' : '')} onClick={() => setOn((v) => !v)} aria-label="Flip the data scientist ID card">
            <div className="clip">
              <i></i>
            </div>
            <div className="in">
              <div className="face front">
                <div className="fhead">
                  <span className="mono">Data Scientist ID</span>
                  <span>✳</span>
                </div>
                <div className="fph">
                  <img src={cardImg} alt="Eya Oueslati" />
                  <div className="stick">
                    LET’S
                    <br />
                    EXPLORE
                  </div>
                </div>
                <div className="fbody">
                  <h3>Eya Oueslati</h3>
                  <p>Data Analyst & Data Scientist</p>
                </div>
                <div className="kv">
                  <span>Based in</span>
                  <b>Tunis</b>
                  <span>Stack</span>
                  <b>Python + SQL + BI</b>
                </div>
                <div className="code">
                  <div className="bar"></div>
                  <i>Eya.</i>
                </div>
                <div className="hint mono">Hover or tap to flip ↻</div>
              </div>
              <div className="face back">
                <span className="mono">The data behind the story</span>
                <div className="badge">
                  <b>✳</b>
                </div>
                <h3>Insights that matter.</h3>
                <ul>
                  <li>Data Analytics & Business Intelligence</li>
                  <li>Python, SQL & Power BI</li>
                  <li>Machine Learning & Predictive Modeling</li>
                  <li>Financial Risk & Anomaly Detection</li>
                  <li>Big Data Analytics & Visualization</li>
                </ul>
                <i className="sg">Eya.</i>
              </div>
            </div>
          </button>
          <span className="cap mono">A little curiosity. A lot of data.</span>
        </div>
        <div className="afacts">
          <div className="mono rose alabel">
            A little more about me
          </div>
          <div className="facts">
            <div>
              Based in<b>Tunis, Tunisia</b>
            </div>
            <div>
              Languages<b>Arabic, English, French</b>
            </div>
            <div>
              Focus<b>Data Analytics & Machine Learning</b>
            </div>
            <div>
              Looking for<b>Data Analyst & Junior Data Scientist roles</b>
            </div>
          </div>
          <span className="q">“Making sense of data and turning insights into meaningful decisions.”</span>
        </div>
      </div>
    </section>
  )
}
