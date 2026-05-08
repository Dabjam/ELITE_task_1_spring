import type { Highlight } from '../types'
import styles from './Information.module.css'

interface InformationProps {
  cityName: string
  description: string
  highlights: Highlight[]
}

export function Information({
  cityName,
  description,
  highlights,
}: InformationProps) {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.kicker}>О городе</p>
        <h2 className={styles.title}>Почему туристы выбирают {cityName}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.grid}>
        {highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
