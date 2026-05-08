import type { HeroStat } from '../types'
import styles from './Hero.module.css'

interface HeroProps {
  cityName: string
  tagline: string
  description: string
  bestSeason: string
  stats: HeroStat[]
}

export function Hero({
  cityName,
  tagline,
  description,
  bestSeason,
  stats,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Туристический гид по городу</p>
        <h2 className={styles.title}>{cityName}</h2>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#places">
            Выбрать маршрут
          </a>
          <a className={styles.secondaryAction} href="#events">
            Посмотреть события
          </a>
        </div>

        <p className={styles.season}>{bestSeason}</p>
      </div>

      <ul className={styles.stats}>
        {stats.map((stat) => (
          <li key={stat.label} className={styles.statCard}>
            <strong className={styles.statValue}>{stat.value}</strong>
            <span className={styles.statLabel}>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
