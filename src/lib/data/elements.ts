export interface ElementData {
  id: string
  name: string
  color: string
}

export const ELEMENTS: Record<string, ElementData> = {
  W: {
    id: 'W',
    name: 'Water',
    color: 'blue'
  },
  E: {
    id: 'E',
    name: 'Earth',
    color: 'green'
  },
  F: {
    id: 'F',
    name: 'Fire',
    color: 'orange'
  },
  A: {
    id: 'A',
    name: 'Air',
    color: 'lightgrey'
  },
  B: {
    id: 'B',
    name: 'Blood',
    color: 'red'
  },
  D: {
    id: 'D',
    name: 'Death',
    color: 'purple'
  },
  M: {
    id: 'M',
    name: 'Metal',
    color: 'brown'
  }
}