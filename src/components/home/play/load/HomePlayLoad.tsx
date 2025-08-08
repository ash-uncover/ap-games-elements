import React from 'react'
import { useTranslation } from 'react-i18next'
import { useClasses } from '@sol.ac/react-commons'
// CSS
import './HomePlayLoad.css'

// #region Declaration
interface HomePlayLoadProperties {
}
// #endregion

// #region Component
export const HomePlayLoad = ({
}: HomePlayLoadProperties) => {

  // #region > Hooks
  const { t } = useTranslation()
  const { classes } = useClasses(['ap-elements-home-play-load'])
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  return (
    <main className={classes}>
      LOAD GAME      
    </main>
  )
  // #endregion
}
// #endregion