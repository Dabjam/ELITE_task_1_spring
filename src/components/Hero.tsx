import type { HeroStat } from '../types'
import styles from './Hero.module.css'

interface HeroProps {
  cityName: string
  tagline: string
  description: string
  bestSeason: string
  stats: HeroStat[]
  imageSrc: string
  imageAlt: string
}

export function Hero({
  cityName,
  tagline,
  description,
  bestSeason,
  stats,
  imageSrc,
  imageAlt,
}: HeroProps) {
  const accentTags = ['Ангара', 'Купеческий центр', 'Байкал рядом']

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.tags} aria-label="Особенности города">
          {accentTags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
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

      <div className={styles.visual}>
        <img className={styles.image} src={imageSrc} alt={imageAlt} />
        <div className={styles.imageOverlay} />

        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.label} className={styles.statCard}>
              <strong className={styles.statValue}>{stat.value}</strong>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
