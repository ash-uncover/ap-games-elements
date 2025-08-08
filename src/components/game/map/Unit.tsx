import React from 'react'

import './Unit.css'

interface UnitProperties {
}

export const Unit = ({
}: UnitProperties) => {

  // #region > Hooks //
  // #endregion

  // Rendering //
  return (
    <div className='ap-elements-unit'>
      <span>icon</span>
      <span>name</span>
    </div>
  )
  // #endregion
}
