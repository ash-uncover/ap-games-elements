import React from 'react'
import { useTranslation } from 'react-i18next'
import { useClasses } from '@sol.ac/react-commons'
// CSS
import './HomePlayOnline.css'

// #region Declaration
interface HomePlayOnlineProperties {
}
// #endregion

// #region Component
export const HomePlayOnline = ({
}: HomePlayOnlineProperties) => {

  // #region > Hooks
  const { t } = useTranslation()
  const { classes } = useClasses(['ap-elements-home-play-online'])
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  return (
    <main className='ap-elements-home-play-online'>
      PLAY ONLINE
    </main>
  )
  // #endregion
}
// #endregion