import {
  CaseReducer,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
//
import { 
  AppState, 
  AppLoadStatus, 
  AppLoadStatuses 
} from './app.state'

// #region State
const initialState: AppState = {
  embedded: false,
  loadStatus: AppLoadStatuses.NONE,
  gameId: null
}
// #endregion

// #region Reducers
interface PayloadEmbedded {
  embedded: boolean
}
const setEmbedded: CaseReducer<AppState, PayloadAction<PayloadEmbedded>> = (state, action) => {
  const {
    embedded
  } = action.payload
  state.embedded = embedded
}
const setLoadStatus: CaseReducer<AppState, PayloadAction<AppLoadStatus>> = (state, action) => {
  state.loadStatus = action.payload
}
interface PayloadGameId {
  gameId: string | null
}
const setGameId: CaseReducer<AppState, PayloadAction<PayloadGameId>> = (state, action) => {
  const {
    gameId
  } = action.payload
  state.gameId = gameId
}
// #endregion

// #region Slice
export const AppSlice = createSlice({
  name: 'app',
  initialState,

  reducers: {
    setEmbedded,
    setLoadStatus,
    setGameId,
  },
})
// #endregion
