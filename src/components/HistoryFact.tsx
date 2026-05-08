import { useState } from 'react'
import type { HistoryFactData } from '../types'
import styles from './HistoryFact.module.css'

interface HistoryFactProps {
  fact: HistoryFactData
}

export function HistoryFact({ fact }: HistoryFactProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="history" className={styles.section}>
      <p className={styles.kicker}>Исторический факт</p>
      <h2 className={styles.title}>{fact.title}</h2>
      <p className={styles.summary}>{fact.summary}</p>

      <button
        type="button"
        className={styles.button}
        onClick={() => setIsExpanded((currentState) => !currentState)}
      >
        {isExpanded ? 'Скрыть подробности' : 'Показать подробности'}
      </button>

      {isExpanded && <p className={styles.details}>{fact.details}</p>}
    </section>
  )
}
