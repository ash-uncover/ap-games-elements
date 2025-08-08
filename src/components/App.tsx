import React from 'react'
import { useSelector } from 'react-redux'
import { useClasses } from '@sol.ac/react-commons'
import { GameApp } from '@sol.ac/games-common'
//
import { AppSelectors } from '../store/app/app.selectors'
import { HomeMenu } from './home/HomeMenu'
// CSS
import './App.css'

// #region Declaration
interface AppProperties { }
// #endregion

// #region Component
export const App = ({
}: AppProperties) => {

  // #region > Hooks
  const { classes } = useClasses(['ap-elements-app'])
  // #endregion

  // #region > Render
  return (
    <GameApp
      className={classes}
      name='ap-elements'
    >
      <AppInner />
    </GameApp>
  )
  // #endregion
}
// #endregion

// #region Component
export const AppInner = ({
}: AppProperties) => {

  // #region > Hooks
  const gameId = useSelector(AppSelectors.gameId)
  // #endregion

  // #region > Render
  if (!gameId) {
    return <HomeMenu  />
  }
  return <div>TOTO</div>
  // #endregion
}
// #endregion

