import { configureStore } from '@reduxjs/toolkit'

import { AppSlice } from './app/app.slice'
import { DataSlice } from './data/data.slice'
import { GameSlice } from './game/game.slice'
import { GamesSlice } from './games/games.slice'

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    data: DataSlice.reducer,
    game: GameSlice.reducer,
    games: GamesSlice.reducer,
  }
})
