import React from 'react'
import { useTranslation } from 'react-i18next'
import { 
  useClasses 
} from '@sol.ac/react-commons'
// CSS
import './HomeCredits.css'

// #region Declaration
interface HomeCreditsProperties {
}
// #endregion

// #region Component
export const HomeCredits = ({
}: HomeCreditsProperties) => {

  // #region > Hooks
  const { t } = useTranslation()
  const { classes } = useClasses(['ap-elements-home-credits'])
  // #endregion

  // #region > Events
  // #endregion

  // #region > Render
  return (
    <main className={classes}>
      CREDITS
    </main>
  )
  // #endregion
}
