import type { Monument, MonumentSort } from '../types'
import styles from './Monuments.module.css'

interface MonumentsProps {
  monuments: Monument[]
  sortMode: MonumentSort
  onSortChange: (sort: MonumentSort) => void
}

export function Monuments({
  monuments,
  sortMode,
  onSortChange,
}: MonumentsProps) {
  return (
    <section id="monuments" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Исторические точки</p>
          <h2 className={styles.title}>Памятники и архитектурные символы</h2>
        </div>

        <label className={styles.control}>
          <span>Сортировка</span>
          <select
            className={styles.select}
            value={sortMode}
            onChange={(event) => onSortChange(event.target.value as MonumentSort)}
          >
            <option value="recommended">Сначала рекомендуемые</option>
            <option value="alphabetical">По алфавиту</option>
          </select>
        </label>
      </div>

      <div className={styles.list}>
        {monuments.map((monument) => (
          <article key={monument.name} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{monument.name}</h3>
              <span className={styles.year}>{monument.year}</span>
            </div>
            <p className={styles.cardText}>{monument.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
