import React from 'react'
import { useTranslation } from 'react-i18next'
import { useClasses } from '@sol.ac/react-commons'
//
import { GameSetup } from '../../../commons/gamesetup/GameSetup'
import { GameLocalService } from '../../../../service/GameLocalService'
// CSS
import './HomePlayNew.css'

// #region Delcaration
interface HomePlayNewProperties {}
// #endregion

// #region Component
export const HomePlayNew = ({
}: HomePlayNewProperties) => {

  // #region > Hooks
  const { t } = useTranslation()
  const { classes } = useClasses(['ap-elements-home-play-new'])
  // #endregion

  // #region > Events
  function handleCancelGame() {

  }
  function handleCreateGame() {

  }
  // #endregion

  // #region > Render
  return (
    <main className={classes}>
      <GameSetup
        service={GameLocalService}
        onCancelGame={handleCancelGame}
        onCreateGame={handleCreateGame}
      />
    </main>
  )
  // #endregion
}
// #endregion