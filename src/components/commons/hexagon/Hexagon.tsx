import React from 'react'
import { useClasseName, useClasses } from '@sol.ac/react-commons'
//
import { type HexagonOrientation, HexagonOrientations } from './HexagonOrientation'
//
import './Hexagon.css'

// #region Declaration
export interface HexagonProperties extends React.PropsWithChildren {
  className?: string

  borderColor?: string
  borderWidth?: string
  orientation?: HexagonOrientation
  size?: string
}
// #endregion

// #region Component
export const Hexagon = ({
  className,

  borderColor,
  borderWidth,
  orientation,
  size,

  children,
}: HexagonProperties) => {

  // #region > Hooks
  const { classBuilder, classes } = useClasses(['ap-hexagon'])
  useClasseName(classBuilder, className)
  React.useEffect(() => {
    const o = orientation || HexagonOrientations.VERTICAL    
    const c = `ap-hexagon--${o.toLocaleLowerCase()}`
    classBuilder.add(c)
    return () => classBuilder.remove(c)
  }, [orientation])
  // #endregion

  // #region > Render

  return (
    <div
      className={classes}
      style={{
        // @ts-ignore
        '--ap-hexagon--background-color': borderColor,
        '--ap-hexagon--border-width': borderWidth,
        '--ap-hexagon--size': size
      }}
    >
      <div className='ap-hexagon__layer ap-hexagon__layer--border'>
        <div className='ap-hexagon__layer ap-hexagon__layer--content-container'>
          <div className='ap-hexagon__layer ap-hexagon__layer--content'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
// #endregion
