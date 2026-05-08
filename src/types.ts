export type PlaceCategory = 'all' | 'family' | 'food' | 'nature'

export type MonumentSort = 'recommended' | 'alphabetical'

export interface NavigationLink {
  label: string
  href: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface Highlight {
  title: string
  description: string
}

export interface Place {
  title: string
  category: Exclude<PlaceCategory, 'all'>
  description: string
  timing: string
}

export interface Monument {
  name: string
  year: string
  description: string
}

export interface EventItem {
  title: string
  period: string
  description: string
  isFree: boolean
}

export interface HistoryFactData {
  title: string
  summary: string
  details: string
}

export interface CityData {
  name: string
  tagline: string
  description: string
  bestSeason: string
  navigation: NavigationLink[]
  heroStats: HeroStat[]
  highlights: Highlight[]
  places: Place[]
  monuments: Monument[]
  events: EventItem[]
  historyFact: HistoryFactData
  footerNote: string
}
