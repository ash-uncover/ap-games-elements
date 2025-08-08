import React from 'react'
import { useClasseName, useClasses } from '@sol.ac/react-commons'
//
import { type HexagonOrientation, HexagonOrientations } from './HexagonOrientation'
//
import './HexagonContainer.css'

// #region Declaration
export interface HexagonContainerProperties extends React.PropsWithChildren {
  className?: string
  style?: React.CSSProperties

  borderColor: string
  borderWidth: string
  orientation: HexagonOrientation
  size: string
}
// #endregion

// #region Component
export const HexagonContainer = ({
  className,
  style,

  borderColor,
  borderWidth,
  orientation,
  size,

  children,
}: HexagonContainerProperties) => {

  // #region > Hooks
  const { classBuilder, classes } = useClasses(['ap-hexagon-container'])
  useClasseName(classBuilder, className)
  React.useEffect(() => {
    const o = orientation || HexagonOrientations.VERTICAL
    const c = `ap-hexagon-container--${o.toLocaleLowerCase()}`
    classBuilder.add(c)
    return () => {
      classBuilder.remove(c)
    }
  }, [orientation])
  // #endregion

  // #region > Render

  return (
    <div
      className={classes}
      style={{
        ...style,
        // @ts-ignore
        '--ap-hexagon-container--hexagon-background-color': borderColor,
        '--ap-hexagon-container--hexagon-border-width': borderWidth,
        '--ap-hexagon-container--hexagon-size': size
      }}
    >
      {children}
    </div>
  )
}
// #endregion
