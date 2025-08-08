import { RootState } from '../state'

export const base = (state: RootState) => state.app

export const embedded = (state: RootState) => base(state).embedded
export const gameId = (state: RootState) => base(state).gameId
export const loadStatus = (state: RootState) => base(state).loadStatus

export const AppSelectors = {
  embedded,
  gameId,
  loadStatus,
}
