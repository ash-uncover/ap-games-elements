import { RootState } from '../state'

export const base = (state: RootState) => state.data

export const embedded = (state: RootState) => base(state).embedded
export const language = (state: RootState) => base(state).language
export const loadStatus = (state: RootState) => base(state).loadStatus

export const DataSelectors = {
  embedded,
  language,
  loadStatus,
}
