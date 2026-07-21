// Demo data for the interactive kiosk section — mirrors the real BespokeTouch
// app (zones, marker positions, oils, catalogue subset) so the demo looks and
// behaves like the product.

export type BodyView = 'front' | 'back'
export type ZoneMark = 'standard' | 'priority' | 'blocked'
export type PressureLevel = 'Lekki' | 'Średni' | 'Mocny' | 'Głęboki'
export type MusicPreference = 'nature' | 'ambient' | 'silence'
export type CommunicationStyle = 'silent' | 'guided'

export type ZoneId =
  // Przód
  | 'scalp'
  | 'face'
  | 'chest'
  | 'abdomen'
  | 'upperArmsFront'
  | 'forearmsFront'
  | 'hands'
  | 'thighsFront'
  | 'shins'
  | 'feetTop'
  // Tył
  | 'nape'
  | 'shoulders'
  | 'upperBack'
  | 'lowerBack'
  | 'upperArmsBack'
  | 'forearmsBack'
  | 'glutes'
  | 'thighsBack'
  | 'calves'
  | 'feetSole'

export interface ZoneDefinition {
  id: ZoneId
  label: string
  view: BodyView
}

export const zoneDefinitions: ZoneDefinition[] = [
  // Przód
  { id: 'scalp', label: 'Głowa (skóra głowy)', view: 'front' },
  { id: 'face', label: 'Twarz', view: 'front' },
  { id: 'chest', label: 'Klatka piersiowa', view: 'front' },
  { id: 'abdomen', label: 'Brzuch', view: 'front' },
  { id: 'upperArmsFront', label: 'Ramiona', view: 'front' },
  { id: 'forearmsFront', label: 'Przedramiona', view: 'front' },
  { id: 'hands', label: 'Dłonie', view: 'front' },
  { id: 'thighsFront', label: 'Uda', view: 'front' },
  { id: 'shins', label: 'Podudzia / Golenie', view: 'front' },
  { id: 'feetTop', label: 'Stopy (wierzch)', view: 'front' },
  // Tył
  { id: 'nape', label: 'Kark', view: 'back' },
  { id: 'shoulders', label: 'Barki', view: 'back' },
  { id: 'upperBack', label: 'Górny grzbiet', view: 'back' },
  { id: 'lowerBack', label: 'Dolny grzbiet', view: 'back' },
  { id: 'upperArmsBack', label: 'Ramiona (tył)', view: 'back' },
  { id: 'forearmsBack', label: 'Przedramiona (tył)', view: 'back' },
  { id: 'glutes', label: 'Pośladki', view: 'back' },
  { id: 'thighsBack', label: 'Uda (tył)', view: 'back' },
  { id: 'calves', label: 'Łydki', view: 'back' },
  { id: 'feetSole', label: 'Stopy (podeszwa)', view: 'back' },
]

export const zoneLabel = (id: ZoneId): string =>
  zoneDefinitions.find((z) => z.id === id)?.label ?? id

export interface MarkerPosition {
  zoneId: ZoneId
  left: number
  top: number
}

// Percentages relative to the traced figure (viewBox 308 x 972).
export const frontMarkers: MarkerPosition[] = [
  { zoneId: 'scalp', left: 50, top: 3 },
  { zoneId: 'face', left: 50, top: 9 },
  { zoneId: 'chest', left: 50, top: 25 },
  { zoneId: 'abdomen', left: 50, top: 37 },
  { zoneId: 'upperArmsFront', left: 16, top: 29 },
  { zoneId: 'upperArmsFront', left: 84, top: 29 },
  { zoneId: 'forearmsFront', left: 11, top: 44 },
  { zoneId: 'forearmsFront', left: 89, top: 44 },
  { zoneId: 'hands', left: 9, top: 52 },
  { zoneId: 'hands', left: 91, top: 52 },
  { zoneId: 'thighsFront', left: 40, top: 61 },
  { zoneId: 'thighsFront', left: 60, top: 61 },
  { zoneId: 'shins', left: 43, top: 82 },
  { zoneId: 'shins', left: 57, top: 82 },
  { zoneId: 'feetTop', left: 42, top: 96 },
  { zoneId: 'feetTop', left: 58, top: 96 },
]

