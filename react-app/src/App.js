import "./App.css";
import dustinHeadshot from "./assets/dustin-headshot.jpg";

function App() {
  return (
    <main className="site-shell">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">DO</div>
          <div>
            <strong>Dustin Ogan</strong>
            <span>QA Architecture & Reliability Consulting</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#demos">Demos</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Azure • Load Testing • Diagnostics • SRE Readiness</p>

          <h1>
            Turn performance testing into reliability.
          </h1>

          <p className="hero-subtitle">
            I help teams design practical load tests, interpret Azure diagnostics, and
  translate system behavior into clear engineering recommendations.
         </p>

          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Discuss A Reliability Assessment
            </a>
            <a className="button secondary" href="#demos">
              View Demo Focus Areas
            </a>
          </div>
        </div>

        <div className="hero-card">
<div className="hero-photo-panel">
  <img
    src={dustinHeadshot}
    alt="Dustin Ogan"
    className="hero-photo"
  />

  <div className="hero-photo-caption">
    <span>Independent Consultant</span>
    <strong>Dustin Ogan</strong>
    <p>
      Senior QA Architect focused on performance testing, Azure diagnostics,
      and reliability-focused engineering practices.
    </p>
  </div>
</div>

</div>
      </section>

      <section className="section" id="services">
        <div className="section-header">
          <p className="eyebrow">What I Help With</p>
          <h2>Reliability-focused QA that connects testing to production signals.</h2>
        </div>

        <div className="card-grid">
          <article className="info-card">
            <div className="icon">⚡</div>
            <h3>Performance Test Strategy</h3>
            <p>
              Build right-sized load, stress, benchmark, and smoke strategies
              that match system maturity and business risk.
            </p>
          </article>

          <article className="info-card">
            <div className="icon">📈</div>
            <h3>Azure Load Testing</h3>
            <p>
              Design controlled Azure Load Testing scenarios that expose bottlenecks
              without creating runaway cloud spend.
            </p>
          </article>

          <article className="info-card">
            <div className="icon">🔎</div>
            <h3>Diagnostics & Observability</h3>
            <p>
              Connect test results to Application Insights, logs, traces, metrics,
              and dependency behavior.
            </p>
          </article>

          <article className="info-card">
            <div className="icon">🧭</div>
            <h3>SRE Readiness</h3>
            <p>
              Help teams move from reactive QA reports to reliability indicators,
              service-level thinking, and operational feedback loops.
            </p>
          </article>
        </div>
      </section>

      <section className="section split-section" id="demos">
        <div>
          <p className="eyebrow">Proof-of-Concept Demos</p>
          <h2>Designed to show practical value, not just tooling.</h2>
          <p className="section-copy">
            These demos are built to show how performance testing and diagnostics
            can become part of a reliability engineering workflow.
          </p>
        </div>

        <div className="demo-list">
          <div className="demo-item">
            <span>01</span>
            <div>
              <h3>Azure Load Testing Baseline</h3>
              <p>Establish baseline throughput, latency, and error behavior.</p>
            </div>
          </div>

          <div className="demo-item">
            <span>02</span>
            <div>
              <h3>Diagnostics Investigation</h3>
              <p>Trace slow endpoints, dependency bottlenecks, and failure patterns.</p>
            </div>
          </div>

          <div className="demo-item">
            <span>03</span>
            <div>
              <h3>Cost-Bounded Test Design</h3>
              <p>Run meaningful tests with guardrails around load and telemetry ingestion.</p>
            </div>
          </div>

          <div className="demo-item">
            <span>04</span>
            <div>
              <h3>Reliability Findings Report</h3>
              <p>Translate test data into recommendations developers and leaders can use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section proof-band">
        <div>
          <p className="eyebrow">Consulting Angle</p>
          <h2>From “the test passed” to “the system is ready.”</h2>
        </div>

        <div className="proof-grid">
          <div>
            <strong>Test Evidence</strong>
            <span>load profiles, scripts, baselines</span>
          </div>
          <div>
            <strong>Diagnostic Evidence</strong>
            <span>logs, metrics, traces, dependencies</span>
          </div>
          <div>
            <strong>Engineering Decision</strong>
            <span>risk, recommendation, next action</span>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Lead Capture</p>
          <h2>Let’s talk about your reliability or performance testing goals.</h2>
          <p>
            This form is ready for visual layout now. Later, you can wire it to
            an Azure Function, email service, CRM, or storage table.
          </p>
        </div>

        <form className="lead-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <label>
            Company
            <input type="text" name="company" placeholder="Company name" />
          </label>

          <label>
            What are you trying to improve?
            <textarea
              name="message"
              rows="5"
              placeholder="Load testing, Azure diagnostics, reliability strategy, SRE readiness..."
            />
          </label>

          <button type="submit">Submit Inquiry</button>
        </form>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Dustin Ogan. QA Architecture & Reliability Consulting.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}

export default App;