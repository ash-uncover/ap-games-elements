import React from 'react'
import { useClasses } from '@sol.ac/react-commons'
// CSS
import './AppCredits.css'

// #region Declaration
interface AppCreditsProperties { }
// #endregion

// #region Component
export const AppCredits = ({
}: AppCreditsProperties) => {

  // #region > Hooks
  const { classes } = useClasses(['ap-elements-app-credits'])
  // #endregion

  // #region > Render
  return (
    <div className={classes}>
      @aSHuncover 2024
    </div>
  )
  // #endregion
}
// #endregion