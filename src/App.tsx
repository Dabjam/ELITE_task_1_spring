import { useMemo, useState } from 'react'
import styles from './App.module.css'
import { EntertainmentPlaces } from './components/EntertainmentPlaces'
import { EventsSection } from './components/EventsSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HistoryFact } from './components/HistoryFact'
import { Information } from './components/Information'
import { Monuments } from './components/Monuments'
import { cityData } from './data/cityData'
import type { MonumentSort, PlaceCategory } from './types'

function App() {
  const [activeCategory, setActiveCategory] = useState<PlaceCategory>('all')
  const [monumentSort, setMonumentSort] = useState<MonumentSort>('recommended')
  const [showAllEvents, setShowAllEvents] = useState(false)

  const visiblePlaces = useMemo(() => {
    if (activeCategory === 'all') {
      return cityData.places
    }

    return cityData.places.filter((place) => place.category === activeCategory)
  }, [activeCategory])

  const visibleMonuments = useMemo(() => {
    if (monumentSort === 'alphabetical') {
      return [...cityData.monuments].sort((firstMonument, secondMonument) =>
        firstMonument.name.localeCompare(secondMonument.name, 'ru'),
      )
    }

    return cityData.monuments
  }, [monumentSort])

  const visibleEvents = useMemo(() => {
    return showAllEvents ? cityData.events : cityData.events.slice(0, 3)
  }, [showAllEvents])

  return (
    <main className={styles.page}>
      <Header cityName={cityData.name} navigation={cityData.navigation} />

      <Hero
        cityName={cityData.name}
        tagline={cityData.tagline}
        description={cityData.description}
        bestSeason={cityData.bestSeason}
        stats={cityData.heroStats}
      />

      <section className={styles.section}>
        <Information
          cityName={cityData.name}
          description={cityData.description}
          highlights={cityData.highlights}
        />
      </section>

      <section className={styles.section}>
        <EntertainmentPlaces
          places={visiblePlaces}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>

      <section className={styles.section}>
        <Monuments
          monuments={visibleMonuments}
          sortMode={monumentSort}
          onSortChange={setMonumentSort}
        />
      </section>

      <section className={styles.section}>
        <EventsSection
          events={visibleEvents}
          showAllEvents={showAllEvents}
          onToggleShowAll={() => setShowAllEvents((currentState) => !currentState)}
        />
      </section>

      <section className={styles.section}>
        <HistoryFact fact={cityData.historyFact} />
      </section>

      <Footer cityName={cityData.name} footerNote={cityData.footerNote} />
    </main>
  )
}

export default App
