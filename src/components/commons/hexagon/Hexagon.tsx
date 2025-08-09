import React from 'react'
import { useClasseName, useClasses } from '@sol.ac/react-commons'
//
import { type HexagonOrientation } from './HexagonOrientation'
import { HexagonContext } from './HexagonProvider'
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
  const c = React.useContext(HexagonContext)

  const [borderColorFinal, setBorderColorFinal] = React.useState(c.borderColor)
  React.useEffect(() => {
    setBorderColorFinal(borderColor || c.borderColor)
  }, [borderColor])

  const [borderWidthFinal, setBorderWidthFinal] = React.useState(c.borderWidth)
  React.useEffect(() => {
    setBorderWidthFinal(borderWidth || c.borderWidth)
  }, [borderWidth])

  const [orientationFinal, setOrientationFinal] = React.useState(c.orientation)
  React.useEffect(() => {
    setOrientationFinal(orientation || c.orientation)
  }, [orientation])

  const [sizeFinal, setSizeFinal] = React.useState(c.size)
  React.useEffect(() => {
    setSizeFinal(size || c.size)
  }, [size])

  const { classBuilder, classes } = useClasses(['ap-hexagon'])
  useClasseName(classBuilder, className)
  React.useEffect(() => {
    const c = `ap-hexagon--${orientationFinal.toLocaleLowerCase()}`
    classBuilder.add(c)
    return () => classBuilder.remove(c)
  }, [orientationFinal])
  // #endregion

  // #region > Render

  return (
    <div
      className={classes}
      style={{
        // @ts-ignore
        '--ap-hexagon--background-color': borderColorFinal,
        '--ap-hexagon--border-width': borderWidthFinal,
        '--ap-hexagon--size': sizeFinal
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
