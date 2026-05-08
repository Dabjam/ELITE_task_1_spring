import type { EventItem } from '../types'
import styles from './EventsSection.module.css'

interface EventsSectionProps {
  events: EventItem[]
  showAllEvents: boolean
  onToggleShowAll: () => void
}

export function EventsSection({
  events,
  showAllEvents,
  onToggleShowAll,
}: EventsSectionProps) {
  return (
    <section id="events" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>События</p>
          <h2 className={styles.title}>Что можно добавить в маршрут</h2>
        </div>

        <button type="button" className={styles.toggle} onClick={onToggleShowAll}>
          {showAllEvents ? 'Показать меньше' : 'Показать все события'}
        </button>
      </div>

      <div className={styles.grid}>
        {events.map((event) => (
          <article key={event.title} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <span
                className={`${styles.priceBadge} ${
                  event.isFree ? styles.priceBadgeFree : styles.priceBadgePaid
                }`}
              >
                {event.isFree ? 'Бесплатно' : 'Платно'}
              </span>
            </div>
            <p className={styles.period}>{event.period}</p>
            <p className={styles.cardText}>{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
