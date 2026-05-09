import type { NavigationLink } from '../types'
import styles from './Header.module.css'

interface HeaderProps {
  cityName: string
  navigation: NavigationLink[]
}

export function Header({ cityName, navigation }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.kicker}>Путеводитель по городу</p>
        <h1 className={styles.title}>{cityName}</h1>
      </div>

      <nav aria-label="Основная навигация">
        <ul className={styles.navList}>
          {navigation.map((link) => (
            <li key={link.href}>
              <a className={styles.navLink} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