export const backMarkers: MarkerPosition[] = [
  { zoneId: 'nape', left: 50, top: 11 },
  { zoneId: 'shoulders', left: 50, top: 17 },
  { zoneId: 'upperBack', left: 50, top: 22 },
  { zoneId: 'lowerBack', left: 50, top: 33 },
  { zoneId: 'upperArmsBack', left: 16, top: 29 },
  { zoneId: 'upperArmsBack', left: 84, top: 29 },
  { zoneId: 'forearmsBack', left: 11, top: 44 },
  { zoneId: 'forearmsBack', left: 89, top: 44 },
  { zoneId: 'glutes', left: 50, top: 46 },
  { zoneId: 'thighsBack', left: 40, top: 61 },
  { zoneId: 'thighsBack', left: 60, top: 61 },
  { zoneId: 'calves', left: 43, top: 82 },
  { zoneId: 'calves', left: 57, top: 82 },
  { zoneId: 'feetSole', left: 42, top: 96 },
  { zoneId: 'feetSole', left: 58, top: 96 },
]

export const markersForView = (view: BodyView): MarkerPosition[] =>
  view === 'front' ? frontMarkers : backMarkers

export interface OilOption {
  id: string
  name: string
  subtitle: string
}

export const oils: OilOption[] = [
  { id: 'lawenda-rumianek', name: 'Lawenda i Rumianek', subtitle: 'Relaksacyjny' },
  { id: 'eukaliptus-mieta', name: 'Eukaliptus i Mięta', subtitle: 'Regeneracyjny' },
  { id: 'sandalowiec-cedr', name: 'Sandałowiec i Cedr', subtitle: 'Uziemiający' },
  { id: 'bezzapachowy', name: 'Bezzapachowy', subtitle: 'Hipoalergiczny' },
]

export interface Treatment {
  id: string
  name: string
  description: string
  durations: { minutes: number; price: number }[]
}

export const treatments: Treatment[] = [
  {
    id: 'balijski',
    name: 'Masaż Balijski',
    description:
      'Rytmiczne, głębokie ruchy łączące akupresurę i aromaterapię dla pełnego odprężenia.',
    durations: [
      { minutes: 60, price: 264 },
      { minutes: 90, price: 352 },
    ],
  },
  {
    id: 'lomi-lomi',
    name: 'Masaż Lomi Lomi',
    description:
      'Hawajska technika płynnych, tanecznych ruchów przedramion, uwalniająca napięcia.',
    durations: [
      { minutes: 60, price: 264 },
      { minutes: 120, price: 488 },
    ],
  },
  {
    id: 'goracymi-kamieniami',
    name: 'Masaż Gorącymi Kamieniami',
    description:
      'Ciepło wulkanicznych kamieni bazaltowych rozluźnia mięśnie i koi zmysły.',
    durations: [
      { minutes: 90, price: 368 },
      { minutes: 120, price: 504 },
    ],
  },
  {
    id: 'tajski',
    name: 'Masaż Tajski',
    description:
      'Techniki rozciągania i ucisku poprawiające elastyczność i krążenie.',
    durations: [
      { minutes: 60, price: 264 },
      { minutes: 90, price: 352 },
    ],
  },
]

export const pressureLevels: PressureLevel[] = ['Lekki', 'Średni', 'Mocny', 'Głęboki']

export const musicLabels: Record<MusicPreference, string> = {
  nature: 'Dźwięki natury',
  ambient: 'Ambient',
  silence: 'Cisza',
}

export const communicationLabels: Record<CommunicationStyle, string> = {
  silent: 'Cisza i relaks',
  guided: 'Rozmowa mile widziana',
}

export const formatPrice = (pln: number): string => `${pln} zł`
