import styles from './Footer.module.css'

interface FooterProps {
  cityName: string
  footerNote: string
}

export function Footer({ cityName, footerNote }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>{cityName}</p>
      <p className={styles.note}>{footerNote}</p>
    </footer>
  )
}
