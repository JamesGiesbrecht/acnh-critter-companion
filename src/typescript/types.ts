import { Breakpoint, TableCellProps } from '@material-ui/core'
import { Statuses } from 'store'

export type CritterType = 'Bugs' | 'Fish' | 'Sea'
type CritterSize = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'X-Large' | 'Huge' | 'Long'
type CritterSpeed = 'Stationary' | 'Very slow' | 'Slow' | 'Medium' | 'Fast' | 'Very fast'
// eslint-disable-next-line prettier/prettier
export type Hour = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type JsonCritter = {
  id: string
  name: string
  type: CritterType
  location: string
  size?: CritterSize
  speed?: CritterSpeed
  startTime: Hour | Hour[]
  endTime: Hour | Hour[]
  value: number
  northernMonths: Month[]
  southernMonths: Month[]
  imagePath: string
}

export type Critter = JsonCritter & {
  isAvailableNow?: boolean
  [Statuses.Leaving]?: boolean
  [Statuses.New]?: boolean
  [Statuses.Incoming]?: boolean
  months: Month[]
}

export type TableHeadCell = {
  id: keyof Critter
  hidden?: Breakpoint
  align: TableCellProps['align']
  label: string
}
