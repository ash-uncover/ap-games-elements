import React from 'react'
import { useClasseName, useClasses } from '@sol.ac/react-commons'
//
import { Hexagon } from '../hexagon/Hexagon'
import { HexagonOrientation } from '../hexagon/HexagonOrientation'
// CSS
import './ElementSelectorTile.css'

// #region Declaration
interface ElementSelectorTileProperties {
  className?: string
  style?: React.CSSProperties

  color: string
  image: string
  name: string
  orientation: HexagonOrientation
  size?: string
  onClick: () => void
}
// #endregion

// #region Component
export const ElementSelectorTile = ({
  className,
  style,

  color,
  image,
  name,
  orientation,
  size,
  onClick,
}: ElementSelectorTileProperties) => {

  // #region > Hooks
  const { classBuilder, classes } = useClasses(['ap-elements-element-selector-tile'])
  useClasseName(classBuilder, className)
  // #endregion

  // #region > Events
  function handleClick() {
    onClick()
  }
  // #endregion

  // #region > Render
  return (
    <Hexagon
      // style={{
      //   ...style,
      //   // @ts-ignore
      //   "--ap-elements-element-selector-tile--border-color": color
      // }}
      // title={name}
      className={classes}
      borderColor='red'
      orientation={orientation}
    >
      <div
        className='ap-elements-element-selector-tile__content'
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          background: 'grey'
        }}
        onClick={handleClick}
      >
        <img
          className='ap-elements-element-selector-tile__image'
          src={image}
        />
      </div>
    </Hexagon >
  )
  // #endregion
}
// #endregion
