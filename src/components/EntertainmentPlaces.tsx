import type { Place, PlaceCategory } from '../types'
import styles from './EntertainmentPlaces.module.css'

interface EntertainmentPlacesProps {
  places: Place[]
  activeCategory: PlaceCategory
  onCategoryChange: (category: PlaceCategory) => void
}

const categoryLabels: Record<PlaceCategory, string> = {
  all: 'Все места',
  family: 'Семейные',
  food: 'Гастрономия',
  nature: 'Природа',
}

export function EntertainmentPlaces({
  places,
  activeCategory,
  onCategoryChange,
}: EntertainmentPlacesProps) {
  return (
    <section id="places" className={styles.section}>
      <div className={styles.heading}>
        <div>
          <p className={styles.kicker}>Куда сходить</p>
          <h2 className={styles.title}>Развлечения и прогулочные места</h2>
        </div>

        <div className={styles.filters} aria-label="Фильтр мест">
          {(Object.keys(categoryLabels) as PlaceCategory[]).map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.filterButtonActive : ''
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {places.map((place) => (
          <article key={place.title} className={styles.card}>
            <span className={styles.badge}>{categoryLabels[place.category]}</span>
            <h3 className={styles.cardTitle}>{place.title}</h3>
            <p className={styles.cardText}>{place.description}</p>
            <p className={styles.timing}>{place.timing}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
