import React from 'react'
//
import { HexagonOrientation, HexagonOrientations } from './HexagonOrientation'

// #region Context
interface HexagonContextProperties {
  borderColor: string
  borderWidth: string
  orientation: HexagonOrientation
  size: string
}
export const HexagonContext = React.createContext<HexagonContextProperties>({
  borderColor: 'black',
  borderWidth: '2px',
  orientation: HexagonOrientations.VERTICAL,
  size: '100px'
})
// #endregion

// #region Provider
interface HexagonProviderProperties extends React.PropsWithChildren {
  borderColor: string
  borderWidth: string
  orientation: HexagonOrientation
  size: string
}

export const HexagonProvider = ({
  borderColor,
  borderWidth,
  orientation,
  size,

  children
}: HexagonProviderProperties) => {

  // #region > Hooks
  const [context, setContext] = React.useState({
    borderColor,
    borderWidth,
    orientation,
    size
  })
  React.useEffect(() => {
    setContext({
      borderColor: borderColor || 'black',
      borderWidth: borderWidth || '2px',
      orientation: orientation || HexagonOrientations.VERTICAL,
      size: size || '100px'
    })
  }, [borderColor, borderWidth, orientation, size])
  // #endregion

  // #region > Render
  return (
    <HexagonContext.Provider value={context}>
      {children}
    </HexagonContext.Provider>
  )
  // #endregion
}
// #endregion
