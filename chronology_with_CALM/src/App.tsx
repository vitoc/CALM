import activitiesData from '../activities.json'
import './App.css'
import {
  getTimelineSummary,
  sortActivities,
  type Activity,
} from './timeline'

const activities = sortActivities(activitiesData as Activity[])

function formatType(type: string) {
  return type
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function formatDate(timestamp: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(timestamp))
}

function formatTime(timestamp: string) {
  return new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short',
  }).format(new Date(timestamp))
}

function App() {
  const now = new Date()
  const summary = getTimelineSummary(activities, now)
  const nextActivity = activities.find(
    ({ timestamp }) => new Date(timestamp) > now,
  )

  return (
    <main>
      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="#timeline" aria-label="Engagement timeline">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5v14" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </span>
            <span>Chronology</span>
          </a>
          <p className="eyebrow">Engagement record</p>
        </header>

        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="section-label">
              <span aria-hidden="true" />
              Journey overview
            </p>
            <h1 id="page-title">Engagement timeline</h1>
            <p className="hero-description">
              A clear view of each engagement milestone, from first signal to
              mature outcome.
            </p>
          </div>
          <div className="hero-ornament" aria-hidden="true">
            <span className="orbit orbit-large" />
            <span className="orbit orbit-small" />
            <span className="orbit-core" />
          </div>
        </section>

        <section className="summary-grid" aria-label="Timeline summary">
          <article className="summary-card">
            <span className="summary-label">Milestones</span>
            <strong>{summary.total.toString().padStart(2, '0')}</strong>
            <span className="summary-note">Across the full engagement</span>
          </article>
          <article className="summary-card summary-card-accent">
            <span className="summary-label">Progress</span>
            <strong>{summary.progress}%</strong>
            <span className="summary-note">
              {summary.completed} of {summary.total} completed
            </span>
          </article>
          <article className="summary-card">
            <span className="summary-label">Current state</span>
            <strong className="summary-state">
              {nextActivity ? 'In motion' : 'Complete'}
            </strong>
            <span className="summary-note">
              {nextActivity
                ? `Next: ${nextActivity.activity}`
                : 'All milestones reached'}
            </span>
          </article>
        </section>

        <section
          className="timeline-section"
          id="timeline"
          aria-labelledby="timeline-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">
                <span aria-hidden="true" />
                Full chronology
              </p>
              <h2 id="timeline-title">The path, milestone by milestone</h2>
            </div>
            <p>
              {formatDate(activities[0].timestamp)} to{' '}
              {formatDate(activities[activities.length - 1].timestamp)}
            </p>
          </div>

          <ol className="timeline-list">
            {activities.map((activity, index) => {
              const isCompleted = new Date(activity.timestamp) <= now

              return (
                <li
                  className={`timeline-item ${
                    isCompleted ? 'is-completed' : 'is-upcoming'
                  }`}
                  key={`${activity.timestamp}-${activity.activity}`}
                >
                  <div className="timeline-rail" aria-hidden="true">
                    <span className="timeline-dot">
                      {isCompleted ? (
                        <svg viewBox="0 0 24 24">
                          <path d="m7 12 3 3 7-7" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </span>
                  </div>

                  <article className="activity-card">
                    <div className="activity-meta">
                      <span className="type-badge">
                        {formatType(activity.type)}
                      </span>
                      <span className="status">
                        <span aria-hidden="true" />
                        {isCompleted ? 'Completed' : 'Upcoming'}
                      </span>
                    </div>
                    <h3>{activity.activity}</h3>
                    <div className="date-row">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                      </svg>
                      <time dateTime={activity.timestamp}>
                        <span>{formatDate(activity.timestamp)}</span>
                        <span>{formatTime(activity.timestamp)}</span>
                      </time>
                    </div>
                    <span className="sequence">
                      Milestone {String(index + 1).padStart(2, '0')}
                    </span>
                  </article>
                </li>
              )
            })}
          </ol>
        </section>

        <footer>
          <p>Engagement chronology</p>
          <p>Times shown in UTC</p>
        </footer>
      </div>
    </main>
  )
}

export default App
